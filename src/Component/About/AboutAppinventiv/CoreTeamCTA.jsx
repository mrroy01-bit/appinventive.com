import React from 'react';
import CTR from '../../../assest/about/appi-cta-banner.webp';
const CoreTeamCTA = () => {
  return (
    <section className="w-full bg-[#3ffb8d]">
      <div className="container grid items-center w-full max-w-6xl grid-cols-1 gap-8 px-3 py-20 md:grid-cols-2 md:py-6">
        {/* Left Column: Text and Button */}
        <div className="text-left m-9 text-black">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Want to meet the founding members and key drivers of our success till now?
          </h2>
          <a
            href="#"
            className="inline-block px-8 py-3  mt-4 font-semibold text-white transition-transform bg-blue-600 rounded-full shadow-lg hover:scale-105"
          >
            Meet Our Core Team
          </a>
        </div>

        {/* Right Column: Image with custom shape */}
        <div className="relative w-full mt-[-80px] h-50 md:h-96 ml-[18vh]">
          {/* The image container with the clip-path for the angled look */}
          <div 
            className="absolute inset-0 w-[44vw] h-[70vh] bg-center bg-cover"
            style={{
              backgroundImage: `url('${CTR}')`,
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
             {/* This div is just for the yellow outline effect */}
             <div className="absolute inset-0 w-full h-full"></div>
          </div>

          {/* The blue graphic element in the top right corner */}
          <div className="absolute top-0 right-0 w-24 h-24 -mt-4 -mr-4">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeamCTA;
