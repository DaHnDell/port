import React from 'react';
import SidebarHeader from './components/SidebarHeader';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/about/AboutSection';
import ResumeSection from './components/resume/ResumeSection';
import ServiceSection from './components/service/ServiceSection';
import PortfolioSection from './components/portfolio/PortfolioSection';
import ContactSection from './components/contact/ContactSection';

import '../src/assets/styles/main.css'

const App = () => {
  return (
    <>
      <SidebarHeader />
      <div className="main-content">
        <HeroSection />
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
