import React, { useState, useEffect } from 'react';
import { Menu, X, } from 'lucide-react';
import '../css/component/header.css'; // Assuming you have a CSS file for styles
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
   <header
  className={`header ${isScrolled ? 'header-scrolled' : ''}`}
  style={isScrolled ? { transform: 'translateX(-50%)' } : {}}
>
  <div className="container">
    <div className="header-inner justify-between">
      {/* Logo and Title */}
      <div className="logo-title">
        <div className="logo-box">
        </div>
        <span className="brand-name">Appinventiv</span>
      </div>

      {/* Navigation */}
      <nav className="nav-desktop ">
        {['Let\'s Talk AI', 'About', 'Services', 'Industries', 'Portfolio', 'Resources'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="nav-link"
          >
            {item}
          </button>
        ))}
        <button className=" rounded-xl p-2 bg-blue-600">Contact</button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <X className={`menu-icon ${isScrolled ? 'icon-dark' : 'icon-light'}`} />
        ) : (
          <Menu className={`menu-icon ${isScrolled ? 'icon-dark' : 'icon-light'}`} />
        )}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="mobile-menu">
        {['Let\'s Talk AI', 'About', 'Services', 'Industries', 'Portfolio', 'Resources'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="mobile-link"
          >
            {item}
          </button>
        ))}
      </div>
    )}
  </div>
</header>

  );
};

export default Header;