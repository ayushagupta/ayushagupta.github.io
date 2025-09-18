// Portfolio data management utilities
import { loadComponentData, getImagePath } from './dataLoader.js';

/**
 * Load all portfolio data
 * @returns {Promise<Object>} Complete portfolio data
 */
export const loadPortfolioData = async () => {
  try {
    const [intro, education, experience, projects, blogs, contact] = await Promise.all([
      loadIntroData(),
      loadEducationData(),
      loadExperienceData(),
      loadProjectsData(),
      loadBlogsData(),
      loadContactData()
    ]);

    return {
      intro,
      education,
      experience,
      projects,
      blogs,
      contact
    };
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    return getDefaultData();
  }
};

/**
 * Load intro section data
 * @returns {Promise<Object>} Intro data
 */
export const loadIntroData = async () => {
  try {
    const data = await loadComponentData('intro');
    if (data) {
      return {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        highlight: data.highlight,
        buttonText: data.buttonText,
        buttonLink: data.buttonLink,
        avatar: data.avatar ? getImagePath('intro', data.avatar) : null
      };
    }
  } catch (error) {
    console.error('Error loading intro data:', error);
  }
  
  return null;
};

/**
 * Load education section data
 * @returns {Promise<Array>} Education data array
 */
export const loadEducationData = async () => {
  try {
    // Load individual education entries
    const educationEntries = [
      'ms-computer-science',
      'btech-electrical'
    ];
    
    const educationData = [];
    
    for (const entry of educationEntries) {
      try {
        const data = await loadComponentData(`education/${entry}`);
        if (data) {
          educationData.push({
            ...data,
            logo: data.logo ? getImagePath('education', data.logo, entry) : null
          });
        }
      } catch (error) {
        console.error(`Error loading education entry ${entry}:`, error);
      }
    }
    
    return educationData;
  } catch (error) {
    console.error('Error loading education data:', error);
    return [];
  }
};

/**
 * Load experience section data
 * @returns {Promise<Array>} Experience data array
 */
export const loadExperienceData = async () => {
  try {
    // Load individual experience entries
    const experienceEntries = [
      'lass',
      'software-engineer-honeywell',
      'software-intern-honeywell',
      'swarm-robotics'
    ];
    
    const experienceData = [];
    
    for (const entry of experienceEntries) {
      try {
        const data = await loadComponentData(`experience/${entry}`);
        if (data) {
          const experienceItem = {
            ...data,
            logo: data.logo ? getImagePath('experience', data.logo, entry) : null
          };
          experienceData.push(experienceItem);
        }
      } catch (error) {
        console.error(`Error loading experience entry ${entry}:`, error);
      }
    }
    
    return experienceData;
  } catch (error) {
    console.error('Error loading experience data:', error);
    return [];
  }
};

/**
 * Load projects section data
 * @returns {Promise<Array>} Projects data array
 */
export const loadProjectsData = async () => {
  try {
    // Load individual project entries
    const projectEntries = [
      'distributed-stock-trading',
      'kg-rag',
      'speech-to-summary'
    ];
    
    const projectsData = [];
    
    for (const entry of projectEntries) {
      try {
        const data = await loadComponentData(`projects/${entry}`);
        if (data) {
          projectsData.push({
            ...data,
            images: data.images ? data.images.map(img => getImagePath('projects', img, entry)) : [],
            mainImage: data.mainImage ? getImagePath('projects', data.mainImage, entry) : null
          });
        }
      } catch (error) {
        console.error(`Error loading project entry ${entry}:`, error);
      }
    }
    
    return projectsData;
  } catch (error) {
    console.error('Error loading projects data:', error);
    return [];
  }
};

/**
 * Load blogs section data
 * @returns {Promise<Object>} Blogs data
 */
export const loadBlogsData = async () => {
  try {
    // Load individual blog post entries
    const blogEntries = [
      
    ];
    
    const posts = [];
    
    for (const entry of blogEntries) {
      try {
        const data = await loadComponentData(`blogs/${entry}`);
        if (data) {
          posts.push({
            ...data,
            image: data.image ? getImagePath('blogs', data.image, entry) : null
          });
        }
      } catch (error) {
        console.error(`Error loading blog entry ${entry}:`, error);
      }
    }
    
    return {
      title: "Blog",
      subtitle: "Thoughts and Insights",
      posts: posts,
      ctaText: "Want to Read More?",
      ctaDescription: "I regularly write about software development, technology trends, and my learning journey.",
      ctaButtonText: "View All Posts",
      ctaButtonLink: "#"
    };
  } catch (error) {
    console.error('Error loading blogs data:', error);
    return {
      title: "Blog",
      subtitle: "Thoughts and Insights",
      posts: [],
      ctaText: "Want to Read More?",
      ctaDescription: "I regularly write about software development, technology trends, and my learning journey.",
      ctaButtonText: "View All Posts",
      ctaButtonLink: "#"
    };
  }
};

/**
 * Load contact section data
 * @returns {Promise<Object>} Contact data
 */
export const loadContactData = async () => {
  try {
    const data = await loadComponentData('contact');
    if (data) {
      return {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        email: data.email,
        phone: data.phone,
        location: data.location,
        github: data.github,
        linkedin: data.linkedin
      };
    }
  } catch (error) {
    console.error('Error loading contact data:', error);
  }
  
  return null;
};

