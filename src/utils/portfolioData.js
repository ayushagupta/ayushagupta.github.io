// Portfolio data management utilities
import { portfolioData } from '../data/portfolioData.js';

export const loadPortfolioData = async () => {
  return portfolioData;
};

export const loadIntroData = async () => {
  return portfolioData.intro;
};

export const loadEducationData = async () => {
  return portfolioData.education;
};

export const loadExperienceData = async () => {
  return portfolioData.experience;
};

export const loadProjectsData = async () => {
  return portfolioData.projects;
};

export const loadBlogsData = async () => {
  return portfolioData.blogs;
};

export const loadContactData = async () => {
  return portfolioData.contact;
};

