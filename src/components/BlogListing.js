import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import './BlogListing.css';
import { loadBlogsData } from '../utils/portfolioData.js';

const BlogListing = () => {
  const [blogsData, setBlogsData] = useState({ posts: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadBlogsData();
        setBlogsData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog listing data:', error);
        setBlogsData({ posts: [] });
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Sort blogs by date in descending order (newest first)
  const sortedBlogs = [...blogsData.posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  const navigateToSection = (sectionId) => {
    navigate('/');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 100; // Increased header height + some padding
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };


  if (loading) {
    return (
      <div className="blog-listing-container">
        <div className="blog-listing-header">
          <h1>All Blog Posts</h1>
        </div>
        <div className="loading-message">Loading blog posts...</div>
      </div>
    );
  }

  return (
    <div className="blog-listing-container">
      <Helmet>
        <title>Blog Posts - Ayush Gupta | Software Engineer & Graduate Researcher</title>
        <meta name="description" content="Explore technical blog posts by Ayush Gupta covering software engineering, distributed systems, machine learning, and web development topics." />
        <meta name="keywords" content="blog, software engineering, distributed systems, machine learning, web development, React, Python, JavaScript, tutorials" />
        <link rel="canonical" href="https://ayushagupta.github.io/#/blogs" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog Posts - Ayush Gupta | Software Engineer & Graduate Researcher" />
        <meta property="og:description" content="Explore technical blog posts by Ayush Gupta covering software engineering, distributed systems, machine learning, and web development topics." />
        <meta property="og:url" content="https://ayushagupta.github.io/#/blogs" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Blog Posts - Ayush Gupta | Software Engineer & Graduate Researcher" />
        <meta name="twitter:description" content="Explore technical blog posts by Ayush Gupta covering software engineering, distributed systems, machine learning, and web development topics." />
        <meta name="twitter:url" content="https://ayushagupta.github.io/#/blogs" />
      </Helmet>
      
      <div className="blog-listing-header">
        <h1>All Blog Posts</h1>
        <p className="blog-listing-subtitle">
          {sortedBlogs.length} {sortedBlogs.length === 1 ? 'post' : 'posts'} • Latest insights and tutorials
        </p>
      </div>

      <div className="blog-listing-list">
        {sortedBlogs.map((blog, index) => (
          <article key={index} className="blog-listing-item">
            <h2 className="blog-listing-title">
              <Link 
                to={`/blog/${blog.slug}`}
                className="blog-listing-title-link"
              >
                {blog.title}
              </Link>
            </h2>
            <div className="blog-listing-meta">
              <span className="blog-listing-category">{blog.category}</span>
              <span className="blog-listing-date">{blog.date}</span>
            </div>
            <p className="blog-listing-excerpt">{blog.excerpt}</p>
          </article>
        ))}
      </div>

      {sortedBlogs.length === 0 && (
        <div className="no-posts-message">
          <div className="no-posts-content">
            <h2>Stay Tuned for More!</h2>
            <p>I'm currently working on some exciting technical content. Check back soon for:</p>
            <ul>
              <li>Software engineering tutorials</li>
              <li>Distributed systems insights</li>
              <li>Machine learning projects</li>
            </ul>
            <p>In the meantime, feel free to explore my <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('projects'); }}>projects</a> or <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}>get in touch</a>!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogListing;
