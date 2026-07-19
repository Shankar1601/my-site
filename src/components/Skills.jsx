import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "FRONTEND.",
      skills: ["React.js", "JavaScript (ES6)", "HTML5", "CSS3", "Bootstrap", "jQuery"]
    },
    {
      id: 2,
      title: "BACKEND.",
      skills: ["Python", "Django", "Node.js", "PHP", "REST APIs"]
    },
    {
      id: 3,
      title: "CLOUD & DB.",
      skills: ["PostgreSQL", "MySQL", "Supabase", "AWS EC2", "AWS S3", "GitHub Pages"]
    },
    {
      id: 4,
      title: "TOOLS.",
      skills: ["Git", "GitHub", "VS Code", "Hostinger", "XAMPP", "Postman"]
    }
  ];

  return (
    <section id="skills" className="chelsea-section">
      {skillCategories.map((category, index) => (
        <div key={category.id} className="skill-block">
          <div className="text-grid">
            
            {/* Left Column: Minimal category label */}
            <div className="meta-column">
              <span className="meta-label text-accent">{category.title}</span>
            </div>
            
            {/* Right Column: Continuous roster listing of skills */}
            <div className="content-column">
              {/* Roster formatting: 32px, tight line-height, accent color, period separators */}
              <div className="roster-listing text-accent">
                {category.skills.join('. ')}.
              </div>
            </div>
            
          </div>

          {/* Hairline divider between categories */}
          {index < skillCategories.length - 1 && (
            <hr className="hairline-divider experience-divider" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Skills;