import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ imageSrcPath, navItems }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown-submenu .dropdown-toggle');

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const parentDropdown = this.closest('.dropdown-menu');
        parentDropdown.classList.toggle('show');
        parentDropdown.classList.toggle('dropdown-submenu-show');

        const subMenu = this.nextElementSibling;
        if (subMenu) {
          subMenu.classList.toggle('show');
          subMenu.classList.toggle('dropdown-submenu-show');
        }
      });
    });
  }, []);

  const renderSubLinks = (subLinks) => {
    return subLinks.map((subLink, subIndex) => {
      if (subLink === "Vision and Mission") {
        return (
          <li key={subIndex}>
            <Link to="/aboutvm" className="dropdown-item">
              Vision and Mission
            </Link>
          </li>
        );
      }
      if (subLink === "About Institute") {
        return (
          <li key={subIndex}>
            <Link to="/aboutinstitute" className="dropdown-item">
              About Institute
            </Link>
          </li>
        );
      }
      if (subLink === "Principal's Desk") {
        return (
          <li key={subIndex}>
            <Link to="/principaldesk" className="dropdown-item">
              Principal's Desk
            </Link>
          </li>
        );
      }
      if (subLink === "UG (B.Tech)") {
        return (
          <li key={subIndex}>
            <Link to="/ug" className="dropdown-item">
            UG (B.Tech)
            </Link>
          </li>
        );
      }

      if (subLink === "PG (M.Tech)") {
        return (
          <li key={subIndex}>
            <Link to="/pg" className="dropdown-item">
            PG (M.Tech)
            </Link>
          </li>
        );
      }

      if (typeof subLink === "string") {
        return (
          <li key={subIndex}>
            <Link to={`/${subLink.toLowerCase().replace(/ /g, '-')}`} className="dropdown-item">
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
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
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
                    className={
                      selectedIndex === index
                        ? "nav-link active fw-bold"
                        : "nav-link"
                    }
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
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
