import React from 'react';

import img1 from '../../../assest/about/deloitte.svg';    
import img2 from '../../../assest/about/outlook-awards-icon.svg';
import img3 from '../../../assest/about/economic-times-icon.svg';
import img4 from '../../../assest/about/times-business-awards-badge.webp';
import img5 from '../../../assest/about/entrepreneur-awards-icon.svg';









const RecognitionSection = () => {
  return (
    <div className="bg-black text-white font-sans py-16 sm:py-24 px-4">
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Rewarding Excellence To Clients<br />
          Awarded Us With Reputed Recognition
        </h2>

        {/* Awards Logos Container */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-14 gap-y-10 md:gap-x-16 lg:gap-x-20">

          {/* Award 1: Deloitte */}
          {/* Replace src with the path to your Deloitte award image */}
          <img 
            src={img1} 
            alt="Deloitte Technology Fast 50 2023 Award" 
            className="h-16 object-contain" 
          />

          {/* Award 2: Outlook Business Spotlight */}
          {/* Replace src with the path to your Outlook award image */}
          <img 
            src={img2} 
            alt="Outlook Business Spotlight Best Place To Work 2022 Award" 
            className="h-20 object-contain" 
          />

          {/* Award 3: The Economic Times */}
          {/* Replace src with the path to your Economic Times award image */}
          <img 
            src={img3} 
            alt="The Economic Times India's Growth Champions 2023 Award" 
            className="h-28 object-contain" 
          />
          
          {/* Award 4: Times Business Awards */}
          {/* Replace src with the path to your Times Business award image */}
          <img 
            src={img4} 
            alt="Times Business Awards Tech Company Of The Year Award" 
            className="h-28 object-contain" 
          />

          {/* Award 5: Entrepreneur */}
          {/* Replace src with the path to your Entrepreneur award image */}
          <img 
            src={img5} 
            alt="Entrepreneur App Development Company Of The Year Award" 
            className="h-16 object-contain" 
          />

        </div>
      </div>
    </div>
  );
};

export default RecognitionSection;