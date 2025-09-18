import React, { useState, useEffect } from 'react';
import './Experience.css';
import { loadExperienceData } from '../utils/portfolioData.js';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadExperienceData();
        setExperienceData(data);
      } catch (error) {
        console.error('Error loading experience data:', error);
        setExperienceData([]);
      }
    };
    loadData();
  }, []);

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experienceData && experienceData.length > 0 ? experienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-left">
                    <div className="company-logo">
                      <img src={exp.logo} alt={`${exp.company} logo`} />
                    </div>
                    <div className="experience-info">
                      <h3 className="job-title">{exp.title}</h3>
                      <span className="company">{exp.company}</span>
                    </div>
                  </div>
                  <div className="experience-right">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                    <div className="experience-bullets">
                      <ul className="experience-list">
                        {exp.achievements && exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
              </div>
            </div>
          )) : (
            <p>Loading experience data...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
