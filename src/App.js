import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import BlogListing from './components/BlogListing';
import BlogPost from './components/BlogPost';
import TestComponent from './components/TestComponent';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router basename="/">
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <TestComponent />
                  <Intro />
                  <Education />
                  <Experience />
                  <Projects />
                  <Blogs />
                  <Contact />
                </>
              } />
              <Route path="/blogs" element={<BlogListing />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
