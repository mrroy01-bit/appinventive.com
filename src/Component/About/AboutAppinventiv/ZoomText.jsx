import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonials = () => {
  const testimonialsData = [
    {
      quote: "The flexible work culture has helped me plan my personal life better, which, in return, motivates me to do more at work.",
      name: "Sumit Kumar",
      role: "Frontend Developer",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "I have had the opportunity to work with amazing mentors across hierarchies, completely opposite to the Corporate stereotypes I have come across.",
      name: "Rabban Ahmed",
      role: "Project Manager",
      img: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
      quote: "I never thought professional environments could get as candid and colorful as the parties at Appinventiv do.",
      name: "Shagun Dubey",
      role: "Social Media Copywriter",
      img: "https://randomuser.me/api/portraits/women/33.jpg"
    },
  ];

  return (
    <div className="w-full max-w-6xl p-8 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.name} className="p-8 bg-neutral-100 rounded-2xl">
            <p className="mb-6 text-neutral-600">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 mr-4 rounded-full" />
              <div>
                <p className="font-bold text-neutral-800">{testimonial.name}</p>
                <p className="text-sm text-neutral-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ZoomSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 15]);
  const textOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const testimonialsOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <section ref={targetRef} className="relative w-full h-[300vh] bg-black">
      <div className="sticky top-0 flex flex-col items-center justify-center w-full h-screen overflow-hidden">
        <motion.div style={{ scale, opacity: textOpacity }} className="text-center">
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            BEYOND
            <br />
            WORK
          </h1>
        </motion.div>

        <motion.div 
          style={{ opacity: testimonialsOpacity }} 
          className="absolute inset-0 flex items-center justify-center bg-white"
        >
          <Testimonials />
        </motion.div>
      </div>
    </section>
  );
};

export default ZoomSection;
