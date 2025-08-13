import React from "react";
import { motion } from "framer-motion";
import Header from "../../Component/common/Header";


import { FaApple, FaReact, FaQuoteLeft, FaCode, FaRocket, FaAward } from "react-icons/fa";
import { SiSwift, SiFlutter, SiFirebase, SiXcode, SiAppstore } from "react-icons/si";
import { IoIosApps, IoMdSpeedometer } from "react-icons/io";

export default function IOSAppDevelopment() {
  return (
    <>
      <Header />
    
    <div className="font-sans text-gray-900 bg-white">
      
      {/* Hero - Modern with 3D effect and animated elements */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-indigo-50 to-white"></div>
        
        {/* Animated circles */}
        <motion.div 
          className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-300/20 to-indigo-300/20 blur-xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-purple-300/20 to-pink-300/20 blur-xl"
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0], 
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left mb-12 md:mb-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-indigo-700 uppercase bg-indigo-100 rounded-full"
            >
              iOS App Development
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">Craft Exceptional</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-400">iOS Experiences</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We design and develop stunning iOS applications that deliver seamless experiences and drive business growth.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]">
                Get a Free Consultation
              </button>
              <button className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow hover:border-gray-300 transition-all duration-300">
                View Our Portfolio
              </button>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10 bg-white p-2 rounded-[2.5rem] shadow-2xl border-8 border-white transform rotate-3"
            >
              <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100 aspect-[9/19.5] min-h-[500px]">
                <div className="w-1/2 h-6 mx-auto bg-black rounded-b-xl"></div>
                <div className="flex justify-center items-center h-full">
                  <FaApple className="text-6xl text-gray-800/80" />
                </div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-10 -right-4 bg-white p-3 rounded-2xl shadow-lg z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <SiSwift className="text-2xl text-orange-500" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -left-6 bg-white p-3 rounded-2xl shadow-lg z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <SiXcode className="text-2xl text-blue-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features - Modern card design with subtle hover effects */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-indigo-700 uppercase bg-indigo-100 rounded-full"
            >
              Our Expertise
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our iOS development combines cutting-edge technology with elegant design to create applications that stand out in the App Store.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Native Performance", 
                icon: <IoMdSpeedometer size={28} className="text-indigo-500" />,
                description: "Optimized code that leverages iOS capabilities for lightning-fast performance."
              },
              { 
                title: "Intuitive UX Design", 
                icon: <SiSwift size={28} className="text-indigo-500" />,
                description: "User-centered interfaces that follow Apple's Human Interface Guidelines."
              },
              { 
                title: "App Store Optimization", 
                icon: <SiAppstore size={28} className="text-indigo-500" />,
                description: "Strategic optimization to improve visibility and download rates."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-blue-400 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="mb-6 p-3 inline-block rounded-xl bg-indigo-50">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process - Timeline style */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-indigo-700 uppercase bg-indigo-100 rounded-full"
            >
              Our Process
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">How We Build Your iOS App</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A strategic, step-by-step approach that ensures quality, efficiency, and timely delivery.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 transform -translate-x-1/2"></div>
            
            {["Discovery & Planning", "UI/UX Design", "Development", "Testing & QA", "Deployment"].map((step, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl font-bold text-indigo-600 shadow-md relative z-10">
                    {i + 1}
                  </div>
                </div>
                <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">{step}</h3>
                  <p className="text-gray-600">
                    {i === 0 && "We analyze your requirements and develop a comprehensive strategy."}
                    {i === 1 && "Our designers create intuitive, engaging interfaces that users love."}
                    {i === 2 && "Our Swift experts build performant, scalable, and secure code."}
                    {i === 3 && "Rigorous testing ensures your app works flawlessly across all devices."}
                    {i === 4 && "We handle the App Store submission and launch process for you."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies - Modern grid with hover effects */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-indigo-700 uppercase bg-indigo-100 rounded-full"
            >
              Tech Stack
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Technologies We Leverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use the latest frameworks and tools to build powerful iOS applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: <FaApple size={40} />, name: "iOS SDK", color: "bg-gradient-to-br from-gray-900 to-gray-700" },
              { icon: <SiSwift size={40} />, name: "Swift", color: "bg-gradient-to-br from-orange-500 to-orange-400" },
              { icon: <SiXcode size={40} />, name: "Xcode", color: "bg-gradient-to-br from-blue-500 to-blue-400" },
              { icon: <FaReact size={40} />, name: "React Native", color: "bg-gradient-to-br from-cyan-500 to-cyan-400" },
              { icon: <SiFlutter size={40} />, name: "Flutter", color: "bg-gradient-to-br from-blue-400 to-teal-400" },
              { icon: <SiFirebase size={40} />, name: "Firebase", color: "bg-gradient-to-br from-yellow-500 to-orange-400" },
              { icon: <FaCode size={40} />, name: "Swift UI", color: "bg-gradient-to-br from-indigo-500 to-indigo-400" },
              { icon: <SiAppstore size={40} />, name: "App Store", color: "bg-gradient-to-br from-blue-600 to-blue-500" },
              { icon: <IoIosApps size={40} />, name: "CoreML", color: "bg-gradient-to-br from-purple-500 to-purple-400" },
              { icon: <FaRocket size={40} />, name: "ARKit", color: "bg-gradient-to-br from-green-500 to-green-400" },
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
                <div className={`${tech.color} w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-3 p-4`}>
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern card design */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-indigo-700 uppercase bg-indigo-100 rounded-full"
            >
              Testimonials
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our iOS solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The iOS app they built exceeded our expectations in every way. The interface is intuitive, the performance is flawless, and our users love it.",
                name: "Sarah Johnson",
                position: "CEO, TechStart Inc.",
                rating: 5
              },
              {
                quote: "Working with their iOS development team was a seamless experience. They transformed our concept into a powerful app that has revolutionized our business operations.",
                name: "Michael Chen",
                position: "Product Director, InnovateCo",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
                  <FaQuoteLeft className="text-indigo-400 text-xl" />
                </div>
                <div className="mb-6">
                  {Array(testimonial.rating).fill(0).map((_, idx) => (
                    <FaAward key={idx} className="text-yellow-400 inline-block mr-1" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
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
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Build Your Next iOS App?
          </motion.h2>
          <motion.p 
            className="text-lg mb-10 text-indigo-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Take your business to the next level with a premium, user-friendly iOS application tailored to your unique needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
