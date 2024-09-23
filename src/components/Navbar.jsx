import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar({ imageSrcPath, navItems }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (x) => {
    x.preventDefault();
    
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
      Grievance:'/login'
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
        "Grievance Form": "/login",
        "Girls Hostel": "/girlshostel",
        "Boys Hostel": "/boyshostel"
      };

      if (typeof subLink === "string") {
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
    <nav className="navbar navbar-expand-md ">
      <div className="container-fluid ms-4">
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
          <ul className="navbar-nav me-auto mb-2 mb-md-1 justify-content-center w-100">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="nav-item"
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
              onChange={(x) => setQuery(x.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
