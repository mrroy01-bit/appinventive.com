import React from 'react';
import BgImg from '../../../assest/about/bg.webp'; 

const Testimonials = () => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center overflow-hidden min-h-screen">

      {/* Main background image */}
      <div
        className="absolute inset-0 z-[-2]"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Dark overlay for background */}
      <div
        className="absolute inset-0 bg-black opacity-60 z-[-1]"
      ></div>

      {/* Texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'url(https://www.transparenttextures.com/patterns/black-linen.png)',
          backgroundSize: '100px 100px',
        }}
      ></div>

      {/* Gradient layers */}
      <div
        className="absolute inset-x-0 bottom-0 top-[35%] h-[250%] bg-gradient-to-t from-blue-900 to-transparent rounded-t-[50%] transform scale-x-[1.8] rotate-[5deg] opacity-70"
        style={{ filter: 'blur(40px)' }}
      ></div>

      <div
        className="absolute inset-x-0 bottom-0 top-[40%] h-[200%] bg-gradient-to-t from-blue-700 to-transparent rounded-t-[50%] transform scale-x-[1.6] rotate-[2deg] opacity-50"
        style={{ filter: 'blur(50px)' }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 p-4 md:p-8 text-white">
        <h1 className="text-5xl md:text-5xl lg:text-[8rem] font-extrabold uppercase tracking-tight leading-none drop-shadow-lg">
          Proven Results
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light drop-shadow-md">
          through Our Clients' Words
        </p>

        <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
          <p className="text-sm md:text-lg font-light leading-relaxed">
            From concept to completion, we deliver excellence. Our agile services have fostered ongoing collaborations
            with leading enterprises like{' '}
            <b className="font-semibold">KFC, BCG, IKEA, KPMG, Adidas,</b> and{' '}
            <b className="font-semibold">Pizza Hut.</b>
          </p>
        </div>

        <button className="mt-8 md:mt-12 px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg transition-colors duration-300 transform hover:scale-105">
          Let's Explore Partnership Opportunities
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Testimonials;
