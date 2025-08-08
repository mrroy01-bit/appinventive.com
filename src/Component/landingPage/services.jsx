import React from 'react';

// Importing specific icons from the react-icons library
import { TbBrain } from 'react-icons/tb';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import {
  HiOutlineCodeBracket,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCloud,
} from 'react-icons/hi2';
import { VscSync } from 'react-icons/vsc';

// An array of service objects for easy mapping
const servicesData = [
  {
    Icon: TbBrain,
    title: 'AI Development Services',
    description: 'We engineer bespoke AI solutions, from Large Language Models (LLMs) to Machine Learning (ML) applications, helping you explore new opportunities for automation, insights, and innovation.',
  },
  {
    Icon: IoPhonePortraitOutline,
    title: 'Mobile App Development',
    description: 'We build intelligent mobile apps with Generative UX Design and AI-Powered Personalization to enhance user engagement.',
  },
  {
    Icon: HiOutlineCodeBracket,
    title: 'Software Development',
    description: 'From custom development to system upgrades, we ensure AI-Native Development and an AI-Augmented SDLC to craft software that enhances operational efficiency and drives innovation.',
  },
  {
    Icon: HiOutlineSparkles,
    title: 'Digital Transformation',
    description: 'We help businesses stay competitive by transforming legacy systems with AI-driven automation, modern digital-first solutions, and Intelligent Process Automation.',
  },
  {
    Icon: HiOutlineLightBulb,
    title: 'Ideation And Design Strategy',
    description: 'Our strategic ideation and design processes, powered by AI-Driven Market Analysis and Generative Design, ensure that your digital products are not only functional but also deeply resonate with users.',
  },
  {
    Icon: HiOutlineChatBubbleOvalLeftEllipsis,
    title: 'IT Consulting',
    description: 'We provide expert IT consulting services supported by AI-Powered IT Strategy and Predictive Analytics to help your organization navigate complex technology decisions and align IT strategies with business objectives.',
  },
  {
    Icon: VscSync,
    title: 'DevOps',
    description: 'Our DevOps services streamline development and operations to accelerate your project timelines and improve the overall product quality through intelligent automation and proactive Insights.',
  },
  {
    Icon: HiOutlineCloud,
    title: 'Cloud Managed Services',
    description: 'We manage your cloud infrastructure end-to-end, using AI-Optimized Cloud Management and AIOps to ensure it is optimized, secure, and cost-effective; allowing you to focus on strategic business activities.',
  },
];

// Reusable card component
const ServiceCard = ({ Icon, title, description }) => (
  <div className="bg-[#1c1c1c] p-6 rounded-xl border border-zinc-800 flex flex-col gap-y-5 transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-700">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
  </div>
);


// Main section component
const ServicesSection = () => {
  return (
    <section className="bg-[#121212] text-white font-sans antialiased pt-20 pb-20 ">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-light text-zinc-300">
              Navigate the Digital Frontier with
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-1">
              Our Engineering Excellence
            </h2>
          </div>
          <button className="mt-4 md:mt-2 flex-shrink-0 border border-zinc-600 rounded-md px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors duration-300">
            Our Services &gt;
          </button>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;