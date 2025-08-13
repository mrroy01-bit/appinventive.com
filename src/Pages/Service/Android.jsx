import React from "react";
import { motion } from "framer-motion";
import Header from "../../Component/common/Header";

import { FaAndroid, FaJava, FaReact, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { SiKotlin, SiFlutter, SiFirebase } from "react-icons/si";

export default function Android() {
  return (
    <>
      <Header />
    <div className="font-sans text-gray-800 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-700 to-indigo-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/src/assest/ads/banner-5-1.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/30 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Android Development Experts
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Build Exceptional <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                Android Experiences
              </span>
            </motion.h1>
            
            <motion.p
              className="max-w-2xl mx-auto md:mx-0 mb-8 text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We create intuitive, scalable, and high-performance Android applications 
              that elevate your business and deliver exceptional user experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button className="px-8 py-4 rounded-full bg-white text-indigo-700 font-medium shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 group">
                Get a Free Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full bg-transparent border-2 border-white/30 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all duration-300">
                View Our Work
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why Appinventiv
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-violet-700 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The Right Choice for Your Android Development
          </motion.h2>
          
          <motion.p 
            className="max-w-xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We blend technical expertise with creative innovation to deliver Android applications
            that stand out in today's competitive marketplace.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { 
              title: "Expert Developers", 
              description: "Skilled team with years of Android experience",
              icon: <FaAndroid size={32} className="text-white" /> 
            },
            { 
              title: "Scalable Solutions", 
              description: "Applications that grow with your business",
              icon: <SiKotlin size={32} className="text-white" /> 
            },
            { 
              title: "Cost-Effective", 
              description: "Transparent pricing with no hidden costs",
              icon: <SiFlutter size={32} className="text-white" /> 
            },
            { 
              title: "24/7 Support", 
              description: "Dedicated assistance whenever you need it",
              icon: <SiFirebase size={32} className="text-white" /> 
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 group transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-5 left-8 bg-gradient-to-br from-indigo-500 to-violet-600 p-3 rounded-xl shadow-md">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-600 w-0 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our Approach
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-violet-700 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              How We Build World-Class Android Apps
            </motion.h2>
            
            <motion.p 
              className="max-w-xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our proven development process ensures quality, efficiency, and transparency at every stage.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-600 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-10 relative z-10">
              {[
                { 
                  title: "Discovery", 
                  description: "We analyze your requirements and define the project scope",
                  icon: "01"
                },
                { 
                  title: "Design", 
                  description: "Creating intuitive UI/UX designs that align with your brand",
                  icon: "02" 
                },
                { 
                  title: "Development", 
                  description: "Coding with best practices and rigorous testing",
                  icon: "03" 
                },
                { 
                  title: "Deployment", 
                  description: "Launching your app and providing ongoing support",
                  icon: "04" 
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i }}
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-indigo-500 to-violet-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.icon}
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Tech Stack
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-violet-700 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Cutting-Edge Technologies We Use
          </motion.h2>
          
          <motion.p 
            className="max-w-xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We leverage the latest technologies to build robust, scalable Android applications.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { name: "Java", icon: <FaJava size={40} /> },
            { name: "Kotlin", icon: <SiKotlin size={40} /> },
            { name: "Flutter", icon: <SiFlutter size={40} /> },
            { name: "React Native", icon: <FaReact size={40} /> },
            { name: "Firebase", icon: <SiFirebase size={40} /> }
          ].map((tech, i) => (
            <motion.div
              key={i}
              className="relative p-8 rounded-xl bg-white shadow-lg hover:shadow-xl border border-gray-100 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="text-indigo-600 mb-3">{tech.icon}</div>
              <h3 className="font-medium text-center">{tech.name}</h3>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Client Stories
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-violet-700 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              What Our Clients Say
            </motion.h2>
            
            <motion.p 
              className="max-w-xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Don't just take our word for it - hear from our satisfied clients.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Appinventiv transformed our business with their exceptional Android app. Their team's attention to detail and technical expertise exceeded our expectations.",
                author: "Sarah Johnson",
                company: "FinTech Solutions"
              },
              {
                quote: "Working with Appinventiv was a game-changer for our startup. The Android app they built helped us secure funding and grow our user base significantly.",
                author: "Michael Chen",
                company: "TechStart Inc."
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl backdrop-blur-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-indigo-500/10 to-violet-500/10 w-24 h-24 rounded-bl-3xl rounded-tr-2xl -z-10"></div>
                <FaQuoteLeft className="text-indigo-600 opacity-20 text-4xl mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-700"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business with a World-Class Android App?
          </motion.h2>
          
          <motion.p 
            className="text-white/80 mb-8 text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's collaborate to turn your vision into a powerful, user-friendly Android application.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="px-8 py-4 rounded-full bg-white text-indigo-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 mr-4">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 rounded-full bg-transparent border-2 border-white/30 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all duration-300">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}