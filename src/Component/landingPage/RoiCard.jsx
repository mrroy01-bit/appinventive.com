import React from 'react';

// Importing icons from react-icons
import { IoRocketSharp, IoPodium, IoBulb } from 'react-icons/io5';
import { BsChatDotsFill } from 'react-icons/bs';

const cardData = [
  {
    Icon: IoRocketSharp,
    badge: 'EFFICIENCY',
    title: 'Automate Processes',
    description: (
      <>
        Cut operational costs by up to <span className="font-bold text-black">30%</span> with AI-driven workflow automation.
      </>
    ),
  },
  {
    Icon: IoPodium,
    badge: 'GROWTH',
    title: 'Personalize Experiences',
    description: (
      <>
        Increase customer LTV (lifetime value) by <span className="font-bold text-black">25%</span> through ML-powered personalization.
      </>
    ),
  },
  {
    Icon: IoBulb,
    badge: 'INNOVATION',
    title: 'Accelerate Discovery',
    description: (
      <>
        Reduce R&D cycles by <span className="font-bold text-black">50%</span> using Generative AI for prototyping and simulation.
      </>
    ),
  },
];

// Reusable Card Sub-Component
const RoiCard = ({ Icon, badge, title, description }) => (
  <div className="bg-white text-black rounded-xl shadow-2xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <div className="bg-black text-white px-4 py-1.5 rounded-full flex items-center gap-x-2 mb-5">
      <Icon />
      <span className="text-xs font-bold tracking-wider">{badge}</span>
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-600 leading-relaxed">{description}</p>
  </div>
);

// Main Section Component
const RoiOfIntelligenceSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-20 sm:py-24 lg:py-28 antialiased overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-15" style={{backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)"}}></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-cover bg-center opacity-15" style={{backgroundImage: "linear-gradient(315deg, rgba(255,255,255,0.1) 0%, transparent 50%)"}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            The ROI of Intelligence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <RoiCard
              key={index}
              Icon={card.Icon}
              badge={card.badge}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-zinc-100 hover:scale-105 transition-all duration-300 ease-in-out">
            Talk to our Expert
          </button>
        </div>
      </div>

      {/* Floating Chat Button */}
     
    </section>
  );
};

export default RoiOfIntelligenceSection;