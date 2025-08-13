import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../Component/common/Header";

const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    desc: "Complete e-commerce solution with seamless shopping experience, secure payment gateway integration, real-time inventory management, and AI-powered product recommendations.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase"],
    category: "Mobile App Development",
    duration: "4 months",
    client: "RetailTech Solutions",
    results: ["300% increase in mobile sales", "50% reduction in cart abandonment", "4.8/5 app store rating"],
    link: "#",
    githubLink: "#",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    desc: "Modern, responsive corporate website with advanced SEO optimization, content management system, and lead generation tools that dramatically improved online presence.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tech: ["React", "Next.js", "Tailwind CSS", "Headless CMS", "Google Analytics"],
    category: "Website Development",
    duration: "3 months",
    client: "GlobalCorp Industries",
    results: ["400% increase in organic traffic", "200% improvement in lead generation", "90% faster page load speeds"],
    link: "#",
    githubLink: "#",
    liveDemo: "#",
  },
  {
    id: 3,
    title: "Brand Identity & Logo Design",
    desc: "Complete brand overhaul including logo design, color palette, typography system, brand guidelines, and marketing collateral for a modern fintech startup.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tech: ["Adobe Illustrator", "Figma", "Photoshop", "After Effects", "InDesign"],
    category: "Graphics Design",
    duration: "2 months",
    client: "FinTech Innovations",
    results: ["Brand recognition increased by 250%", "40% higher customer engagement", "Featured in 5 design publications"],
    link: "#",
    githubLink: "#",
    liveDemo: "#",
  },
  {
    id: 4,
    title: "iOS Banking Application",
    desc: "Secure banking application with biometric authentication, real-time transactions, budget tracking, and AI-powered financial insights for enhanced user experience.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tech: ["Swift", "Core Data", "Touch ID", "Face ID", "Apple Pay"],
    category: "Mobile App Development",
    duration: "6 months",
    client: "SecureBank Digital",
    results: ["1M+ downloads in 6 months", "99.9% uptime", "Bank-grade security compliance"],
    link: "#",
    githubLink: "#",
    liveDemo: "#",
  },
  {
    id: 5,
    title: "SEO & Digital Marketing Campaign",
    desc: "Comprehensive SEO strategy with content marketing, technical optimization, local SEO, and PPC campaigns that transformed online visibility and business growth.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tech: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads", "Social Media APIs"],
    category: "SEO & Digital Marketing",
    duration: "8 months ongoing",
    client: "GrowthTech Startup",
    results: ["500% increase in organic traffic", "Top 3 ranking for 50+ keywords", "250% increase in qualified leads"],
    link: "#",
    githubLink: "#",
    liveDemo: "#",
  },
  {
    id: 6,
    title: "Print & Flex Advertising Campaign",
    desc: "Large-scale advertising campaign including flex printing, banner design, pamphlet creation, and strategic placement across multiple locations for maximum brand exposure.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tech: ["Adobe Creative Suite", "Large Format Printing", "Vinyl Graphics", "Digital Printing"],
    category: "Advertising & Printing",
    duration: "3 months",
    client: "MegaMart Retail Chain",
    results: ["30% increase in foot traffic", "Coverage across 50+ locations", "15% boost in brand awareness"],
    link: "#",
    githubLink: "#",
    liveDemo: "#",
  },
  {
    id: 7,
    title: "Video Production & Editing",
    desc: "Professional video content creation including promotional videos, product demos, social media content, and corporate presentations with high-quality editing and motion graphics.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tech: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Luma Fusion"],
    category: "Graphics Design",
    duration: "2 months",
    client: "TechLaunch Startup",
    results: ["2M+ video views", "300% increase in social engagement", "40% boost in conversion rates"],
    link: "#",
    githubLink: "#",
    liveDemo: "#",
  },
  {
    id: 8,
    title: "Android Healthcare App",
    desc: "Comprehensive healthcare application with telemedicine features, appointment booking, health tracking, prescription management, and secure patient data handling.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tech: ["Kotlin", "Firebase", "Google Fit API", "HIPAA Compliance", "ML Kit"],
    category: "Mobile App Development",
    duration: "5 months",
    client: "HealthCare Plus",
    results: ["500K+ active users", "95% patient satisfaction", "HIPAA compliant security"],
    link: "#",
    githubLink: "#",
    liveDemo: "#",
  },
];

const categories = ["All", "Mobile App Development", "Website Development", "Graphics Design", "SEO & Digital Marketing", "Advertising & Printing"];

const serviceStats = [
  { number: "150+", label: "Projects Completed", icon: "🚀" },
  { number: "100+", label: "Happy Clients", icon: "😊" },
  { number: "8+", label: "Years Experience", icon: "⭐" },
  { number: "25+", label: "Team Members", icon: "👥" },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-blue-200 uppercase bg-white/10 rounded-full backdrop-blur-sm">
                Appinventiv Portfolio
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Success Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Transforming businesses through innovative digital solutions. From mobile apps to comprehensive 
                digital marketing campaigns, we deliver excellence across all service verticals.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-200">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Award-Winning Agency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                  <span>Global Presence</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {serviceStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button className="bg-white/90 hover:bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                          View Details
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                          Live Demo
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-sm text-gray-500">{project.duration}</div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {project.desc}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Client: {project.client}</div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full font-medium border border-blue-100"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600 font-medium">Key Results:</div>
                        {project.results.slice(0, 2).map((result, i) => (
                          <div key={i} className="text-xs text-green-600 flex items-center">
                            <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                      >
                        View Details →
                      </button>
                      <div className="flex space-x-3">
                        <a
                          href={project.githubLink}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="View Code"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                        <a
                          href={project.liveDemo}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="Live Demo"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Services Overview */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Complete Service Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to deployment, we provide end-to-end digital solutions that drive business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📱",
                  title: "Mobile App Development",
                  desc: "iOS & Android apps with cutting-edge features",
                  projects: "25+ Apps Built"
                },
                {
                  icon: "🌐",
                  title: "Website Development",
                  desc: "Responsive, SEO-optimized websites",
                  projects: "50+ Websites Delivered"
                },
                {
                  icon: "🎨",
                  title: "Graphics & Video Design",
                  desc: "Brand identity, logos, and video production",
                  projects: "100+ Designs Created"
                },
                {
                  icon: "📈",
                  title: "SEO & Digital Marketing",
                  desc: "Data-driven growth strategies",
                  projects: "30+ Campaigns Launched"
                },
                {
                  icon: "🖨️",
                  title: "Advertising & Printing",
                  desc: "Large format printing and banner solutions",
                  projects: "200+ Print Jobs"
                },
                {
                  icon: "💼",
                  title: "Portfolio Development",
                  desc: "Professional portfolio websites",
                  projects: "40+ Portfolios Built"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <div className="text-sm text-blue-600 font-medium">{service.projects}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 100+ successful clients who have transformed their digital presence with Appinventiv. 
                Let's discuss how we can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  View All Services
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-8 text-blue-200">
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✉️</span>
                  <span>hello@appinventiv.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-gray-800">{selectedProject.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
                      <p className="text-gray-600">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Client</h4>
                      <p className="text-gray-600">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedProject.tech.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Project Description</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.desc}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Results & Impact</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.results.map((result, i) => (
                        <div key={i} className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveDemo}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      View Case Study
                    </a>
                    <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                      Get Similar Solution
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
