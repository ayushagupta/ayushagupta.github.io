// Portfolio data management utilities
import { loadComponentData, getImagePath } from './dataLoader.js';
import { portfolioData } from '../data/portfolioData.js';

/**
 * Load all portfolio data
 * @returns {Promise<Object>} Complete portfolio data
 */
export const loadPortfolioData = async () => {
  // Return embedded data to avoid 404 errors
  return portfolioData;
};

/**
 * Load intro section data
 * @returns {Promise<Object>} Intro data
 */
export const loadIntroData = async () => {
  return portfolioData.intro;
};

/**
 * Load education section data
 * @returns {Promise<Array>} Education data array
 */
export const loadEducationData = async () => {
  return portfolioData.education;
};

/**
 * Load experience section data
 * @returns {Promise<Array>} Experience data array
 */
export const loadExperienceData = async () => {
  return portfolioData.experience;
};

/**
 * Load projects section data
 * @returns {Promise<Array>} Projects data array
 */
export const loadProjectsData = async () => {
  return portfolioData.projects;
};

/**
 * Load blogs section data
 * @returns {Promise<Object>} Blogs data
 */
export const loadBlogsData = async () => {
  return portfolioData.blogs;
};

/**
 * Load contact section data
 * @returns {Promise<Object>} Contact data
 */
export const loadContactData = async () => {
  return portfolioData.contact;
};

