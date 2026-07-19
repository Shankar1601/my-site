import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="chelsea-footer">
      {/* Structural separation from the main content */}
      <hr className="hairline-divider" />
      
      <div className="footer-content">
        {/* Left Side: Brand Lockup */}
        <div className="footer-brand">
          <span className="focal-dot"></span>
          <span className="footer-wordmark text-heading">SHANKARA.</span>
        </div>
        
        {/* Right Side: Interactive Pill Links */}
        <div className="footer-links">
          <a href="mailto:your.email@example.com" className="pill-button outline">
            EMAIL
          </a>
          <a href="https://github.com/shankar1601" target="_blank" rel="noopener noreferrer" className="pill-button outline">
            GITHUB
          </a>
        </div>
      </div>
      
      {/* Bottom Metadata */}
      <div className="footer-meta">
        <span className="credit-caption">© 2026. FULL STACK DEVELOPER — CHENNAI, IN.</span>
      </div>
    </footer>
  );
};

export default Footer;