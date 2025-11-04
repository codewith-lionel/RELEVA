import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// 1. Import your logo
import logo from "../assets/logo.png"; // Make sure this path and filename are correct

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleNavClick = () => {
    setIsNavActive(false);
  };

  return (
    <header className="header">
      <div className="container">
        {/* 2. Replace the text logo with an image wrapped in a link */}
        <NavLink to="/" className="logo-link" onClick={handleNavClick}>
          <img
            src={logo}
            alt="Releva Physiotherapy Clinic Logo"
            className="logo-img"
          />
        </NavLink>

        <nav className={isNavActive ? "active" : ""}>
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={handleNavClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleNavClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={handleNavClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={handleNavClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <NavLink to="/contact" className="btn btn-primary btn-book-appointment">
          Book Appointment
        </NavLink>

        <div className="hamburger" onClick={() => setIsNavActive(!isNavActive)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
