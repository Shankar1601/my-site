import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Verloom Leather Pvt Ltd",
      duration: "Mar 2026 - Present",
      description: [
        "Independently developed and deployed multiple live business websites including veracargo.com and alaikha.in.",
        "Managed end-to-end cloud deployment and hosting configurations using AWS EC2, AWS S3 Bucket, Hostinger, and Supabase.",
        "Handled bug fixes, feature enhancements, and production support for multiple company platforms.",
        "Operated as the primary developer across frontend, backend, database, and deployment workflows in a startup environment."
      ],
      tech: ["React", "Node.js", "AWS EC2", "AWS S3", "Supabase", "Hostinger"]
    },
    {
      id: 2,
      role: "In-house Internship",
      company: "University of Madras",
      duration: "Academic Internship",
      description: [
        "Designed and developed a grading system to calculate entrance examination and UG semester marks for university admissions.",
        "Implemented robust student data storage using a database server to manage academic records efficiently.",
        "Utilized Django ORM for seamless database interactions and structured backend logic."
      ],
      tech: ["Python", "Django", "MySQL", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title text-gradient">Experience</h2>
      
      <div className="timeline-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            {/* Glowing Timeline Marker */}
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            
            {/* Glassmorphic Experience Card */}
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-date">{exp.duration}</span>
              </div>
              
              <h4 className="timeline-company text-gradient">{exp.company}</h4>
              
              <ul className="timeline-desc">
                {exp.description.map((item, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-angle-right bullet-icon"></i>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="timeline-tech">
                {exp.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;