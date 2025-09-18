# Software Developer Portfolio

A minimalistic and modern portfolio website built with React for a software developer in graduate school. Features a clean, responsive design with sections for introduction, resume, education, experience, projects, blogs, and contact information.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimalistic design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with active states
- **Contact Form**: Functional contact form (ready for backend integration)
- **Project Showcase**: Featured projects with technology tags and links
- **Blog Section**: Latest blog posts with categories and read times
- **Education Timeline**: Visual timeline of academic achievements
- **Experience Cards**: Detailed work experience with achievements and technologies

## Sections

1. **Header**: Fixed navigation with smooth scrolling
2. **Introduction**: Hero section with personal introduction and call-to-action buttons
3. **Resume**: Download link and key statistics
4. **Education**: Timeline of academic achievements and courses
5. **Experience**: Work experience with detailed achievements and technologies
6. **Projects**: Featured projects with descriptions, technologies, and links
7. **Blogs**: Latest blog posts with categories and excerpts
8. **Contact**: Contact form and social media links

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Responsive Design**: Mobile-first approach
- **Modern CSS**: CSS custom properties, animations, and transitions

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone or download the project**
   ```bash
   # If you have git, you can clone the repository
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Customization

### Personal Information

Update the following files with your personal information:

1. **`src/components/Intro.js`**: Update name, title, and description
2. **`src/components/Education.js`**: Update education details
3. **`src/components/Experience.js`**: Update work experience
4. **`src/components/Projects.js`**: Update project information
5. **`src/components/Blogs.js`**: Update blog posts
6. **`src/components/Contact.js`**: Update contact information

### Styling

- **Colors**: Update CSS custom properties in component CSS files
- **Fonts**: Change the Google Fonts import in `public/index.html`
- **Layout**: Modify grid layouts and spacing in component CSS files

### Adding Your Resume

1. Add your resume PDF file to the `public` folder
2. Update the download link in `src/components/Resume.js`

### Adding Real Project Links

Update the GitHub and demo links in `src/components/Projects.js` with your actual project URLs.

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out!

---

**Happy coding! 🚀**
