import React, { useEffect } from 'react';
import InnovationHero from '../../Component/About/CoreTeam/InnovationHero';
import TeamImg from '../../Component/About/CoreTeam/TeamImg';
import JoinTeamSection from '../../Component/About/CoreTeam/JoinTeamSection';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import ScrollToTop from '../../Component/common/ScrollToTop';

const CoreTeam = () => {
  // Initialize Lenis smooth scrolling
  const { scrollTo } = useSmoothScroll({
    duration: 1.2,
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
        <InnovationHero />
        <TeamImg />
        <JoinTeamSection />
      <ScrollToTop position="right" />
    </div>
  );
};

export default CoreTeam;
