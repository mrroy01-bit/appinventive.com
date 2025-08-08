import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Individual word component that is animated
const AnimatedWord = ({ word, index, total, scrollYProgress }) => {
  // Calculate the start and end point for this specific word's animation
  const start = index / total;
  const end = start + (1 / total);
  
  // Create opacity transform for this specific word
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  
  return (
    <motion.span 
      style={{ opacity }}
      className="mr-3 transition-opacity duration-100"
    >
      {word}
    </motion.span>
  );
};

// The main component that will be exported
export const HighlightSection = () => {
  const targetRef = useRef(null);

  // The text that will be animated
  const text = "We are a group of agile thinkers who grew from the ground base of just 5 enthusiastic problem solvers in 2015 to a team of 1600+ tech experts matching the top industry skills, qualifications, and experiences. Every solution offered to our clients, thus, is backed by strong factors that enable seamless business growth";
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });

  // Data for the stat cards at the bottom
  const stats = [
    { value: '05', label: 'Global Excellence Centers', color: 'bg-purple-200' },
    { value: '50+', label: 'Awards & Certifications', color: 'bg-lime-200' },
    { value: '90%', label: 'Returning Client Rate', color: 'bg-cyan-200' },
    { value: '94.7%', label: 'Employee Happiness Index', color: 'bg-yellow-200' },
  ];

  return (
    <section 
      ref={targetRef} 
      className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 text-white bg-black"
    >
      <div className="w-full max-w-5xl text-center">
        {/* The paragraph with the scroll-to-highlight effect */}
        <p className="flex flex-wrap justify-center p-4 text-3xl font-medium leading-relaxed md:text-3xl">
          {words.map((word, i) => (
            <AnimatedWord 
              key={i} 
              word={word} 
              index={i} 
              total={words.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </p>
      </div>

      {/* The stat cards section */}
      <div className="grid w-full max-w-5xl grid-cols-2 gap-4 mt-16 md:grid-cols-4 md:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className={`p-6 text-black rounded-2xl ${stat.color}`}>
            <p className="text-3xl font-bold md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
