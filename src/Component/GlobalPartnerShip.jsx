import React from 'react';


const partnerLogos = [
  { src: 'https://cdn.worldvectorlogo.com/logos/ikea-1.svg', alt: 'IKEA Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg', alt: 'Google Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/boston-consulting-group-1.svg', alt: 'Boston Consulting Group Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/kfc-2.svg', alt: 'KFC Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/tgi-fridays.svg', alt: 'TGI Fridays Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/moo-2.svg', alt: 'Moo Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/krispy-kreme-doughnuts.svg', alt: 'Krispy Kreme Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/hardees-1.svg', alt: 'Hardees Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/bajaj-allianz-life-insurance.svg', alt: 'Bajaj Allianz Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/dominos-pizza-1.svg', alt: 'Dominos Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/supershe.svg', alt: 'Supershe Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/wimpy-1.svg', alt: 'Wimpy Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/empire-hotels.svg', alt: 'Empire Hotels Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/jobget.svg', alt: 'JobGet Logo' },
  { src: 'https://cdn.worldvectorlogo.com/logos/asian-bank-1.svg', alt: 'Asian Bank Logo' },
];

// --- The Main Component ---
const GlobalPartnerships = () => {
  return (
    <div className="bg-black text-white w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl  text-left">
        
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-semibold max-w-4xl ml-10 mb-16">
          Our Partnerships Have Transformed How You Experience These Global Leaders
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 items-center">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              
              {/* Logo Image */}
              {/*
                The filter classes are a common trick to make colored logos appear white
                on a dark background. `grayscale` turns it black and white, `brightness-0` makes it black,
                and `invert(1)` flips it to white.
              */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain filter grayscale brightness-0 invert"
              />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalPartnerships;
