import React from 'react';
import Header from '../../Component/common/Header';
import HeroSection from '../../Component/PortFolio/Adidas/Hero';
import AboutAdidas from '../../Component/PortFolio/Adidas/AboutAdidas';
import ProjectShowcase from '../../Component/PortFolio/Adidas/ProjectShowcase';
import ProjectChallenges from '../../Component/PortFolio/Adidas/ProjectChallenges';
import DevelopmentProcess from '../../Component/PortFolio/Adidas/DevelopmentProcess';
import ResultsSection from '../../Component/PortFolio/Adidas/ResultsSection';
import CaseStudies from '../../Component/PortFolio/Adidas/CaseStudies';

const Adidas = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutAdidas />
      <ProjectShowcase />
      <ProjectChallenges />
      <DevelopmentProcess />
      <ResultsSection />
      <CaseStudies />
    </div>
  );
}

export default Adidas;
