import React from 'react';
import PmImg from '../../../assest/about/pm-cares-banner.png';

const PMCareSection = () => {
  return (
    <section className="relative text-white py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="relative max-w-6xl mx-auto p-6 rounded-lg overflow-hidden z-10">
        {/* Background image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
          style={{ 
            backgroundImage: `url(${PmImg})`,
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            position: 'absolute',
            zIndex: -1
          }}
        ></div>
        
        {/* Dark overlay for better text readability */}
        <div 
          className="absolute inset-0 bg-zinc-800 bg-opacity-50"
          style={{
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            position: 'absolute',
            zIndex: -1
          }}
        ></div>

        <div className="text-center mt-20 mb-12 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Aiding National Campaigns With <br />
            <span className="text-blue-500">PM Cares Fund</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto">
            The Prime Minister's Citizen Assistance and Relief in Emergency Situations Fund was launched with the
            motive of handling emergency and distress situations. This public charitable trust is looked after by
            Justice K.T.Thomas (Retd.), Kariya Munda, Ratan N. Tata and Sudha Murty whose strong ethical
            intelligence makes PM Cares Fund the best entity to entrust our CSR funds with.
          </p>
        </div>

        <div className="text-center mb-12 relative z-10">
          <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto">
            We believe that the work done by the PM Cares Fund during Covid, especially in the Oxygen Plant
            establishment was one of the most impactful fulfillment of a critical need in our society. These
            strategically planned projects have gained our trust to place our CSR budgets in the PM Cares Fund for
            both FY '21-'22, and in the coming future as well.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
          <button className="flex items-center px-6 py-3 border border-gray-200 text-gray-200 rounded-lg hover:bg-blue-800 transition">
            FY '21-'22
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <button className="flex items-center px-6 py-3 border border-gray-200 text-gray-200 rounded-lg hover:bg-blue-800 transition">
            FY '21-'22
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PMCareSection;