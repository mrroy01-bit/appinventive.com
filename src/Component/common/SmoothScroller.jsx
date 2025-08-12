import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * A component that provides global smooth scrolling using Lenis
 * This component should wrap the entire application in App.jsx
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - The application content
 * @returns {JSX.Element}
 */
const SmoothScroller = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis with default options
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Create RAF function for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);

    // Add scroll listener for additional animations if needed
    const scrollFn = () => {
      // You can add scroll-triggered animations here
    };
    
    lenis.on('scroll', scrollFn);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
      lenis.off('scroll', scrollFn);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroller;
