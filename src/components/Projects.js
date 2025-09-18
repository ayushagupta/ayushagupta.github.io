import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';
import './Projects.css';
import { loadProjectsData } from '../utils/portfolioData.js';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectsData, setProjectsData] = useState([]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadProjectsData();
        setProjectsData(data);
      } catch (error) {
        console.error('Error loading projects data:', error);
        setProjectsData([]);
      }
    };
    loadData();
  }, []);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData && projectsData.length > 0 ? projectsData.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img 
                  src={project.images[0]} 
                  alt={`${project.title} - Software project screenshot showing ${project.description.substring(0, 100)}...`}
                  className="project-main-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description.length > 120 
                    ? `${project.description.substring(0, 120)}...` 
                    : project.description}
                </p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features && project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                    {project.features && project.features.length > 2 && (
                      <li className="more-features">+{project.features.length - 2} more features...</li>
                    )}
                  </ul>
                </div>
                <div className="project-technologies">
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-click-hint">
                  <span>Click to view details →</span>
                </div>
              </div>
            </div>
          )) : (
            <p>Loading projects data...</p>
          )}
        </div>
        
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default Projects;
