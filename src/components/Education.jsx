import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "M.Sc Information Technology",
      institution: "University of Madras",
      year: "2022 - 2024"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Shree Chandraprabhu Jain College",
      year: "2018 - 2021"
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Vellayan Chettiyar Higher Sec School",
      year: "2016 - 2018"
    },
    {
      id: 4,
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Vellayan Chettiyar Higher Sec School",
      year: "2015 - 2016"
    }
  ];

  const certifications = [
    "Web Development Program - TNSDC (Jul 2025 - Present)",
    "Full-Stack Python - Code99 IT Academy (Aug 2024 - Mar 2025)",
    "IoT Workshop - University of Madras (Mar 2023)",
    "Diploma in MS Office (Apr 2014 - Jun 2014)"
  ];

  const achievements = [
    "Primary developer in a startup environment handling complete web application workflows.",
    "Successfully deployed and maintained multiple production websites independently.",
    "Winner - Inter-Collegiate Science Communication Review Competition (2019).",
    "Participated in NSS State Level Orientation Program."
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title text-gradient">Background & Accolades</h2>
      
      <div className="education-grid">
        
        {/* Formal Education Column */}
        <div className="edu-column">
          <h3 className="column-title">
            <i className="fa-solid fa-graduation-cap text-gradient"></i> Education
          </h3>
          
          <div className="edu-list">
            {educationData.map((edu) => (
              <div key={edu.id} className="edu-card glass-panel">
                <div className="edu-year">{edu.year}</div>
                <h4 className="edu-degree">{edu.degree}</h4>
                <p className="edu-institution">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements Column */}
        <div className="acc-column">
          
          <div className="acc-section">
            <h3 className="column-title">
              <i className="fa-solid fa-certificate text-gradient"></i> Certifications
            </h3>
            <ul className="acc-list glass-panel">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <i className="fa-solid fa-check-circle list-icon"></i> {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="acc-section">
            <h3 className="column-title">
              <i className="fa-solid fa-trophy text-gradient"></i> Achievements
            </h3>
            <ul className="acc-list glass-panel">
              {achievements.map((achieve, index) => (
                <li key={index}>
                  <i className="fa-solid fa-star list-icon"></i> {achieve}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;