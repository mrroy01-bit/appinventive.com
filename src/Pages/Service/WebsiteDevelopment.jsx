import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaQuoteLeft, FaWordpress, FaCode, FaRocket, FaStar } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiNodedotjs, SiVercel, SiGithub, SiFirebase } from "react-icons/si";
import { HiOutlineSparkles, HiOutlineLightningBolt, HiOutlineGlobe } from "react-icons/hi";

export default function WebsiteDevelopment() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      
      {/* Hero Section - Modern with 3D effects and floating elements */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-50 via-cyan-50 to-white"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-[15%] w-96 h-96 rounded-full bg-gradient-to-br from-teal-300/20 to-cyan-300/20 blur-3xl"
          animate={{ 
            x: [0, 40, 0], 
            y: [0, -40, 0], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-[10%] w-72 h-72 rounded-full bg-gradient-to-tr from-blue-300/20 to-indigo-300/20 blur-3xl"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 30, 0], 
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left mb-12 md:mb-0 z-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full"
            >
              Website Development
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">Elevate Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">Digital Presence</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We craft bespoke, high-performance websites that captivate visitors and convert them into loyal customers.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]">
                Get a Free Consultation
              </button>
              <button className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow hover:border-gray-300 transition-all duration-300">
                View Our Portfolio
              </button>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10 bg-white p-3 rounded-xl shadow-2xl border border-gray-100"
            >
              <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 aspect-[16/10] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[70%] bg-white/10 backdrop-blur-md rounded-lg overflow-hidden flex flex-col">
                    <div className="h-6 bg-gray-800 flex items-center px-3">
                      <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="h-3 w-24 bg-white/20 rounded mb-3"></div>
                      <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
                      <div className="h-2 w-[80%] bg-white/10 rounded mb-2"></div>
                      <div className="h-2 w-[60%] bg-white/10 rounded mb-4"></div>
                      <div className="h-8 w-20 bg-teal-500/80 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 flex space-x-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <SiReact className="text-cyan-400 text-xs" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <SiNextdotjs className="text-white text-xs" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <SiTailwindcss className="text-cyan-400 text-xs" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-10 -right-5 bg-white p-3 rounded-lg shadow-lg z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <HiOutlineLightningBolt className="text-2xl text-teal-500" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -left-5 bg-white p-3 rounded-lg shadow-lg z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <HiOutlineSparkles className="text-2xl text-cyan-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features/Why Choose Us - Modern card design with hover effects */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full"
            >
              Our Expertise
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Web Development</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with strategic design to create websites that not only look stunning but also deliver measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Bespoke Design & Development", 
                icon: <FaLaptopCode size={28} className="text-teal-500" />,
                description: "Custom-built websites tailored to your unique brand identity and business objectives."
              },
              { 
                title: "Performance Optimization", 
                icon: <HiOutlineLightningBolt size={28} className="text-teal-500" />,
                description: "Lightning-fast load times and smooth user experiences that keep visitors engaged."
              },
              { 
                title: "SEO & Conversion Focused", 
                icon: <HiOutlineSparkles size={28} className="text-teal-500" />,
                description: "Strategic development that boosts your search rankings and turns visitors into customers."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="mb-6 p-3 inline-block rounded-lg bg-teal-50">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process - Modern stepped timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full"
            >
              Our Process
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">How We Build Your Website</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures we deliver exceptional websites on time and within budget.
            </p>
          </div>
          
          <div className="relative">
            {/* Process timeline connector */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-100 via-cyan-100 to-blue-100 transform -translate-x-1/2"></div>
            
            {[
              {
                title: "Discovery & Strategy", 
                description: "We analyze your business, target audience, and objectives to develop a comprehensive website strategy."
              },
              {
                title: "UI/UX Design", 
                description: "Our designers create intuitive, engaging interfaces that align with your brand and optimize user experience."
              },
              {
                title: "Development", 
                description: "Using modern frameworks and clean code, we build a website that's fast, secure, and scalable."
              },
              {
                title: "Testing & Optimization", 
                description: "Rigorous testing ensures your website works flawlessly across all devices and browsers."
              },
              {
                title: "Launch & Support", 
                description: "We handle the deployment process and provide ongoing support to keep your website running smoothly."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end items-center">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {i + 1}
                  </motion.div>
                </div>
                <div className={`md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-100 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies - Modern grid with gradient cards */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full"
            >
              Tech Stack
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Technologies We Leverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge tools and frameworks to build modern, performant websites.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: <SiReact size={40} />, name: "React", color: "bg-gradient-to-br from-cyan-500 to-blue-500" },
              { icon: <SiNextdotjs size={40} />, name: "Next.js", color: "bg-gradient-to-br from-gray-900 to-gray-700" },
              { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS", color: "bg-gradient-to-br from-cyan-500 to-teal-500" },
              { icon: <SiNodedotjs size={40} />, name: "Node.js", color: "bg-gradient-to-br from-green-600 to-green-500" },
              { icon: <SiMongodb size={40} />, name: "MongoDB", color: "bg-gradient-to-br from-green-700 to-green-600" },
              { icon: <SiVercel size={40} />, name: "Vercel", color: "bg-gradient-to-br from-gray-900 to-gray-800" },
              { icon: <SiFirebase size={40} />, name: "Firebase", color: "bg-gradient-to-br from-yellow-500 to-orange-500" },
              { icon: <FaWordpress size={40} />, name: "WordPress", color: "bg-gradient-to-br from-blue-600 to-blue-500" },
              { icon: <SiGithub size={40} />, name: "GitHub", color: "bg-gradient-to-br from-gray-800 to-gray-700" },
              { icon: <FaCode size={40} />, name: "Custom APIs", color: "bg-gradient-to-br from-indigo-600 to-purple-600" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className={`${tech.color} w-16 h-16 rounded-xl shadow-lg flex items-center justify-center text-white mb-3`}>
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern design with rating stars */}
      <section className="py-24 px-6 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full"
            >
              Testimonials
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear directly from businesses that have transformed their digital presence with our website development services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The website they delivered exceeded all our expectations. It's not only visually stunning but has significantly improved our conversion rates and user engagement metrics.",
                name: "Michael Thompson",
                position: "Marketing Director, TechInnovate",
                rating: 5
              },
              {
                quote: "Working with their team was seamless from start to finish. They understood our vision perfectly and transformed it into a website that perfectly represents our brand and serves our customers.",
                name: "Sarah Williams",
                position: "CEO, Creative Solutions",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-teal-100 rounded-bl-xl rounded-tr-xl flex items-center justify-center">
                  <FaQuoteLeft className="text-teal-500 text-xl" />
                </div>
                <div className="mb-6">
                  {Array(testimonial.rating).fill(0).map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-400 inline-block mr-1" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Modern gradient design */}
      <section className="py-24 px-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p 
            className="text-lg mb-10 text-teal-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's create a website that not only looks stunning but also drives real business results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-white text-teal-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
