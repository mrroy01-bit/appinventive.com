import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import '../../css/component/awards-section.css';

// --- Data for the award cards ---
// Replace the imgSrc with the actual paths to your award logo files.
const awardsData = [
  {
    imgSrc: 'https://placehold.co/200x100/333/white?text=Clutch',
    year: '2025',
    title: 'Top Android & Chatbot Development Company',
  },
  {
    imgSrc: 'https://placehold.co/200x100/333/white?text=Deloitte',
    year: '2024-2023',
    title: 'Fastest Growing Technology Company',
  },
  {
    imgSrc: 'https://placehold.co/200x100/333/white?text=Mobile+App+Daily',
    year: '2024',
    title: 'Fastest Growing AI Development Companies',
  },
  {
    imgSrc: 'https://placehold.co/200x100/333/white?text=CIO',
    year: '2024',
    title: 'Preferred Partner',
  },
   {
    imgSrc: 'https://placehold.co/200x100/333/white?text=Mobile+App+Daily',
    year: '2024',
    title: 'Fastest Growing AI Development Companies',
  },
  {
    imgSrc: 'https://placehold.co/200x100/333/white?text=CIO',
    year: '2024',
    title: 'Preferred Partner',
  },
];

const AwardsSection = () => {
  // Navigation buttons refs for custom navigation
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  // State to track loaded images
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Handle image load
  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="relative bg-black text-white py-20 sm:py-24 lg:py-28 antialiased overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header with Title and Navigation --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-4xl">
            Our Growth Journey As A Mobile App Development Company Has Bagged A Few Reputed Accolades As Well
          </h2>
          <div className="flex-shrink-0 flex items-center gap-3 self-end md:self-center">
            <button
              ref={navigationPrevRef}
              aria-label="Previous slide"
              className="w-11 h-11 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors duration-300"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              ref={navigationNextRef}
              aria-label="Next slide"
              className="w-11 h-11 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors duration-300"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- Swiper Carousel --- */}
        <div className="awards-swiper-container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Assign navigation elements to Swiper
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="w-full"
          >
            {awardsData.map((award, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center text-center h-full transition-all duration-300 hover:bg-zinc-800">
                  <div className="h-24 relative mb-4 w-full flex items-center justify-center">
                    {!imagesLoaded[index] && (
                      <div className="w-8 h-8 border-t-2 border-zinc-500 rounded-full animate-spin"></div>
                    )}
                    <img 
                      src={award.imgSrc} 
                      alt={award.title} 
                      className={`h-24 w-auto object-contain ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                  <p className="text-zinc-400 text-sm font-medium">{award.year}</p>
                  <p className="text-lg font-medium mt-2 leading-snug">{award.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* --- Floating Action Button --- */}
      
    </section>
  );
};

// Add custom styles
const swiperStyles = `
  .awards-swiper-container .swiper-slide {
    width: auto;
    height: auto;
  }
`;

// Create a style element and append it to the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = swiperStyles;
  document.head.appendChild(styleElement);
}

export default AwardsSection;