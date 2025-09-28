import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/data/blogs/${slug}/index.md`);
        if (!response.ok) {
          throw new Error('Blog post not found');
        }
        const markdown = await response.text();
        
        // Parse frontmatter and content
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*(?:\n([\s\S]*))?$/;
        const match = markdown.match(frontmatterRegex);
        
        if (match) {
          const frontmatterText = match[1];
          const content = match[2] || '';
          
          // Simple YAML parsing for basic fields
          const frontmatter = {};
          frontmatterText.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
              const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
              frontmatter[key.trim()] = value;
            }
          });
          
          const blogData = {
            ...frontmatter,
            content: marked(content),
            rawContent: content
          };
          
          setBlogPost(blogData);
        } else {
          throw new Error('Invalid blog post format');
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadBlogPost();
    }
  }, [slug]);


  const handleBackToBlogs = () => {
    navigate('/blogs');
  };

  if (loading) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-header">
          <button className="back-button" onClick={handleBackToBlogs}>
            ← Back to Blog Posts
          </button>
        </div>
        <div className="loading-message">Loading blog post...</div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-header">
          <button className="back-button" onClick={handleBackToBlogs}>
            ← Back to Blog Posts
          </button>
        </div>
        <div className="error-message">
          <h2>Blog Post Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <Helmet>
        <title>{blogPost.title} - Ayush Gupta | Software Engineer & Graduate Researcher</title>
        <meta name="description" content={blogPost.excerpt} />
        <meta name="keywords" content={`${blogPost.category}, software engineering, ${blogPost.title.toLowerCase()}, tutorial, blog`} />
        <link rel="canonical" href={`https://ayushagupta.github.io/#/blog/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${blogPost.title} - Ayush Gupta`} />
        <meta property="og:description" content={blogPost.excerpt} />
        <meta property="og:url" content={`https://ayushagupta.github.io/#/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:article:author" content="Ayush Gupta" />
        <meta property="og:article:published_time" content={blogPost.date} />
        <meta property="og:article:section" content={blogPost.category} />
        
        {/* Twitter */}
        <meta name="twitter:title" content={`${blogPost.title} - Ayush Gupta`} />
        <meta name="twitter:description" content={blogPost.excerpt} />
        <meta name="twitter:url" content={`https://ayushagupta.github.io/#/blog/${slug}`} />
        
        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blogPost.title,
            "description": blogPost.excerpt,
            "author": {
              "@type": "Person",
              "name": "Ayush Gupta",
              "url": "https://ayushagupta.github.io"
            },
            "publisher": {
              "@type": "Person",
              "name": "Ayush Gupta"
            },
            "datePublished": blogPost.date,
            "dateModified": blogPost.date,
            "url": `https://ayushagupta.github.io/#/blog/${slug}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://ayushagupta.github.io/#/blog/${slug}`
            }
          })}
        </script>
      </Helmet>
      
      <div className="blog-post-header">
        <button className="back-button" onClick={handleBackToBlogs}>
          ← Back to Blog Posts
        </button>
      </div>

      <article className="blog-post">
        <h1 className="blog-post-title">{blogPost.title}</h1>

        <header className="blog-post-meta">
          <div className="blog-post-category">{blogPost.category}</div>
          <div className="blog-post-date">{blogPost.date}</div>
        </header>

        <div className="blog-post-excerpt">
          {blogPost.excerpt}
        </div>

        <div 
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
