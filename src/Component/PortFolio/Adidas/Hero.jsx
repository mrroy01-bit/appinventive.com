import React from 'react';
import BannerImg from "../../../assest/portfolio/adidas-banner.webp"


const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const HeroSection = () => {
  const backgroundImageUrl = BannerImg;

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center font-sans"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute top-0 left-0 right-0 h-2.5 bg-zinc-900/80 z-20"></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 pt-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight">
          Expanding Adidas Mobile Presence Globally
        </h1>
        <a
          href="#"
          className="mt-6 text-lg font-semibold flex items-center space-x-2 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded-lg"
        >
          <span>Expand Your Business</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <button 
        aria-label="Open chat"
        className="absolute bottom-5 right-5 z-20 bg-[#1D9AF2] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/20 focus:ring-white"
      >
        <ChatIcon />
      </button>
    </div>
  );
};

export default HeroSection;
