import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/shankar1601",
      icon: "fa-github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/home",
      icon: "fa-linkedin"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rithish_01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: "fa-instagram"
    }
  ];

  return (
    <footer id="contact" className="footer-section">
      <div className="contact-card glass-panel">
        <h2 className="section-title text-gradient">Let's Connect</h2>
        <p className="contact-subtitle">
          Open to new opportunities, collaborations, and conversations.
        </p>
        
        <div className="contact-details">
          <a href="mailto:Shankar16101@gmail.com" className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <span>Shankar16101@gmail.com</span>
          </a>
          <a href="tel:+917904486984" className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <span>+91 7904486984</span>
          </a>
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={link.name}
              className="social-icon"
            >
              <i className={`fa-brands ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shankar A. All Rights Reserved.</p>
        <p className="footer-credit">Built with React & Surrealism UI</p>
      </div>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showTopBtn ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;