import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

/**
 * A component for smooth scrolling to different sections of the page
 * 
 * @param {Object} props
 * @param {string} props.to - The target selector to scroll to (e.g., "#contact")
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.offset - Offset from the top of the target element (in pixels)
 * @param {ReactNode} props.children - The link content
 * @param {Function} props.onClick - Additional onClick function to be called
 * @returns {JSX.Element}
 */
const SmoothScrollLink = ({
  to,
  className = '',
  offset = 0,
  children,
  onClick,
  ...props
}) => {
  const { scrollTo } = useSmoothScroll();

  const handleClick = (e) => {
    e.preventDefault();
    scrollTo(to, { offset });
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={to}
      className={`cursor-pointer ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;
