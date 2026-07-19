import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: "fa-laptop-code",
      skills: ["React.js", "JavaScript (ES6)", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      id: 2,
      title: "Backend & APIs",
      icon: "fa-server",
      skills: ["Python", "Django", "Node.js", "PHP", "REST APIs"]
    },
    {
      id: 3,
      title: "Database & Cloud",
      icon: "fa-cloud",
      skills: ["PostgreSQL", "MySQL", "Supabase", "AWS EC2", "AWS S3"]
    },
    {
      id: 4,
      title: "Tools & Workflow",
      icon: "fa-screwdriver-wrench",
      skills: ["Git", "GitHub", "VS Code", "Hostinger", "XAMPP"]
    }
  ];

  // Array for the infinite scrolling marquee
  const scrollingIcons = [
    { icon: "fa-brands fa-python", name: "Python" },
    { icon: "fa-brands fa-react", name: "React" },
    { icon: "fa-brands fa-node-js", name: "Node.js" },
    { icon: "fa-brands fa-js", name: "JavaScript" },
    { icon: "fa-solid fa-database", name: "SQL" },
    { icon: "fa-brands fa-aws", name: "AWS" },
    { icon: "fa-brands fa-github", name: "GitHub" },
    { icon: "fa-brands fa-html5", name: "HTML5" },
    { icon: "fa-brands fa-css3", name: "CSS3" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title text-gradient">Technical Arsenal</h2>
      
      {/* Categorized Skills Grid */}
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-card glass-panel">
            <div className="skill-header">
              <i className={`fa-solid ${category.icon} skill-icon text-gradient`}></i>
              <h3 className="skill-title">{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Scrolling Tech Ticker */}
      <div className="skills-ticker-wrapper glass-panel">
        <div className="skills-ticker">
          {/* Render twice for seamless looping */}
          <div className="ticker-track">
            {scrollingIcons.map((item, index) => (
              <div key={`first-${index}`} className="ticker-item">
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </div>
            ))}
            {/* Duplicated set */}
            {scrollingIcons.map((item, index) => (
              <div key={`second-${index}`} className="ticker-item">
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;