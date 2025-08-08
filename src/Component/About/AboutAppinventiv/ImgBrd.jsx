import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';

const societyImages = [
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488521787991-ed7b2f28a727?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518398046578-828775465441?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542810634-71277d952594?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618423507253-375c46d646d2?q=80&w=1926&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504892607313-24a9204d2c78?q=80&w=2070&auto=format&fit=crop',
];

const workPlaceImages = [
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496773822-4441b9d4a0b2?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop',
];

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState('Society');

  const activeImages = activeTab === 'Society' ? societyImages : workPlaceImages;
  // Duplicate images for a seamless loop effect with freeMode
  const topRowImages = [...activeImages.slice(0, Math.ceil(activeImages.length / 2)), ...activeImages.slice(0, Math.ceil(activeImages.length / 2))];
  const bottomRowImages = [...activeImages.slice(Math.ceil(activeImages.length / 2)), ...activeImages.slice(Math.ceil(activeImages.length / 2))];

  return (
    <>
      {/* We inject a style tag to make the transition linear, which is key for the marquee effect */}
      <style>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
      <section className="w-full py-20 overflow-hidden bg-white sm:py-24">
        <div className="w-full max-w-6xl px-4 mx-auto text-center">
          <h2 className="mb-10 text-4xl font-bold text-black md:text-5xl">
            We, Appinventors actively seek
            <br />
            opportunities to better our
          </h2>

          <div className="flex justify-center mb-12">
            <div className="flex p-1 space-x-1 bg-neutral-100 rounded-full">
              <button
                onClick={() => setActiveTab('Society')}
                className={`px-8 py-3 text-sm font-semibold rounded-full transition-colors duration-300 ${
                  activeTab === 'Society' ? 'bg-black text-white' : 'text-black'
                }`}
              >
                Society
              </button>
              <button
                onClick={() => setActiveTab('Work Place')}
                className={`px-8 py-3 text-sm font-semibold rounded-full transition-colors duration-300 ${
                  activeTab === 'Work Place' ? 'bg-black text-white' : 'text-black'
                }`}
              >
                Work Place
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-5">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={'auto'}
            loop={true}
            freeMode={true}
            speed={5000} // Speed of the marquee scroll
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {topRowImages.map((img, index) => (
              <SwiperSlide key={`top-${index}`} style={{ width: 'auto' }}>
                <div className="w-64 h-40 overflow-hidden rounded-2xl md:w-80 md:h-52">
                  <img src={img} alt={`Top Slide ${index + 1}`} className="object-cover w-full h-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={'auto'}
            loop={true}
            freeMode={true}
            speed={5000} // Speed of the marquee scroll
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {bottomRowImages.map((img, index) => (
              <SwiperSlide key={`bottom-${index}`} style={{ width: 'auto' }}>
                <div className="w-64 h-40 overflow-hidden rounded-2xl md:w-80 md:h-52">
                  <img src={img} alt={`Bottom Slide ${index + 1}`} className="object-cover w-full h-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};



export default CommunitySection;