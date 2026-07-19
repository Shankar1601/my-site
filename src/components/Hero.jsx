import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2 className="hero-greeting">Hello, I'm</h2>
        <h1 className="hero-name text-gradient">Shankar A</h1>
        <h3 className="hero-title">Full Stack Developer</h3>
        
        <p className="hero-description glass-panel">
          Results-driven developer with hands-on experience building scalable, 
          production-grade web applications. Specializing in React, Django, Node.js, 
          and PostgreSQL, I transform complex requirements into seamless digital experiences.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary glass-panel">
            View Projects <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contact" className="btn-secondary glass-panel">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/shankar1601" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/home" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:Shankar16101@gmail.com" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="image-wrapper">
          <div className="glow-ring"></div>
          <img 
            src={`${import.meta.env.BASE_URL}dp.jpg`} 
            alt="Shankar A - Full Stack Developer" 
            className="profile-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;