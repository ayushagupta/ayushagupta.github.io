import React, { useState, useEffect } from 'react';
import './Education.css';
import { loadEducationData } from '../utils/portfolioData.js';

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadEducationData();
        setEducationData(data);
      } catch (error) {
        console.error('Error loading education data:', error);
        setEducationData([]);
      }
    };
    loadData();
  }, []);

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData && educationData.length > 0 ? educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-content">
                <div className="education-header">
                  <div className="institution-logo">
                    {edu.logo ? (
                      <img src={edu.logo} alt={`${edu.school || 'Institution'} university logo - ${edu.degree || 'Degree program'}`} />
                    ) : (
                      <div className="logo-placeholder">
                        {edu.school ? edu.school.split(' ').map(word => word[0]).join('').substring(0, 2) : 'ED'}
                      </div>
                    )}
                  </div>
                  <div className="education-info">
                    <h3 className="school">{edu.school || 'Institution'}</h3>
                    <h4 className="degree">{edu.degree || 'Degree'}</h4>
                    <div className="education-meta">
                      <span className="year">{edu.year || 'Year'}</span>
                      <span className="gpa">GPA: {edu.gpa || 'N/A'}</span>
                    </div>
                  </div>
                </div>
                <div className="education-bullets">
                  {/* Activities */}
                  {edu.activities && edu.activities.length > 0 && (
                    <ul className="education-list">
                      {edu.activities.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Coursework */}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <>
                      <h4 className="coursework-heading">Coursework</h4>
                      <ul className="education-list">
                        {edu.coursework.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          )) : (
            <div className="education-item">
              <div className="education-content">
                <p>Loading education data...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
