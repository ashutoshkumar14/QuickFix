import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import BrandLogo from './BrandLogo';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* QuickFix Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <BrandLogo variant="navbar" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-top' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-mid' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-bot' : ''}`}></span>
        </button>

        {/* Navigation Menu Links */}
        <div className={`nav-menu-wrapper ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/book-service" 
                className={`nav-link ${location.pathname === '/book-service' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Book Service
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="nav-actions">
            <Link to="/login" className="btn-secondary" onClick={closeMenu}>
              Login
            </Link>
            
            {/* Sleek Modern Brand Book Button */}
            <Link to="/book-service" className="btn-navbar-book" onClick={closeMenu}>
              <Calendar size={15} className="book-btn-icon" />
              <span>Book Service</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;