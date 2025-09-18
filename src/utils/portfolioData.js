// Portfolio data management utilities
import { loadMarkdownFile, getImagePath } from './dataLoader.js';

const fetchJson = async (path) => {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
    return await res.json();
  } catch (err) {
    return null;
  }
};

const withFallback = async (loader, fallback) => {
  try {
    const data = await loader();
    if (data === null || data === undefined) return fallback;
    if (Array.isArray(data) && data.length === 0) return fallback;
    if (typeof data === 'object' && Object.keys(data).length === 0) return fallback;
    return data;
  } catch (_e) {
    return fallback;
  }
};

const loadCollection = async (section, mapItem) => {
  const manifest = await fetchJson(`/data/${section}/manifest.json`);
  if (!manifest || !Array.isArray(manifest)) return [];
  const items = await Promise.all(
    manifest.map(async (slug) => {
      const md = await loadMarkdownFile(`/data/${section}/${slug}/index.md`);
      if (!md) return null;
      return mapItem(slug, md);
    })
  );
  return items.filter(Boolean);
};

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

export const loadIntroData = async () => {
  return withFallback(async () => {
    const md = await loadMarkdownFile('/data/intro/index.md');
    if (!md) return null;
    const avatar = md.avatar
      ? getImagePath('intro', md.avatar)
      : '/data/intro/images/avatar.jpeg';
    return {
      title: md.title,
      subtitle: md.subtitle,
      description: md.description,
      highlight: md.highlight,
      buttonText: md.buttonText,
      buttonLink: md.buttonLink || '#contact',
      avatar
    };
  }, {
    title: "Hi, I'm Ayush Gupta",
    subtitle: 'Software Engineer | AI Researcher',
    description: 'I focus on building intelligent, production-ready applications at the intersection of AI, backend development, and systems engineering.',
    highlight: 'Full-Stack Developer',
    buttonText: 'Get In Touch',
    buttonLink: '#contact',
    avatar: '/data/intro/images/avatar.jpeg'
  });
};

export const loadEducationData = async () => {
  return withFallback(async () => {
    return await loadCollection('education', (slug, md) => {
      const logo = md.logo ? getImagePath('education', md.logo, slug) : undefined;
      return {
        school: md.school,
        degree: md.degree,
        year: md.year,
        gpa: md.gpa,
        logo,
        activities: Array.isArray(md.activities) ? md.activities : [],
        coursework: Array.isArray(md.coursework) ? md.coursework : []
      };
    });
  }, []);
};

export const loadExperienceData = async () => {
  return withFallback(async () => {
    return await loadCollection('experience', (slug, md) => {
      const logo = md.logo ? getImagePath('experience', md.logo, slug) : undefined;
      return {
        title: md.title,
        company: md.company,
        period: md.period,
        location: md.location,
        achievements: Array.isArray(md.achievements) ? md.achievements : [],
        technologies: Array.isArray(md.technologies) ? md.technologies : [],
        logo
      };
    });
  }, []);
};

export const loadProjectsData = async () => {
  return withFallback(async () => {
    return await loadCollection('projects', (slug, md) => {
      const images = Array.isArray(md.images)
        ? md.images.map((img) => getImagePath('projects', img, slug))
        : md.mainImage
          ? [getImagePath('projects', md.mainImage, slug)]
          : [];
      return {
        title: md.title,
        description: md.description,
        features: Array.isArray(md.features) ? md.features : [],
        technologies: Array.isArray(md.technologies) ? md.technologies : [],
        github: md.github,
        live: md.live,
        images,
        technicalChallenges: Array.isArray(md.technicalChallenges) ? md.technicalChallenges : undefined
      };
    });
  }, []);
};

export const loadBlogsData = async () => {
  return withFallback(async () => {
    const posts = await loadCollection('blogs', (slug, md) => {
      const readTime = md.rawContent
        ? `${Math.max(1, Math.round(md.rawContent.split(/\s+/).length / 200))} min read`
        : undefined;
      return {
        title: md.title,
        slug: md.slug || slug,
        date: md.date,
        category: md.category,
        excerpt: md.excerpt || (md.rawContent ? md.rawContent.slice(0, 160) + '…' : ''),
        readTime,
        content: md.content
      };
    });
    return {
      title: 'Blog',
      subtitle: 'Thoughts and Insights',
      posts,
      ctaText: 'Want to Read More?',
      ctaDescription: 'I regularly write about software development, technology trends, and my learning journey.',
      ctaButtonText: 'View All Posts',
      ctaButtonLink: '#'
    };
  }, { title: 'Blog', subtitle: 'Thoughts and Insights', posts: [], ctaText: 'Want to Read More?', ctaDescription: 'I regularly write about software development, technology trends, and my learning journey.', ctaButtonText: 'View All Posts', ctaButtonLink: '#' });
};

export const loadContactData = async () => {
  return withFallback(async () => {
    const md = await loadMarkdownFile('/data/contact/index.md');
    if (!md) return null;
    return {
      title: md.title,
      subtitle: md.subtitle,
      description: md.description,
      email: md.email,
      phone: md.phone,
      location: md.location,
      github: md.github,
      linkedin: md.linkedin
    };
  }, { title: 'Get In Touch', subtitle: "Let's Connect", description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.", email: 'ayushagupta4@gmail.com', phone: '+1 (413) 472-8905', location: 'Amherst, MA', github: 'https://github.com/ayushagupta', linkedin: 'https://linkedin.com/in/ayush-a-gupta' });
};

