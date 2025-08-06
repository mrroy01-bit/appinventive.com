import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

// Import required modules from Swiper
import { Grid as SwiperGrid, Navigation } from 'swiper/modules';

// Import icons from lucide-react
import { HeartPulse, Landmark, UtensilsCrossed, ShoppingCart, Zap, Puzzle, Plane, Clapperboard, ArrowLeft, ArrowRight } from 'lucide-react';

// --- Card Data (remains the same) ---
const industryData = [
  {
    icon: <HeartPulse size={32} />,
    title: 'Healthcare',
    description: 'We develop robust healthcare solutions that improve patient care with AI Diagnostics & Imaging and Predictive Patient Analytics.',
  },
  {
    icon: <Landmark size={32} />,
    title: 'Finance',
    description: 'Secure and intelligent financial solutions, leveraging AI for risk assessment, fraud detection, and personalized banking experiences.',
  },
  {
    icon: <UtensilsCrossed size={32} />,
    title: 'Restaurant',
    description: 'Optimize restaurant operations with our smart management systems, from order processing to inventory management and customer analytics.',
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'eCommerce',
    description: 'Boost your online store with AI-powered recommendation engines, personalized marketing, and streamlined checkout processes.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Electric Vehicle (EV)',
    description: 'Innovative software for the EV industry, including battery management systems, charging station networks, and predictive maintenance.',
  },
  {
    icon: <Puzzle size={32} />,
    title: 'SaaS',
    description: 'Scalable and reliable Software as a Service solutions tailored to your business needs, ensuring high performance and user satisfaction.',
  },
  {
    icon: <Plane size={32} />,
    title: 'Travel',
    description: 'Enhance the travel experience with AI-driven personalization, dynamic pricing models, and intelligent trip planning tools.',
  },
  {
    icon: <Clapperboard size={32} />,
    title: 'Entertainment',
    description: 'Engage audiences with cutting-edge tech for content delivery, recommendation algorithms, and interactive media experiences.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Electric Vehicle (EV)',
    description: 'Innovative software for the EV industry, including battery management systems, charging station networks, and predictive maintenance.',
  },
  {
    icon: <Puzzle size={32} />,
    title: 'SaaS',
    description: 'Scalable and reliable Software as a Service solutions tailored to your business needs, ensuring high performance and user satisfaction.',
  },
  {
    icon: <Plane size={32} />,
    title: 'Travel',
    description: 'Enhance the travel experience with AI-driven personalization, dynamic pricing models, and intelligent trip planning tools.',
  },
  {
    icon: <Clapperboard size={32} />,
    title: 'Entertainment',
    description: 'Engage audiences with cutting-edge tech for content delivery, recommendation algorithms, and interactive media experiences.',
  },
];


// --- The Main Component ---
const IndustrySlider = () => {
  return (
    <div className="bg-black text-white w-full py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section (Simplified) */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            A Unified Vision That Caters To <br /> Diverse Industry Demands
          </h2>
          <button className="hidden sm:inline-block border border-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
            Explore More Industries &gt;
          </button>
        </div>

        {/* Swiper Slider with Multi-Row Grid Layout */}
        <div className="relative">
          <Swiper
            modules={[SwiperGrid, Navigation]}
            spaceBetween={24}
            slidesPerView={4} // Show 4 columns on desktop
            // By NOT setting slidesPerGroup, it defaults to 1 for a "manual" slide feel
            
            // This is the key for the multi-row layout
            grid={{
              rows: 2,
              fill: 'row',
            }}
            
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            
            // Make it responsive for smaller screens
            breakpoints={{
              320: { // Mobile
                slidesPerView: 1,
                grid: { rows: 2, fill: 'row' },
              },
              768: { // Tablet
                slidesPerView: 2,
                grid: { rows: 2, fill: 'row' },
              },
              1024: { // Desktop
                slidesPerView: 4,
                grid: { rows: 2, fill: 'row' },
              },
            }}
            
            className="!pb-16" // Add padding to not overlap navigation
          >
            {industryData.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-[#111111] border border-gray-800 rounded-lg p-6 h-56 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600">
                  <div className="mb-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-snug max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    {industry.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-[4rem] z-10 relative">
             <button className="custom-swiper-button-prev p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ArrowLeft size={20} />
            </button>
            <button className="custom-swiper-button-next p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySlider;