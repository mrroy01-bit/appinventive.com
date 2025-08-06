import React from 'react';

// --- Logo Data ---
// It's best practice to keep data separate from the component logic.
// Replace the placeholder URLs with your actual logo image URLs.
const partnerLogos = [
  {
    // Placeholder image from an asset hosting service
    src: 'https://cdn.worldvectorlogo.com/logos/aws-logo.svg',
    alt: 'Amazon Web Services Logo',
    name: 'Amazon Web Services',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
    alt: 'MongoDB Logo',
    name: 'MongoDB',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg',
    alt: 'Google Cloud Platform Logo',
    name: 'Google Cloud',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg',
    alt: 'Cloudinary Logo',
    name: 'Cloudinary',
  },
];

// --- The Main Component ---
const PartnershipLogos = () => {
  return (
    <div className="bg-black text-white w-full py-10 px-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Strategic Partnerships to
          <br />
          Unlock Greater Business Value
        </h2>
        <p className="text-lg text-zinc-400 max-w-3xl  mb-16">
          We collaborate with industry-leading technology partners to deliver robust, scalable, and innovative solutions that drive growth and efficiency for our clients.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerLogos.map((logo, index) => (
            // Each logo card is a 'group' to enable hover effects on child elements
            <div key={index} className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex items-center justify-center h-48 transition-all duration-300 ease-in-out hover:bg-zinc-800">
              
              {/* Logo Image */}
              <img
                src={logo.src}
                alt={logo.alt}
                // Logos are slightly dimmed and grayscale by default, becoming fully visible on hover
                className="h-12 w-auto object-contain transition-all duration-300 ease-in-out brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0"
              />

              {/* Hover Title */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
                <span className="bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  {logo.name}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipLogos;
