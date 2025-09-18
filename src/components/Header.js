import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
    // Immediately reflect the intended active section in the header
    setActiveSection(sectionId);
    
    // If we're on the home page, scroll to section
    if (location.pathname === '/' || location.hash.startsWith('#/')) {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-list">
              <li><button onClick={() => handleNavigation('intro')} className={`mobile-nav-link ${activeSection==='intro' ? 'active' : ''}`}>Home</button></li>
              <li><button onClick={() => handleNavigation('education')} className={`mobile-nav-link ${activeSection==='education' ? 'active' : ''}`}>Education</button></li>
              <li><button onClick={() => handleNavigation('experience')} className={`mobile-nav-link ${activeSection==='experience' ? 'active' : ''}`}>Experience</button></li>
              <li><button onClick={() => handleNavigation('projects')} className={`mobile-nav-link ${activeSection==='projects' ? 'active' : ''}`}>Projects</button></li>
              <li><button onClick={() => handleNavigation('blogs')} className={`mobile-nav-link ${activeSection==='blogs' ? 'active' : ''}`}>Blogs</button></li>
              <li><button onClick={() => handleNavigation('contact')} className={`mobile-nav-link ${activeSection==='contact' ? 'active' : ''}`}>Contact</button></li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/your-resume-file-id/view" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-nav-link mobile-resume-link"
                >
                  <span>📄</span>
                  Resume
                </a>
              </li>
            </ul>
            <div className="mobile-header-actions">
              <button onClick={toggleTheme} className="mobile-theme-toggle" aria-label="Toggle theme">
                <div className="theme-slider">
                  <div className={`theme-slider-thumb ${isDarkMode ? 'dark' : 'light'}`}>
                    {isDarkMode ? '🌙' : '☀️'}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
