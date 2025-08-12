import React from 'react';
import ScrollHero from '../../Component/About/Corporate/ScrollHero';
import BetterLifeSection from '../../Component/About/Corporate/BetterLifeSection';
import PMCareSection from '../../Component/About/Corporate/PMCareSection';
import MenstrualSection from '../../Component/About/Corporate/MenstrualSection';
import Footer from '../../Component/common/Footer';

const Corporate = () => {
  return (
    <div className='bg-black'>
      <ScrollHero />
      <BetterLifeSection />
      <PMCareSection  />
      <MenstrualSection />
      <Footer />
    </div>
  );
}

export default Corporate;
