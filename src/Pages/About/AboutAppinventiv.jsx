import React, { useEffect } from 'react';
import Header from '../../Component/common/Header';
import VisionSection from '../../Component/About/AboutAppinventiv/background';
import {HighlightSection} from '../../Component/About/AboutAppinventiv/HighlightText';
import RoiSection from '../../Component/About/AboutAppinventiv/RoiSection';
import OurValuesSection from '../../Component/About/AboutAppinventiv/OurValuesSection';
import ClientLogos from '../../Component/About/AboutAppinventiv/Brand';
import ZoomSection from '../../Component/About/AboutAppinventiv/ZoomText';
import CommunitySection from '../../Component/About/AboutAppinventiv/ImgBrd';
import CoreTeamCTA from '../../Component/About/AboutAppinventiv/CoreTeamCTA';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import ScrollToTop from '../../Component/common/ScrollToTop';
import Footer from '../../Component/common/Footer';

const AboutAppinventiv = () => {
  const { scrollTo } = useSmoothScroll({
    // You can override default options here if needed
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  useEffect(() => {
    // Handle anchor links for smooth scrolling
    const handleAnchorLinks = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        setTimeout(() => {
          scrollTo(`#${id}`);
        }, 100);
      }
    };

    // Call once on mount to handle initial URL with hash
    handleAnchorLinks();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleAnchorLinks);

    // Cleanup function
    return () => {
      window.removeEventListener('hashchange', handleAnchorLinks);
    };
  }, [scrollTo]);

  return (
    <div className="scroll-smooth">
      <Header />
      <VisionSection />
      <HighlightSection />
      <RoiSection />
      <OurValuesSection />
      <ClientLogos />
      <ZoomSection />
      <CommunitySection />
      <CoreTeamCTA />
      <Footer />
      <ScrollToTop threshold={300} position="right" />
    </div>
  );
}

export default AboutAppinventiv;
