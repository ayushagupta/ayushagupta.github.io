import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy: stable highlight based on a reference line below the header
  useEffect(() => {
    const sectionIds = ['intro', 'education', 'experience', 'projects', 'blogs', 'contact'];
    const getHeaderOffset = () => {
      const header = document.querySelector('.header');
      return (header?.clientHeight || 80) + 12; // header height + small gap
    };

    const updateActive = () => {
      const offset = getHeaderOffset();
      const refY = offset + 1; // a line just under the header

      let bestSection = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Distance from section block to the reference line in viewport coords
        const distance = Math.abs(rect.top - refY);
        // Prefer sections that have started (rect.top <= refY)
        const started = rect.top <= refY;
        const score = started ? distance : distance + 10000; // bias toward started sections
        if (score < bestDistance) {
          bestDistance = score;
          bestSection = id;
        }
      }

      if (bestSection) setActiveSection(bestSection);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  const handleNavigation = (sectionId) => {
    // If we're on the home page, scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Ayush Gupta</span>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li><button onClick={() => handleNavigation('intro')} className={`nav-link ${activeSection==='intro' ? 'active' : ''}`}>Home</button></li>
              <li><button onClick={() => handleNavigation('education')} className={`nav-link ${activeSection==='education' ? 'active' : ''}`}>Education</button></li>
              <li><button onClick={() => handleNavigation('experience')} className={`nav-link ${activeSection==='experience' ? 'active' : ''}`}>Experience</button></li>
              <li><button onClick={() => handleNavigation('projects')} className={`nav-link ${activeSection==='projects' ? 'active' : ''}`}>Projects</button></li>
              <li><button onClick={() => handleNavigation('blogs')} className={`nav-link ${activeSection==='blogs' ? 'active' : ''}`}>Blogs</button></li>
              <li><button onClick={() => handleNavigation('contact')} className={`nav-link ${activeSection==='contact' ? 'active' : ''}`}>Contact</button></li>
            </ul>
            <div className="header-actions">
              <a 
                href="https://drive.google.com/file/d/your-resume-file-id/view" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-btn"
              >
                <span>📄</span>
                Resume
              </a>
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                <div className="theme-slider">
                  <div className={`theme-slider-thumb ${isDarkMode ? 'dark' : 'light'}`}>
                    {isDarkMode ? '🌙' : '☀️'}
                  </div>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
