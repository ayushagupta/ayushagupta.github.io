// Data loading utilities for markdown files
import { marked } from 'marked';
import yaml from 'js-yaml';

// Configure marked for better parsing
marked.setOptions({
  breaks: true,
  gfm: true,
});

/**
 * Load and parse a markdown file
 * @param {string} filePath - Path to the markdown file
 * @returns {Promise<Object>} Parsed markdown content
 */
export const loadMarkdownFile = async (filePath) => {
  try {
    console.log('Attempting to load:', filePath);
    const response = await fetch(filePath);
    console.log('Response status:', response.status, response.statusText);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
    }
    const markdown = await response.text();
    console.log('Loaded markdown content:', markdown.substring(0, 100) + '...');
    const parsed = parseMarkdown(markdown);
    console.log('Parsed data:', parsed);
    return parsed;
  } catch (error) {
    console.error(`Error loading markdown file ${filePath}:`, error);
    return null;
  }
};

/**
 * Parse markdown content and extract frontmatter and content
 * @param {string} markdown - Raw markdown content
 * @returns {Object} Parsed content with frontmatter and body
 */
const parseMarkdown = (markdown) => {
  // Updated regex to handle cases with or without body content
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*(?:\n([\s\S]*))?$/;
  const match = markdown.match(frontmatterRegex);
  
  if (match) {
    const frontmatter = parseFrontmatter(match[1]);
    const body = match[2] ? match[2].trim() : '';
    return {
      ...frontmatter,
      content: body ? marked(body) : '',
      rawContent: body
    };
  } else {
    // No frontmatter, treat entire content as body
    return {
      content: marked(markdown),
      rawContent: markdown.trim()
    };
  }
};

/**
 * Parse YAML frontmatter
 * @param {string} frontmatter - Raw frontmatter string
 * @returns {Object} Parsed frontmatter object
 */
const parseFrontmatter = (frontmatter) => {
  try {
    return yaml.load(frontmatter) || {};
  } catch (error) {
    console.error('Error parsing YAML frontmatter:', error);
    return {};
  }
};

/**
 * Load all markdown files from a directory
 * @param {string} directory - Directory path
 * @returns {Promise<Array>} Array of parsed markdown files
 */
export const loadMarkdownDirectory = async (directory) => {
  try {
    // This would need to be implemented based on your build system
    // For now, we'll return an empty array and handle individual files
    return [];
  } catch (error) {
    console.error(`Error loading markdown directory ${directory}:`, error);
    return [];
  }
};

/**
 * Get image path for a component
 * @param {string} component - Component name
 * @param {string} imageName - Image filename
 * @param {string} subfolder - Optional subfolder (e.g., project name, blog post name)
 * @returns {string} Full image path
 */
export const getImagePath = (component, imageName, subfolder = null) => {
  if (subfolder) {
    return `/data/${component}/${subfolder}/images/${imageName}`;
  }
  return `/data/${component}/images/${imageName}`;
};

/**
 * Load component data from markdown file
 * @param {string} component - Component name
 * @param {string} filename - Markdown filename (without extension)
 * @returns {Promise<Object>} Parsed component data
 */
export const loadComponentData = async (component, filename = 'index') => {
  const filePath = `/data/${component}/${filename}.md`;
  const result = await loadMarkdownFile(filePath);
  return result;
};
