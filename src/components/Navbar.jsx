import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Navbar.css';

function Navbar({ imageSrcPath, navItems }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [query, setQuery] = useState('');
  const [marqueeEvents, setMarqueeEvents] = useState([]);
  const navigate = useNavigate();

  const STRAPI_API_URL = 'http://localhost:1337/api/gec-announcement-bars';
  const STRAPI_BASE_URL = 'http://localhost:1337';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(STRAPI_API_URL, {
          params: {
            sort: 'createdAt:desc',
            populate: '*', // Adjusted to avoid specific 'link' population since it's not needed
          },
        });
        setMarqueeEvents(response.data.data); // Directly use data as it’s a collection type
      } catch (error) {
        console.error('Error fetching events from Strapi:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const lowerQuery = query.toLowerCase();
    const routes = {
      home: '/home',
      about: '/aboutinstitute',
      principal: '/principaldesk',
      vission: '/aboutvm',
      ug: '/ug',
      pg: '/pg',
      phd: '/phd',
      cse: '/cse',
      instru: '/instru',
      mech: '/mech',
      contact: '/contact',
      grievance: '/login'
    };
    if (routes[lowerQuery]) {
      navigate(routes[lowerQuery]);
    } else {
      alert('Oops.. You searched something that is not available.');
    }
  };

  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown-submenu .dropdown-toggle');
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const subMenu = this.nextElementSibling;
        if (subMenu) {
          subMenu.classList.toggle('show');
          subMenu.classList.toggle('hide');
        }
      });
    });
  }, []);

  const renderSubLinks = (subLinks) => {
    return subLinks.map((subLink, subIndex) => {
      const routeMap = {
        "Vision and Mission": "/aboutvm",
        "About Institute": "/aboutinstitute",
        "Principal's Desk": "/principaldesk",
        "UG (B.Tech)": "/ug",
        "Ph.D": "/phd",
        "PG (M.Tech)": "/pg",
        "Computer Science & Engineering": "/cse",
        "Electrical Engineering": "/elec",
        "Instrumentation Engineering": "/instru",
        "Mechanical Engineering": "/mech",
        "Grievance Form": "/login",
        "Tenders": "/tenders",
        "Girls Hostel": "/girlshostel",
        "Boys Hostel": "/boyshostel",
        "Committees": "/committees",
        "Admission/Exam/CIIIT fee": "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=2976360",
        "Academic Verification/Security Deposit": "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=2976360",
        "Tender/Testing": "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=2976360",
        "Hostel Fee": "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=2976360",
        "Payment by the Student": "https://eazypay.icicibank.com/eazypayLink?P1=mBO7cjSAmo9OXu/JIqWW9w=",
        "Payment for Testing and Consultancy": "https://eazypay.icicibank.com/eazypayLink?P1=QgBSGQ03E9jZBrZgASNtLQ=",
        "Payment for Ex Student Verification": "https://eazypay.icicibank.com/eazypayLink?P1=0Mu4L8f1DKJifFJeYNOYWA=",
        "Alumni": "https://alumni-gcoec.vercel.app/",
        "About CIIIT": "/aboutciiit",
        "Admission Form": "https://www.gcoec.ac.in/gcoec/PDF/Adm-CIIIT-Form.pdf",
        "CIIIT Brochure": "https://www.gcoec.ac.in/gcoec/PDF/CIIIT-Brochure.pdf",
        "CIIIT Contact": "/ciiitcontact",
        "CIIIT Leaflet": "https://www.gcoec.ac.in/gcoec/PDF/CIIIT-Leaflet.pdf",
        "Courses Details": "/coursesdetails",
        "Eligibility Criteria": "/eligibilitycriteria",
        "News & Events": "/newsevents",
        "Principal & HOD": "/principalHods",
        "Student Section": "/studentSection",
        "Office": "/Office",
        "Training & Placements": "/tpopage"
      };
      if (typeof subLink === "string") {
        const isExternal = routeMap[subLink] && (routeMap[subLink].startsWith("http://") || routeMap[subLink].startsWith("https://"));
        if (isExternal) {
          return (
            <li key={subIndex}>
              <a
                href={routeMap[subLink]}
                className="dropdown-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                {subLink}
              </a>
            </li>
          );
        }
        return (
          <li key={subIndex}>
            <Link to={routeMap[subLink] || `/${subLink.toLowerCase().replace(/ /g, '-')}`} className="dropdown-item">
              {subLink}
            </Link>
          </li>
        );
      } else if (typeof subLink === "object" && subLink.subLinks) {
        return (
          <li key={subIndex} className="dropdown-submenu">
            <a
              href="#"
              className="dropdown-item dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              {subLink.name}
            </a>
            <ul className="dropdown-menu">
              {renderSubLinks(subLink.subLinks)}
            </ul>
          </li>
        );
      }
    });
  };

  const isRecentEvent = (createdAt) => {
    const eventDate = new Date(createdAt);
    const now = new Date();
    const diffInDays = (now - eventDate) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7;
  };

  return (
    <div className="main-div" style={{ display: 'block' }}>
      <nav className="d-flex navbar navbar-expand-xl">
        <div className="d-flex container-fluid ms-4">
          <a className="navbar-brand" href="#">
            <img
              src={imageSrcPath}
              width="85"
              height="100"
              className="d-inline-block align-center"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="me-auto mb-2 mb-md-1 justify-content-center navbar-nav">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="nav-item flex"
                  onClick={() => setSelectedIndex(index)}
                >
                  {item.subLinks ? (
                    <div className="nav-item dropdown">
                      <Link
                        to={`/${item.name.toLowerCase()}`}
                        className="nav-link dropdown-toggle"
                        id={`navbarDropdown${index}`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.name}
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby={`navbarDropdown${index}`}
                      >
                        {renderSubLinks(item.subLinks)}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={`/${item.name.toLowerCase()}`}
                      className={selectedIndex === index ? "nav-link active fw-bold" : "nav-link"}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <form className="d-flex me-3" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="marquee-container">
        <div className="marquee-text">
          {marqueeEvents.map((event, eventIndex) => (
            <React.Fragment key={eventIndex}>
              {event.url ? (
                <React.Fragment>
                  <a 
                    className="event-links-nav" 
                    href={event.url} // Directly use the url field from JSON
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.title}
                  </a>
                  {isRecentEvent(event.createdAt) && (
                    <div className="new-blink-nav-01 badge rounded-pill me-1">NEW</div>
                  )}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <a 
                    className="event-links-nav" 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.title}
                  </a>
                  {isRecentEvent(event.createdAt) && (
                    <div className="new-blink-nav-01 badge rounded-pill me-1">NEW</div>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;