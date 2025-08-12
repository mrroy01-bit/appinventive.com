
import React, { useEffect } from 'react';
import ScrollToTop from '../../Component/common/ScrollToTop';
import ResultsSection from '../../Component/About/weWork/ResultsSection';
import EngineeringExcellence from '../../Component/About/weWork/EngineeringExcellence';
import InteractiveEngineering from '../../Component/About/weWork/InteractiveEngineering';
import TechTab from '../../Component/About/weWork/TechTab';
import ClientSuccessStories from '../../Component/About/weWork/ClientSuccessStories';
import ImgB from '../../Component/About/weWork/ImgB';
import RecognitionSection from '../../Component/About/weWork/RecognitionSection'; 
import ContactAndReviews from '../../Component/About/weWork/ContactAndReviews';
import Header from '../../Component/common/Header';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const WeWork = () => {
  // Initialize Lenis smooth scrolling specifically for this page
  const { scrollTo } = useSmoothScroll({
    duration: 1.5,  // Slightly longer for smoother experience
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
    <>
    <div className='bg-black'>
      <Header />
      <ResultsSection />
      <EngineeringExcellence />
      <InteractiveEngineering />
      <TechTab />
      <ClientSuccessStories />
      <ImgB />
      <RecognitionSection />
      <ContactAndReviews />
      <ScrollToTop position="right" />
    </div>
    </>
  );
}

export default WeWork;
