import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import './styles/neon.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Hide all sections first
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        element.style.display = 'none';
        element.classList.remove('section-visible');
        element.classList.add('section-hidden');
      }
    });

    // Show target section with animation
    setTimeout(() => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.style.display = 'block';
        setTimeout(() => {
          targetElement.classList.remove('section-hidden');
          targetElement.classList.add('section-visible');
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }, 100);
  };

  useEffect(() => {
    // Initialize with home section visible
    const sections = ['about', 'skills', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        element.style.display = 'none';
      }
    });

    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.style.display = 'block';
      homeElement.classList.add('section-visible');
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <ParticleBackground />
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        <div id="home" className="section-visible">
          <Hero onSectionChange={handleSectionChange} />
        </div>
        <div id="about" className="section-hidden">
          <About onSectionChange={handleSectionChange} />
        </div>
        <div id="skills" className="section-hidden">
          <Skills onSectionChange={handleSectionChange} />
        </div>
        <div id="projects" className="section-hidden">
          <Projects onSectionChange={handleSectionChange} />
        </div>
        <div id="contact" className="section-hidden">
          <Contact onSectionChange={handleSectionChange} />
        </div>
      </main>
      <Footer />
      <ScrollToTop onSectionChange={handleSectionChange} />
    </div>
  );
}

export default App;