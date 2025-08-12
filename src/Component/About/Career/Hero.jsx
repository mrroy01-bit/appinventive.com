import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import Header from '../../common/Header';

const HeroSlider = () => {
  // Data for each slide, including text content
  const slideData = [
    {
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'We Build',
      subtitle: 'Innovation',
      buttonText: 'Start Your Project Today'
    },
    {
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'We Seek',
      subtitle: 'Dreamers',
      buttonText: 'Join Our Team'
    },
    {
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'We Create',
      subtitle: 'Solutions',
      buttonText: 'Discover More'
    }
  ];

  // State to track the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <Header />
    <div className="relative h-screen w-full font-sans">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
            crossFade: true
        }}
        loop={true}
        className="absolute inset-0 h-full w-full"
        // Update active index on slide change
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="h-full w-full bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-10 flex h-full flex-col items-start justify-center text-white px-8 sm:px-16 md:px-24">
        {/* Content now dynamically changes based on the active slide */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-wide">
          {slideData[activeIndex].title}
        </h1>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide mt-1">
          {slideData[activeIndex].subtitle}
        </h2>

        <button className="mt-8 rounded-md bg-blue-500 px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          {slideData[activeIndex].buttonText}
        </button>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
        <button className="swiper-button-prev-custom flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-20 text-white transition hover:bg-opacity-30 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="swiper-button-next-custom flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-20 text-white transition hover:bg-opacity-30 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform duration-300 hover:scale-110">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
    </>
  );
};


export default HeroSlider;
