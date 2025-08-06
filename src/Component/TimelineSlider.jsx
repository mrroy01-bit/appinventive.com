import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Using Lucide React for icons, a lightweight and excellent choice.
import { Cpu, Bot, BrainCircuit, ChevronRight, Send } from 'lucide-react';

// --- Feature Data ---
// Storing data in an array keeps the component clean and easy to update.
const features = [
  {
    icon: <Cpu size={28} />,
    title: 'Artificial Intelligence',
    description: 'We leverage AI to craft intelligent solutions that streamline operations and enhance decision-making capabilities.',
  },
  {
    icon: <Bot size={28} />,
    title: 'Generative AI',
    description: 'We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.',
  },
  {
    icon: <BrainCircuit size={28} />,
    title: 'Machine Learning',
    description: 'We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.',
  },
   {
    icon: <Cpu size={28} />,
    title: 'Deep Learning',
    description: 'Our deep learning models tackle complex problems, from image recognition to natural language processing, driving innovation.',
  },
   {
    icon: <Bot size={28} />,
    title: 'Generative AI',
    description: 'We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.',
  },
  {
    icon: <BrainCircuit size={28} />,
    title: 'Machine Learning',
    description: 'We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.',
  },
   {
    icon: <Cpu size={28} />,
    title: 'Deep Learning',
    description: 'Our deep learning models tackle complex problems, from image recognition to natural language processing, driving innovation.',
  },
];

// --- The Main Component ---
const TimelineSlider = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Find which feature is closest to the center of the viewport
      let closestFeatureIndex = 0;
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      featureRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const featureCenter = (top + bottom) / 2;
          const distance = Math.abs(viewportCenter - featureCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestFeatureIndex = index;
          }
        }
      });
      
      setActiveFeatureIndex(closestFeatureIndex);
    };
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white w-full py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column (Sticky Card) */}
        <div className="lg:sticky top-24">
          <h2 className="text-xl md:text-3xl font-semibold mb-6 leading-tight">
            We Create New Solutions and Transform Existing Ones with Technologies That Beat Industry-Best Timelines
          </h2>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mt-12">
             <div className="bg-zinc-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Send size={32} className="transform -rotate-45" />
             </div>
             <h3 className="text-xl font-normal mb-3">Fuel Your Digital-First Idea</h3>
             <p className="text-zinc-400 mb-6">With 1600+ Transformation Experts</p>
             <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Innovate With Us
             </button>
          </div>
        </div>

        {/* Right Column (Scrolling Features) */}
        <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={el => featureRefs.current[index] = el}
              // Apply active styles based on the activeFeatureIndex state
              className={`p-4   transition-all duration-300 ease-in-out
                ${activeFeatureIndex === index
                  ? 'hover:bg-zinc-800, cursor-pointer' // Active state
                  : 'bg-transparent border-transparent' // Inactive state
                }`
              }
              whileHover={{ scale: 1.01 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div  className="flex justify-between items-center  border-b p-5 border-zinc-700">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="text-zinc-400"
                    animate={{ scale: activeFeatureIndex === index ? 1 : 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-100">{feature.title}</h4>
                    <p className="text-zinc-400 mt-1">{feature.description}</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ChevronRight size={24} className="text-zinc-600 text-2xl" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TimelineSlider;
