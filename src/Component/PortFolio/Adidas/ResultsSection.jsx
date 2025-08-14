import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



import playervid from '../../../assest/portfolio/adidas-anim-result.mp4';

const ResultsSection = () => {

    useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <section className="flex flex-col lg:flex-row w-full bg-zinc-900 text-white">
      
      {/* Left Column: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
        <div className="max-w-md mx-auto lg:mx-0">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-12"
            data-aos="fade-up"
          >
            The Results
          </h2>
          <div className="flex items-center gap-12 sm:gap-16">
            {/* Stat 1: Downloads */}
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-5xl sm:text-6xl font-bold">2M</p>
              <p className="text-base text-gray-400 mt-2">Downloads</p>
            </div>

            {/* Stat 2: New Users */}
            <div data-aos="fade-up" data-aos-delay="400">
              <p className="text-5xl sm:text-6xl font-bold">500k</p>
              <p className="text-base text-gray-400 mt-2">New Users Acquired</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div 
        className="w-full my-10 lg:w-[65vh] h-80 lg:h-[70vh]" 
        data-aos="fade-left"
      >
        <video
          src={playervid}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>

    </section>
  );
};

export default ResultsSection;