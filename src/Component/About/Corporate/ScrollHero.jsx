import React from 'react';
import img from "../../../assest/about/csr-banner-new.webp"
import Header from '../../common/Header';
const ScrollHero = () => {
  return (
    <>
    <Header />
    <section className='bg-black'>
      {/* Sticky container for the text */}
      <div className="sticky top-0 z-10">
        <div className="flex flex-col items-center justify-center text-center h-[70vh] bg-cover  text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Giving Back To The  <br />Community With <span className='text-blue-500'>Gratitude</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light">
            By finding opportunities of social responsibility that make a lasting impact on our society
          </p>
        </div>
      </div>

      {/* Image container that scrolls up */}
      <div className='relative w-[90vw] h-[100vh] rounded'> {/* Increased height for scroll space */}
        <img src={img} alt="csr-banner-new" className='w-full h-full object-cover mx-16 rounded-2xl ' />
      </div>
    </section>
    </>
  );
}

export default ScrollHero;