import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="chelsea-section">
      <div className="text-grid">
        
        {/* Left Column: Minimal metadata label */}
        <div className="meta-column">
          <span className="meta-label text-accent">BIO.</span>
        </div>
        
        {/* Right Column: Flowing text block */}
        <div className="content-column">
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

      </div>
    </section>
  );
};

export default About;