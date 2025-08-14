import React from 'react';

import img1 from '../../../assest/portfolio/moo-more-casestudy.webp';
import img2 from '../../../assest/portfolio/case-study2.webp';



const CaseStudyCard = ({ imageUrl, title, description, aosDelay }) => {
  return (
    <div 
      className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <img 
        src={imageUrl} 
        alt={`Case study for ${title}`} 
        className="w-full h-56 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/18181b/ffffff?text=Image+Not+Found'; }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const studies = [
    {
      imageUrl: img1,
      title: 'Moo',
      description: 'Making the daily commute experience digitized, cheaper & glitch-free while cutting down on pollution.',
      aosDelay: "0"
    },
    {
      imageUrl: img2,
      title: 'Gully Beat',
      description: 'An app that gave voice to the streets, nation wide.',
      aosDelay: "200"
    }
  ];

  return (

    <>
    <section className="bg-zinc-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          data-aos="fade-up"
        >
          More case studies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {studies.map((study, index) => (
            <CaseStudyCard
              key={index}
              imageUrl={study.imageUrl}
              title={study.title}
              description={study.description}
              aosDelay={study.aosDelay}
            />
          ))}
        </div>
      </div>
    </section>

    <section 
      className="relative bg-cover bg-center py-24 sm:py-32" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          data-aos="fade-up"
        >
          Kickstart Your Dream Project With Us
        </h2>

        <p 
          className="text-lg md:text-xl text-gray-200 mb-8"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          We have worked with some of the best innovative ideas and brands in the world across industries.
        </p>

        <div data-aos="fade-up" data-aos-delay="400">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
            Initiate a Partnership
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default CaseStudies;
