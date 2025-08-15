import React, { useState, useRef } from 'react';

// --- SVG Icons ---
const LocationIcon = () => (
  <svg aria-hidden="true" focusable="false" className="w-5 h-5 mr-1 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const TagIcon = () => (
  <svg aria-hidden="true" focusable="false" className="w-5 h-5 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
  </svg>
);

// --- Testimonial Card ---
const TestimonialCard = ({ testimonial, width = "w-full", height = "h-[300px]", margin = "m-4" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative cursor-pointer ${width} ${height} ${margin}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute h-[400px] inset-0 flex items-end bg-blue-600 rounded-xl transition-all duration-300 ease-in-out z-0 ${
          isHovered ? 'opacity-100 scale-100 rotate-3' : 'opacity-0 scale-95 -rotate-3'
        }`}
      >
        <h1 className='text-white text-lg font-semibold pl-20'>Watch full video</h1>
      </div>
      <div
        className={`relative bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 ease-in-out z-10 ${
          isHovered ? '-translate-y-3' : ''
        } h-full flex flex-col justify-between`}
      >
        <div>
          <div className="flex items-center text-sm text-gray-700 mb-4">
            <div className="flex items-center mr-4 bg-gray-100 rounded-full px-3 py-1 border border-gray-200">
              <LocationIcon /> {testimonial.location}
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 border border-gray-200">
              <TagIcon /> {testimonial.category}
            </div>
          </div>

          <p className="text-gray-800 text-sm mb-4">{testimonial.quote}</p>
        </div>

        <div className="flex items-center">
          <img src={testimonial.avatar} alt={testimonial.author.name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="font-bold text-gray-900 text-sm">{testimonial.author.name}</p>
            <p className="text-xs text-gray-600">{testimonial.author.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Video Card ---
const VideoCard = ({ src, poster, width = "w-full", height = "h-[300px]", margin = "m-4" }) => {
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  const handleVideoError = () => {
    setHasError(true);
  };

  const handleMouseEnter = () => {
    if (videoRef.current && !hasError) {
      videoRef.current.play().catch(() => {
        // Handle play promise rejection
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !hasError) {
      videoRef.current.pause();
    }
  };

  if (hasError) {
    return (
      <div className={`${width} ${height} ${margin} overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-800 flex items-center justify-center`}>
        <div className="text-white text-center">
          <div className="text-4xl mb-2">🎥</div>
          <p className="text-sm">Video Preview</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${width} ${height} ${margin} overflow-hidden rounded-xl shadow-lg cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={poster}
        onError={handleVideoError}
        className="w-full h-full object-cover"
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// --- Main Layout ---
const CardGrid = () => {
  const testimonial = {
    quote: 'It has been a pleasure working with Appinventiv. The team is extremely versatile, professional and responsive.',
    author: { name: 'César M Melgoza', title: 'Founder & CEO, Epluribus LLC - Creators of MOXY' },
    avatar: 'https://i.pravatar.cc/150?img=1',
    location: 'U.S',
    category: 'Politics'
  };

  const cards = [
    { type: 'testimonial', width: 'w-[250px]', height: 'h-[380px]', margin: 'mt-2 mb-6 ml-3 mr-2' },
    { type: 'testimonial', width: 'w-[250px]', height: 'h-[380px]', margin: 'mt-10 mb-3 ml-3 mr-5' },
    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', width: 'w-[270px]', height: 'h-[380px]', margin: 'mt-1 mb-7 ml-3 mr-2' },
    { type: 'testimonial', width: 'w-[250px]', height: 'h-[380px]', margin: '-mt-5 mb-2 ml-2 mr-6' },
    { type: 'testimonial', width: 'w-[250px]', height: 'h-[380px]', margin: '-mt-5 mb-5 ml-5 mr-1' },
    { type: 'testimonial', width: 'w-[250px]', height: 'h-[380px]', margin: 'mt-8 mb-1 ml-5 mr-4' },
    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', width: 'w-[280px]', height: 'h-[380px]', margin: 'mt-2 mb-4 ml-6 mr-2' },
    { type: 'testimonial', width: 'w-[250px]', height: 'h-[380px]', margin: '-mt-8 mb-6 ml-2 mr-3' },
    { type: 'testimonial', width: 'w-[250px]', height: 'h-[380px]', margin: '-mt-5 mb-3 ml-6 mr-3' },
    { type: 'testimonial', width: 'w-[250px]', height: 'h-[380px]', margin: 'mt-5 mb-7 ml-1 mr-2' },
    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', width: 'w-[280px]', height: 'h-[380px]', margin: '-mt-5 mb-2 ml-3 mr-6' },
    { type: 'testimonial', width: 'w-[250px]', height: 'h-[380px]', margin: 'mt-3 mb-4 ml-5 mr-1' },
  ];

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="flex flex-wrap justify-center">
        {cards.map((card, idx) =>
          card.type === 'video' ? (
            <VideoCard 
              key={idx} 
              src={card.src} 
              poster="/videos/poster.jpg" 
              width={card.width}
              height={card.height}
              margin={card.margin}
            />
          ) : (
            <TestimonialCard 
              key={idx} 
              testimonial={testimonial} 
              width={card.width}
              height={card.height}
              margin={card.margin}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CardGrid;
