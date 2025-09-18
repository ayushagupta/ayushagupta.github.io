# Portfolio Data Structure

This directory contains all the content and data for the portfolio website. Each component has its own folder with markdown files and images.

## Directory Structure

```
src/data/
├── intro/
│   ├── index.md          # Intro section content
│   └── images/           # Intro section images
├── education/
│   ├── ms-computer-science/
│   │   ├── index.md      # MS Computer Science details
│   │   └── images/       # MS-specific images
│   ├── bs-computer-science/
│   │   ├── index.md      # BS Computer Science details
│   │   └── images/       # BS-specific images
│   └── images/           # General education images
├── experience/
│   ├── software-dev-intern/
│   │   ├── index.md      # Software Dev Intern details
│   │   └── images/       # Intern-specific images
│   ├── research-assistant/
│   │   ├── index.md      # Research Assistant details
│   │   └── images/       # Research-specific images
│   ├── freelance-developer/
│   │   ├── index.md      # Freelance Developer details
│   │   └── images/       # Freelance-specific images
│   └── images/           # General experience images
├── projects/
│   ├── ecommerce-platform/
│   │   ├── index.md      # E-commerce Platform details
│   │   └── images/       # Project-specific images
│   ├── task-manager/
│   │   ├── index.md      # Task Manager details
│   │   └── images/       # Project-specific images
│   ├── weather-dashboard/
│   │   ├── index.md      # Weather Dashboard details
│   │   └── images/       # Project-specific images
│   └── images/           # General project images
├── blogs/
│   ├── building-scalable-react/
│   │   ├── index.md      # React scalability blog post
│   │   └── images/       # Post-specific images
│   ├── future-web-development/
│   │   ├── index.md      # Future web dev blog post
│   │   └── images/       # Post-specific images
│   ├── getting-started-ml/
│   │   ├── index.md      # ML beginner blog post
│   │   └── images/       # Post-specific images
│   └── images/           # General blog images
└── contact/
    ├── index.md          # Contact section content
    └── images/           # Contact section images
```

## Markdown File Format

Each markdown file uses YAML frontmatter for metadata and markdown content for the main text.

### Frontmatter Structure

```yaml
---
title: "Section Title"
subtitle: "Section Subtitle"
description: "Brief description"
# Component-specific fields...
---
```

### Content Structure

The main content is written in markdown after the frontmatter.

## Component-Specific Data

### Intro Section (`intro/index.md`)

```yaml
---
title: "Hi, I'm Your Name"
subtitle: "Your Title"
description: "Your description"
highlight: "Highlighted Text"
buttonText: "Button Text"
buttonLink: "#contact"
avatar: "avatar.jpg"  # Image filename in images/ folder
---
```

### Education Section (`education/index.md`)

```yaml
---
title: "Education"
subtitle: "Academic Journey"
education:
  - school: "University Name"
    degree: "Degree Name"
    year: "2020 - 2024"
    gpa: "3.8/4.0"
    logo: "university-logo.jpg"  # Optional
    coursework:
      - "Course 1"
      - "Course 2"
    activities:
      - "Activity 1"
      - "Activity 2"
---
```

### Experience Section (`experience/index.md`)

```yaml
---
title: "Experience"
subtitle: "Professional Journey"
experience:
  - title: "Job Title"
    company: "Company Name"
    period: "2023 - Present"
    location: "City, State"
    logo: "company-logo.jpg"  # Optional
    achievements:
      - "Achievement 1"
      - "Achievement 2"
---
```

### Projects Section (`projects/index.md`)

```yaml
---
title: "Projects"
subtitle: "Portfolio of Work"
projects:
  - title: "Project Name"
    description: "Project description"
    technologies: ["React", "Node.js", "MongoDB"]
    images: ["screenshot1.jpg", "screenshot2.jpg"]
    mainImage: "main-screenshot.jpg"
    github: "https://github.com/username/project"
    features:
      - "Feature 1"
      - "Feature 2"
    detailedDescription: "Detailed project description"
    challenges:
      - "Challenge 1"
      - "Challenge 2"
---
```

### Blogs Section (`blogs/index.md`)

```yaml
---
title: "Blog"
subtitle: "Thoughts and Insights"
posts:
  - title: "Blog Post Title"
    excerpt: "Blog post excerpt"
    date: "December 2023"
    image: "blog-image.jpg"  # Optional
ctaText: "Want to Read More?"
ctaDescription: "Description for call-to-action"
ctaButtonText: "View All Posts"
ctaButtonLink: "#"
---
```

### Contact Section (`contact/index.md`)

```yaml
---
title: "Get In Touch"
subtitle: "Let's Connect"
description: "Contact description"
email: "your.email@example.com"
phone: "+1 (555) 123-4567"
location: "City, State"
github: "https://github.com/username"
linkedin: "https://linkedin.com/in/username"
---
```

## Images

- Place all images in the respective `images/` folder for each component
- Use descriptive filenames (e.g., `avatar.jpg`, `company-logo.png`)
- Recommended formats: JPG, PNG, WebP
- Optimize images for web use

## Updating Content

1. Edit the markdown files in the appropriate component folder
2. Add or replace images in the `images/` folder
3. Update the frontmatter fields as needed
4. The website will automatically load the updated content

## Data Loading

The portfolio uses the `portfolioData.js` utility to load content from these markdown files. The utility:

- Parses YAML frontmatter
- Converts markdown to HTML
- Handles image paths
- Provides fallback data if files are missing

## Benefits

- **Easy Content Management**: Update content without touching code
- **Version Control**: Track content changes with Git
- **Collaboration**: Non-technical team members can update content
- **Flexibility**: Add new sections or modify existing ones easily
- **Performance**: Content is loaded dynamically as needed
