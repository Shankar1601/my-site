import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Verloom Leather Pvt Ltd",
      duration: "MAR 2026 — PRESENT",
      description: [
        "Independently designed, developed, and deployed multiple production-grade business and logistics websites, including veracargo.com and alaikha.in.",
        "Delivered complete full-stack solutions covering frontend, backend, databases, APIs, deployment, hosting, and maintenance.",
        "Managed cloud hosting, server deployment, storage, SSL, domains, and production updates using AWS EC2, AWS S3, Hostinger, and Supabase.",
        "Fixed production issues, optimized application performance, and collaborated with internal stakeholders to deliver business requirements."
      ],
      tech: ["React", "Node.js", "AWS EC2", "AWS S3", "Supabase", "Hostinger"]
    },
    {
      id: 2,
      role: "In-house Internship",
      company: "University of Madras",
      duration: "ACADEMIC",
      description: [
        "Designed and developed a grading system to calculate entrance examination and UG semester marks for academic evaluation and university admissions.",
        "Designed database structures, implemented business logic, and automated student record management.",
        "Utilized Django ORM and MySQL for seamless database interactions and structured backend logic."
      ],
      tech: ["Python", "Django", "MySQL", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="chelsea-section">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="experience-block">
          <div className="text-grid">
            
            {/* Left Column: Minimal date label */}
            <div className="meta-column">
              <span className="meta-label text-accent">{exp.duration}</span>
            </div>
            
            {/* Right Column: Role, Company, Description, Tech */}
            <div className="content-column">
              <h3 className="text-heading">{exp.role}</h3>
              <div className="credit-caption">{exp.company}</div>
              
              <div className="experience-desc">
                {exp.description.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
              
              {/* Tech Stack rendered as a flowing text block separated by periods */}
              <div className="roster-listing text-accent">
                {exp.tech.join('. ')}.
              </div>
            </div>
            
          </div>

          {/* Hairline divider between entries */}
          {index < experiences.length - 1 && (
            <hr className="hairline-divider experience-divider" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;