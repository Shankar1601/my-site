import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="chelsea-header">
      <nav className="chelsea-nav">
        {/* Left anchor: The focal dot replaces a traditional logo */}
        <div className="nav-left">
          <span className="focal-dot"></span>
        </div>
        
        {/* Right anchor: Evenly spaced text links */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      
      {/* 1px Carbon Slate separator */}
      <hr className="hairline-divider" />
    </header>
  );
};

export default Navbar;