import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-icon">🐾</span>
        Animal Helper
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Blog
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
