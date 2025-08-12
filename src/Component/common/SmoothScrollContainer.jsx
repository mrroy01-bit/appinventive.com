import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

/**
 * A component that provides a smooth scrolling container with parallax effect
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - The content to be rendered inside the container
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
const SmoothScrollContainer = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  
  // Initialize Lenis smooth scrolling
  const { lenisRef } = useSmoothScroll({
    duration: 1.5, 
    smoothWheel: true,
    wheelMultiplier: 1.2,
    touchMultiplier: 2,
    infinite: false,
  });

  // Get scroll progress values for animation
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"] 
  });

  // Transform values based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Add event listener to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (lenisRef.current) {
        lenisRef.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [lenisRef]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div 
        style={{ opacity, scale }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SmoothScrollContainer;
