import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Formula 1</h3>
            <p>The pinnacle of motorsport. Experience the speed, technology, and passion that defines Formula 1 racing.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/drivers">Drivers</Link></li>
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/standings">Standings</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">News</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Statistics</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <p>Stay updated with the latest Formula 1 news and updates.</p>
            <div className="newsletter">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Formula 1 Website. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
