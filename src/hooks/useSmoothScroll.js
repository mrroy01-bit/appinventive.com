import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Custom hook for implementing smooth scrolling with Lenis
 * @param {Object} options - Lenis initialization options
 * @returns {Object} lenisRef - Reference to the Lenis instance
 */
export const useSmoothScroll = (options = {}) => {
  const lenisRef = useRef();

  useEffect(() => {
    // Default options
    const defaultOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    };

    // Initialize Lenis with merged options
    lenisRef.current = new Lenis({
      ...defaultOptions,
      ...options,
    });

    // Create a function to handle RAF (RequestAnimationFrame)
    function raf(time) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
        requestAnimationFrame(raf);
      }
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [options]);

  // Scroll to element helper function
  const scrollTo = (target, options = {}) => {
    if (!lenisRef.current) return;

    if (typeof target === 'string') {
      // If target is a selector string
      const element = document.querySelector(target);
      if (element) {
        lenisRef.current.scrollTo(element, options);
      }
    } else if (target instanceof HTMLElement) {
      // If target is a DOM element
      lenisRef.current.scrollTo(target, options);
    } else if (typeof target === 'number') {
      // If target is a number (position)
      lenisRef.current.scrollTo(target, options);
    }
  };

  return { lenisRef, scrollTo };
};
