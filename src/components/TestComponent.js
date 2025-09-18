import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

const TestComponent = () => {
  console.log('Portfolio data:', portfolioData);
  console.log('Intro data:', portfolioData.intro);
  
  return (
    <div>
      <h1>Test Component</h1>
      <p>Intro title: {portfolioData.intro.title}</p>
      <p>Intro subtitle: {portfolioData.intro.subtitle}</p>
      <p>Education count: {portfolioData.education.length}</p>
      <p>Experience count: {portfolioData.experience.length}</p>
      <p>Projects count: {portfolioData.projects.length}</p>
    </div>
  );
};

export default TestComponent;
