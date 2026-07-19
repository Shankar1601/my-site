import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to apply floating glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo text-gradient" onClick={() => setIsMobileMenuOpen(false)}>
          &lt;Shankar /&gt;
        </a>

        {/* Desktop & Mobile Links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'active glass-panel' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {/* Resume Download */}
          <a
            href={`${import.meta.env.BASE_URL}Shankar_A_Full_Stack_Developer_Final_v4.pdf`}
            download="Shankar_A_Resume.pdf"
            className="resume-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>Resume</span>
            <i className="fa-solid fa-download"></i>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;