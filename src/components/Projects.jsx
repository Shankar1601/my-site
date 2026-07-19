import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cinema Industry Recruitment Platform",
      description: "An end-to-end recruitment platform tailored for the cinema and media industry. Features secure user authentication, database integration, a responsive UI, and a scalable backend enabling recruiters to browse verified professional profiles.",
      tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Custom E-Commerce Application",
      description: "Developed and transitioned a custom e-commerce site from local testing to production. Features a local PostgreSQL database integration with planned architecture for future cloud storage scaling.",
      tech: ["PostgreSQL", "React", "Node.js"],
      link: "#"
    },
    {
      id: 3,
      title: "React Portfolio Website",
      description: "Built and deployed a fully responsive personal portfolio showcasing projects and skills. Features a modern UI constructed with reusable React.js components and managed via a Git-based version control workflow.",
      tech: ["React.js", "CSS3", "Vercel"],
      link: "https://shankar1601.github.io/my-site/"
    },
    {
      id: 4,
      title: "Business Landing Page",
      description: "Designed and deployed a responsive business landing page for a resume-building service. Engineered to be fully cross-browser compatible and heavily optimized for branding, performance, and mobile devices.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://shankar1601.github.io/interview/"
    }
  ];

  return (
    <section id="projects" className="chelsea-section">
      {projects.map((project, index) => (
        <div key={project.id} className="project-block">
          <div className="text-grid">
            
            {/* Left Column: Minimal identifier label */}
            <div className="meta-column">
              <span className="meta-label text-accent">PRJ 0{project.id}.</span>
            </div>
            
            {/* Right Column: Title, Description, Tech, Action */}
            <div className="content-column">
              <h3 className="text-heading">{project.title}</h3>
              
              <div className="experience-desc">
                <p>{project.description}</p>
              </div>
              
              {/* Tech Stack rendered as a flowing text block */}
              <div className="roster-listing text-accent">
                {project.tech.join('. ')}.
              </div>

              {/* Action Button using CHELSEA Pill style */}
              <div className="project-action">
                {project.link !== "#" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="pill-button outline">
                    VIEW LIVE
                  </a>
                ) : (
                  <span className="credit-caption">INTERNAL / PRIVATE</span>
                )}
              </div>
            </div>
            
          </div>

          {/* Hairline divider between entries */}
          {index < projects.length - 1 && (
            <hr className="hairline-divider experience-divider" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;