import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cinema Industry Recruitment Platform",
      icon: "fa-film",
      description: "An end-to-end recruitment web application tailored for the cinema and media industry. Enables recruiters to post requirements and browse verified profiles of creative professionals with structured registration and secure backend logic.",
      tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Custom E-Commerce Application",
      icon: "fa-cart-shopping",
      description: "Developed and transitioned a custom e-commerce site from local testing to production. Features a local PostgreSQL database integration with planned architecture for future cloud storage scaling.",
      tech: ["PostgreSQL", "React", "Node.js"],
      link: "#"
    },
    {
      id: 3,
      title: "React Portfolio Website",
      icon: "fa-user-astronaut",
      description: "A fully responsive personal portfolio showcasing projects and skills. Built with a component-based UI architecture and deployed using GitHub Pages with a Git-based version control workflow.",
      tech: ["React.js", "CSS3", "GitHub Pages"],
      link: "https://shankar1601.github.io/my-site/"
    },
    {
      id: 4,
      title: "Business Landing Page",
      icon: "fa-briefcase",
      description: "Developed a modern, responsive business landing page for a resume-building service. Ensured mobile responsiveness and cross-browser compatibility.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://shankar1601.github.io/interview/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title text-gradient">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card glass-panel">
            
            <div className="project-icon-wrapper">
              <i className={`fa-solid ${project.icon} project-icon text-gradient`}></i>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-footer">
              {project.link !== "#" ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              ) : (
                <span className="project-status">Private / Enterprise</span>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;