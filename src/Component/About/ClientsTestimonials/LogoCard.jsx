import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import kfcLogo from '../../../assest/portfolio/ility-logo-white.svg';
import pizzaHutLogo from '../../../assest/portfolio/logo2.svg';
import adidasLogo from '../../../assest/portfolio/logo3.svg';
import ikeaLogo from '../../../assest/portfolio/logo4.svg';
import jobgetLogo from '../../../assest/portfolio/logo5.svg';
import ilityLogo from '../../../assest/portfolio/logo6.svg';

// A reusable component for each logo card
const LogoCard = ({ children, className = "" }) => (
  <div className={`bg-gray-800 rounded-lg h-32 flex items-center justify-center p-6 transition-transform duration-300 hover:bg-gray-700 hover:scale-105 ${className}`}>
    {children}
  </div>
);

// --- Main Component ---
const LogoGrid = () => {
    useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-out-cubic",
      once: false, 
    });
  }, []);
  return (
    <div className="overflow-hidden bg-gray-900 min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-white text-center lg:text-left" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Discover The Secrets Behind Our Game-Changing Success Stories
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
              View Our Client Portfolio
            </button>
          </div>

          {/* Right Column: Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" data-aos="fade-left">
            <LogoCard>
              <img src={kfcLogo} alt="KFC Logo" className="max-h-full max-w-full object-contain" />
            </LogoCard>
            <LogoCard>
              <img src={pizzaHutLogo} alt="Pizza Hut Logo" className="max-h-full max-w-full object-contain" />
            </LogoCard>
            <LogoCard>
              <img src={adidasLogo} alt="Adidas Logo" className="max-h-full max-w-full object-contain" />
            </LogoCard>
            <LogoCard>
              <img src={ikeaLogo} alt="IKEA Logo" className="max-h-full max-w-full object-contain" />
            </LogoCard>
            <LogoCard>
              <img src={jobgetLogo} alt="JobGet Logo" className="max-h-full max-w-full object-contain" />
            </LogoCard>
            <LogoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
