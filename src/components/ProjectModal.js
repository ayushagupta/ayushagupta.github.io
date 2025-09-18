import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('modal-open');
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.classList.remove('modal-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.classList.remove('modal-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isImageEnlarged) {
          setIsImageEnlarged(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, isImageEnlarged]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const modalRoot = document.getElementById('modal-root');

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        {/* Image Slideshow */}
        <div className="modal-slideshow">
          <div className="slideshow-container">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} project screenshot ${currentImageIndex + 1} - ${project.description.substring(0, 80)}...`}
              className="slideshow-image"
              onClick={() => setIsImageEnlarged(true)}
              style={{ cursor: 'pointer' }}
            />
            
            {project.images.length > 1 && (
              <>
                <button className="slideshow-nav prev" onClick={prevImage}>
                  ‹
                </button>
                <button className="slideshow-nav next" onClick={nextImage}>
                  ›
                </button>
                
                <div className="slideshow-dots">
                  {project.images && project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToImage(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="modal-details">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>
          
          <div className="modal-section">
            <h3>Technologies Used</h3>
            <div className="modal-technologies">
              {project.technologies && project.technologies.map((tech, index) => (
                <span key={index} className="modal-tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>Key Features</h3>
            <ul className="modal-features">
              {project.features && project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {project.detailedDescription && (
            <div className="modal-section">
              <h3>About This Project</h3>
              <p className="modal-detailed-description">{project.detailedDescription}</p>
            </div>
          )}

          {project.technicalChallenges && (
            <div className="modal-section">
              <h3>Technical Challenges</h3>
              <ul className="modal-technical-challenges">
                {project.technicalChallenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* GitHub Link */}
          <div className="modal-github">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <span>🐙</span>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* Enlarged Image Modal */}
      {isImageEnlarged && (
        <div 
          className="image-enlarged-overlay" 
          onClick={(e) => {
            e.stopPropagation();
            setIsImageEnlarged(false);
          }}
        >
          <div className="image-enlarged-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="image-enlarged-close" 
              onClick={(e) => {
                e.stopPropagation();
                setIsImageEnlarged(false);
              }}
            >
              ×
            </button>
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} project screenshot ${currentImageIndex + 1} - ${project.description.substring(0, 80)}...`}
              className="image-enlarged"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>,
    modalRoot
  );
};

export default ProjectModal;
