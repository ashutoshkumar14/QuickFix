import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand-logo">
            <BrandLogo variant="footer" />
          </Link>
          <p className="footer-brand-tagline">
            Trusted professionals for every home <br />
            Quality service right at your doorstep
          </p>

          <div className="footer-contact-capsules">
            <a href="tel:1800123456" className="contact-capsule">
              <PhoneCall size={15} className="capsule-icon" />
              <span>1800-QUICK-FIX</span>
            </a>
            <a href="mailto:support@quickfix.in" className="contact-capsule">
              <Mail size={15} className="capsule-icon" />
              <span>support@quickfix.in</span>
            </a>
          </div>
        </div>

        {/* Popular Services Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title"> Services</h4>
          <ul className="footer-nav-list">
            <li>
              <Link to="/services">
                AC Repair & Deep Clean <ArrowUpRight size={13} className="nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/services">
                Washing Machine Repair <ArrowUpRight size={13} className="nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/services">
                Refrigerator Maintenance <ArrowUpRight size={13} className="nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/services">
                RO Purifier Filter Service <ArrowUpRight size={13} className="nav-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/services">
                Emergency Electrician <ArrowUpRight size={13} className="nav-arrow" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Platform Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Platform</h4>
          <ul className="footer-nav-list">
            <li><Link to="/">How It Works</Link></li>
            <li><Link to="/services">Explore Catalog</Link></li>
            <li><Link to="/book-service">Book an Appointment</Link></li>
            <li><Link to="/login">Technician Partner Portal</Link></li>
            <li><Link to="/login">Admin Operations Console</Link></li>
          </ul>
        </div>

        {/* Coverage Areas */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Available</h4>
          <div className="cities-tag-grid">
           
            <span className="city-pill live-badge">● Delhi NCR</span>
          </div>
          <div className="operating-hours-box">
            <strong>Service Hours</strong>
            <p>Daily 8 Am – 9 Pm</p>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© 2026 QuickFix Technologies Built for  Modern Indian Homes</p>
          <div className="footer-legal-links">
            <Link to="/">Privacy Policy</Link>
            <span>•</span>
            <Link to="/">Terms of Service</Link>
            <span>•</span>
            <Link to="/">Safety Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;