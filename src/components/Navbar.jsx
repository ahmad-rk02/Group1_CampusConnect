import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar({ imageSrcPath, navItems }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    // Simple search logic
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
        }if (subMenu) {
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
          "Office":"/Office"
      };

      if (typeof subLink === "string") {
        const isExternal = routeMap[subLink] && (routeMap[subLink].startsWith("http://") || routeMap[subLink].startsWith("https://"));

        // Handle external links
        if (isExternal) {
          return (
            <li key={subIndex}>
              <a
                href={routeMap[subLink]}
                className="dropdown-item"
                target="_blank"  // Open link in a new tab
                rel="noopener noreferrer"  // Security for opening new tab
              >
                {subLink}
              </a>
            </li>
          );
        }

        // Handle internal links
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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
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
          <a className="event-links-nav " href='https://www.gcoec.ac.in/gcoec/PDF/First%20Year_Girls%20Quarter_Allotment%20List_2024-25.pdf'>First Year Girls Quarter Allotment List 2024-25</a>
          <div className="new-blink-nav-01 badge rounded-pill me-1">NEW</div>
          <a className="event-links-nav" href='https://www.gcoec.ac.in/gcoec/PDF/First%20Year_%20Girls%20Quarter_%20Allotment%20List(%20Against%20Cancellation)_2024-25.pdf'>First Year Girls Quarter Allotment List( Against Cancellation) 2024-25</a>
          <div className="new-blink-nav-01 badge rounded-pill me-1">NEW</div>
          <a className="event-links-nav" href='https://docs.google.com/forms/d/e/1FAIpQLSc8majz1zChMy755RbmPX1P1-pnOy9FNDkxqptIz29ge9cQuA/viewform'>ADDITIONAL INSTITUTE LEVEL SPOT ROUND (DIRECT SECOND YEAR ENGINEERING) ON 19/10/2024</a>
          <div className="new-blink-nav-01 badge rounded-pill me-1">NEW</div>
          <a className="event-links-nav" href='https://www.gcoec.ac.in/gcoec/PDF/Direct%20Second%20Year_Hostel%20Allotment%20List%20_%20Against%20Cancellation_2024-25.pdf'>Direct Second Year Hostel Allotment List-Against Cancellation-2024-25</a>
          <div className="new-blink-nav-01 badge rounded-pill me-1">NEW</div>
          <a className="event-links-nav" href='https://www.gcoec.ac.in/gcoec/PDF/DSE%20INSTITUTE%20level%20merit%20list%202024%2025.pdf'>DSE INSTITUTE level merit list 2024-25</a>
          <div className="new-blink-nav-01 badge rounded-pill me-1">NEW</div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;