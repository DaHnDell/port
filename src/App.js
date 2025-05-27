import React, { useEffect, useState } from 'react';
import SidebarHeader from './components/SidebarHeader';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/about/AboutSection';
import ResumeSection from './components/resume/ResumeSection';
import ServiceSection from './components/service/ServiceSection';
import PortfolioSection from './components/portfolio/PortfolioSection';
import ContactSection from './components/contact/ContactSection';

import '../src/assets/styles/main.css'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.8;
      setShowSidebar(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="hero-wrapper">
        <HeroSection />
      </div>

      {showSidebar && <SidebarHeader />}
      <div className={`main-content ${showSidebar ? '' : 'no-sidebar'}`}>
        <AboutSection />
        <ResumeSection />
        <ServiceSection />
        <PortfolioSection />
        <ContactSection />
      </div>
    </>
  );
};

export default App;
