import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blogs.css';
import { loadBlogsData } from '../utils/portfolioData.js';

const Blogs = () => {
  const [blogsData, setBlogsData] = useState({ posts: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleViewAllPosts = () => {
    navigate('/blogs');
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadBlogsData();
        setBlogsData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading blogs data:', error);
        setBlogsData({ posts: [] });
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <section id="blogs" className="blogs section">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="blogs-grid">
          {loading ? (
            <p>Loading blog posts...</p>
          ) : blogsData.posts && blogsData.posts.length > 0 ? (
            blogsData.posts.slice(0, 3).map((blog, index) => (
              <article key={index} className="blog-card">
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-date">{blog.date}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <a href={`/blog/${blog.slug}`} className="blog-link">
                    Read More →
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div className="no-blogs-message">
              <h3>Coming Soon!</h3>
              <p>I'm working on some exciting technical content. Stay tuned for:</p>
              <ul>
                <li>Software engineering tutorials</li>
                <li>Distributed systems insights</li>
                <li>Machine learning projects</li>
              </ul>
            </div>
          )}
        </div>
        <div className="blogs-cta">
          <p>Want to read more? Check out my full blog for in-depth technical articles and tutorials.</p>
          <button onClick={handleViewAllPosts} className="btn btn-primary">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
