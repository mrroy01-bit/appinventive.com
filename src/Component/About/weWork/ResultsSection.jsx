import React from 'react';

const TEAM_IMAGE_URL = 'http://googleusercontent.com/file_content/2';

const ResultsSection = () => {
  return (
    <div className="bg-black pt-[7rem] mx-10 text-white font-sans">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Unmatched Results Driven By <br />
              <span className="text-blue-400">Pursuit For Excellence</span>
            </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
          
          <div className="">
            <p className="mt-10 text-lg text-gray-300 ">
              Partner with a team that collectively <br /> builds tailored solutions.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-blue-600 text-white font-semibold py-2.5 px-5 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Book Free consultation
              </a>
            </div>
          </div>

          <div className='w-[47vw]  mt-3'>
            <img
              src={TEAM_IMAGE_URL}
              alt="A team collaborating in a modern office meeting room"
              className="w-full h-auto rounded-lg shadow-2xl"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1a202c/ffffff?text=Team+Meeting'; }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
