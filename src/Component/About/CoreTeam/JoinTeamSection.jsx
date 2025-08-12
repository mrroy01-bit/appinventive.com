import React from 'react';
import IMAGE_MAIN from '../../../assest/CoreTeam/main.webp';
import IMAGE_TOP_RIGHT from '../../../assest/CoreTeam/join-appi-team1.webp';
import IMAGE_BOTTOM_RIGHT from '../../../assest/CoreTeam/join-team-img3.webp';

const JoinTeamSection = () => {
  return (
    <section className="bg-white font-sans">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Join the <br /> Appinventiv team!
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Innovate with the latest and greatest technologies & get to work on some of the coolest projects you can imagine.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full max-h-[500px]">
            <div className="row-span-2">
              <img 
                src={IMAGE_MAIN} 
                alt="A smiling team member holding a laptop" 
                className="w-full h-full object-cover rounded-lg shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x600/e2e8f0/4a5568?text=Image'; }}
              />
            </div>
            <div>
              <img 
                src={IMAGE_TOP_RIGHT} 
                alt="Team members collaborating at a desk" 
                className="w-full h-full object-cover rounded-lg shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/e2e8f0/4a5568?text=Image'; }}
              />
            </div>
            <div>
              <img 
                src={IMAGE_BOTTOM_RIGHT} 
                alt="Team members working in an office" 
                className="w-full h-full object-cover rounded-lg shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/e2e8f0/4a5568?text=Image'; }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
