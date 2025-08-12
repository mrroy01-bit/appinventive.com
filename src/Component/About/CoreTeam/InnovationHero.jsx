import React from 'react';
import Bg from '../../../assest/CoreTeam/bg.webp';
import Header from '../../common/Header';


const InnovationHero = () => {
  const imageUrl = Bg;

  return (
    <>
    <Header />
    <section aria-label="Leaders in Innovation and Technology" className='w-full h-screen bg-black'>
      <div
        className="relative bg-cover bg-center text-white h-full sm:h-[50vh] md:h-full"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent" />

        <div className="relative h-full flex items-center">
          <div className="w-full max-w-6xl px-8 sm:px-12 md:px-16 lg:px-24">
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
              Leaders in 
              Innovation <br />
              And Technology
            </h1>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default InnovationHero;