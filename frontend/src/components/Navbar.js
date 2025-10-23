import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <span className="brand-icon">🏎️</span>
            <span className="brand-text">F1</span>
          </Link>

          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/teams" 
              className={`navbar-link ${isActive('/teams') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Teams
            </Link>
            <Link 
              to="/drivers" 
              className={`navbar-link ${isActive('/drivers') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Drivers
            </Link>
            <Link 
              to="/calendar" 
              className={`navbar-link ${isActive('/calendar') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Calendar
            </Link>
            <Link 
              to="/standings" 
              className={`navbar-link ${isActive('/standings') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Standings
            </Link>
            <Link 
              to="/gallery" 
              className={`navbar-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          <div className="navbar-controls">
            <button 
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="hamburger"></span>
              <span className="hamburger"></span>
              <span className="hamburger"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
