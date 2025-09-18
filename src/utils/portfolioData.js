// Portfolio data management utilities
import { loadMarkdownFile } from './dataLoader.js';

/**
 * Load all portfolio data
 * @returns {Promise<Object>} Complete portfolio data
 */
export const loadPortfolioData = async () => {
  const [intro, education, experience, projects, blogs, contact] = await Promise.all([
    loadIntroData(),
    loadEducationData(),
    loadExperienceData(),
    loadProjectsData(),
    loadBlogsData(),
    loadContactData()
  ]);
  
  return { intro, education, experience, projects, blogs, contact };
};

/**
 * Load intro section data
 * @returns {Promise<Object>} Intro data
 */
export const loadIntroData = async () => {
  return await loadMarkdownFile('/data/intro/index.md');
};

/**
 * Load education section data
 * @returns {Promise<Array>} Education data array
 */
export const loadEducationData = async () => {
  const msData = await loadMarkdownFile('/data/education/ms-computer-science/index.md');
  const btechData = await loadMarkdownFile('/data/education/btech-electrical/index.md');
  return [msData, btechData].filter(Boolean);
};

/**
 * Load experience section data
 * @returns {Promise<Array>} Experience data array
 */
export const loadExperienceData = async () => {
  const lassData = await loadMarkdownFile('/data/experience/lass/index.md');
  const honeywellEngineerData = await loadMarkdownFile('/data/experience/software-engineer-honeywell/index.md');
  const honeywellInternData = await loadMarkdownFile('/data/experience/software-intern-honeywell/index.md');
  const swarmData = await loadMarkdownFile('/data/experience/swarm-robotics/index.md');
  return [lassData, honeywellEngineerData, honeywellInternData, swarmData].filter(Boolean);
};

/**
 * Load projects section data
 * @returns {Promise<Array>} Projects data array
 */
export const loadProjectsData = async () => {
  const distributedStockTradingData = await loadMarkdownFile('/data/projects/distributed-stock-trading/index.md');
  const kgRagData = await loadMarkdownFile('/data/projects/kg-rag/index.md');
  const speechToSummaryData = await loadMarkdownFile('/data/projects/speech-to-summary/index.md');
  return [distributedStockTradingData, kgRagData, speechToSummaryData].filter(Boolean);
};

/**
 * Load blogs section data
 * @returns {Promise<Object>} Blogs data
 */
export const loadBlogsData = async () => {
  const buildingScalableReactData = await loadMarkdownFile('/data/blogs/building-scalable-react/index.md');
  return {
    title: "Blog",
    subtitle: "Thoughts and Insights",
    posts: [buildingScalableReactData].filter(Boolean),
    ctaText: "Want to Read More?",
    ctaDescription: "I regularly write about software development, technology trends, and my learning journey.",
    ctaButtonText: "View All Posts",
    ctaButtonLink: "#"
  };
};

/**
 * Load contact section data
 * @returns {Promise<Object>} Contact data
 */
export const loadContactData = async () => {
  return await loadMarkdownFile('/data/contact/index.md');
};

