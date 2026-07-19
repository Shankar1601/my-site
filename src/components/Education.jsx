import React from 'react';
import './Education.css';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      type: "POSTGRAD.",
      degree: "M.Sc. Information Technology",
      institution: "University of Madras",
      details: ["Focus on advanced software engineering, backend architecture, and database management."]
    },
    {
      id: 2,
      type: "UNDERGRAD.",
      degree: "Bachelor of Computer Applications",
      institution: "Shree Chandraprabhu Jain College",
      details: ["Winner — Inter-Collegiate Science Communication Review Competition (2019)."]
    },
    {
      id: 3,
      type: "CERT.",
      degree: "Professional Certifications",
      institution: "Various Institutions",
      details: [
        "Web Development Program — TNSDC",
        "Full Stack Python — Code99 IT Academy",
        "IoT Workshop — University of Madras",
        "Diploma in MS Office"
      ]
    }
  ];

  return (
    <section id="education" className="chelsea-section">
      {educationItems.map((item, index) => (
        <div key={item.id} className="education-block">
          <div className="text-grid">
            
            {/* Left Column: Minimal metadata label */}
            <div className="meta-column">
              <span className="meta-label text-accent">{item.type}</span>
            </div>
            
            {/* Right Column: Degree, Institution, and Details */}
            <div className="content-column">
              <h3 className="text-heading">{item.degree}</h3>
              <div className="credit-caption">{item.institution}</div>
              
              <div className="experience-desc">
                {item.details.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
            
          </div>

          {/* Hairline divider between entries */}
          {index < educationItems.length - 1 && (
            <hr className="hairline-divider experience-divider" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;