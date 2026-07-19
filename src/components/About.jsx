import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title text-gradient">About Me</h2>
      
      <div className="about-container">
        {/* Narrative Biography */}
        <div className="about-text glass-panel">
          <p>
            I am a results-oriented Full Stack Developer based in Chennai, Tamil Nadu, 
            passionate about delivering complete web applications from initial planning and UI 
            implementation to database design, deployment, and ongoing maintenance. 
            With professional experience acting as the primary developer in a startup environment, 
            I specialize in building scalable and secure business solutions.
          </p>
          <p>
            My technical foundation spans across modern frameworks including React, Python, 
            Django, Node.js, and PostgreSQL. I have a strong understanding of responsive web design, 
            performance optimization, API integration, Git workflows, and production support. 
            From architecting secure backend logic to managing cloud deployments (AWS, Hostinger), 
            I am equipped to handle the complete project lifecycle independently.
          </p>
          <p>
            I am continuously upgrading my skills to stay at the forefront of web 
            technologies and contribute effectively to innovative development teams.
          </p>
        </div>

        {/* Floating Stat Cards */}
        <div className="about-stats">
          <div className="stat-card glass-panel">
            <i className="fa-solid fa-code stat-icon text-gradient"></i>
            <h3>Full Stack</h3>
            <p>Frontend & Backend mastery</p>
          </div>
          
          <div className="stat-card glass-panel" style={{ animationDelay: '0.2s' }}>
            <i className="fa-solid fa-server stat-icon text-gradient"></i>
            <h3>Cloud & DB</h3>
            <p>AWS, Supabase, PostgreSQL</p>
          </div>

          <div className="stat-card glass-panel" style={{ animationDelay: '0.4s' }}>
            <i className="fa-solid fa-location-dot stat-icon text-gradient"></i>
            <h3>Chennai</h3>
            <p>Based in Tamil Nadu, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;