import React, { useState, useEffect } from 'react';
import './Intro.css';
import { loadIntroData } from '../utils/portfolioData.js';

const Intro = () => {
  const [introData, setIntroData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadIntroData();
        setIntroData(data);
      } catch (error) {
        console.error('Error loading intro data:', error);
      }
    };
    loadData();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!introData) {
    return (
      <section id="intro" className="intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <p>Loading intro data...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const renderTitleWithGlassyName = () => {
    const title = introData.title || '';
    const name = 'Ayush Gupta';
    if (!title.includes(name)) {
      return title;
    }
    const parts = title.split(name);
    return (
      <>
        {parts[0]}
        <span className="glassy-name">{name}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="intro" className="intro">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="intro-title">
              {renderTitleWithGlassyName()}
            </h1>
            <h2 className="intro-subtitle">
              {introData.subtitle || ''}
            </h2>
            <p className="intro-description">
              {introData.description || ''}
            </p>
            <div className="intro-buttons">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-outline"
              >
                {introData.buttonText || 'Get In Touch'}
              </button>
            </div>
          </div>
          <div className="intro-image">
            <div className="profile-card">
              <div className="profile-avatar">
                {introData.avatar ? (
                  <img 
                    src={introData.avatar} 
                    alt="Ayush Gupta - Software Engineer and Graduate Researcher at UMass Amherst" 
                    className="avatar-image"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="avatar-placeholder">
                    <span>AJ</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
