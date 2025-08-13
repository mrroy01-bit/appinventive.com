import React, { useState, useRef } from "react";
import Header from "../../Component/common/Header";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  FileText, 
  Printer, 
  CheckCircle, 
  Star, 
  Palette, 
  Zap, 
  Download, 
  Eye, 
  ArrowRight, 
  Users, 
  Target, 
  Trophy,
  Play,
  X,
  Calendar,
  Clock,
  Award
} from "lucide-react";

const flyerSamples = [
  { 
    title: "Event Promotion Flyer", 
    img: "https://via.placeholder.com/600x400", 
    category: "Events",
    description: "High-impact event promotions that drive attendance",
    features: ["Eye-catching visuals", "Event details optimization", "Social media ready"]
  },
  { 
    title: "Corporate Marketing Flyer", 
    img: "https://via.placeholder.com/600x400", 
    category: "Corporate",
    description: "Professional corporate communications and marketing materials",
    features: ["Brand consistency", "Professional layouts", "Multi-format delivery"]
  },
  { 
    title: "Restaurant Menu Flyer", 
    img: "https://via.placeholder.com/600x400", 
    category: "Food & Beverage",
    description: "Appetizing menu designs that increase customer appetite",
    features: ["Food photography", "Menu optimization", "Print & digital versions"]
  },
  { 
    title: "Real Estate Flyer", 
    img: "https://via.placeholder.com/600x400", 
    category: "Real Estate",
    description: "Property showcases that attract potential buyers",
    features: ["Property highlights", "Contact information", "Location maps"]
  },
  { 
    title: "Fitness Club Flyer", 
    img: "https://via.placeholder.com/600x400", 
    category: "Health & Fitness",
    description: "Motivational fitness promotions that inspire action",
    features: ["Dynamic layouts", "Membership offers", "Class schedules"]
  },
  { 
    title: "Educational Workshop Flyer", 
    img: "https://via.placeholder.com/600x400", 
    category: "Education",
    description: "Educational content that informs and engages learners",
    features: ["Clear information", "Learning objectives", "Registration details"]
  }
];

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Custom Design Creation",
    description: "Unique, brand-aligned flyer designs tailored to your specific needs and target audience.",
    features: ["Brand consistency", "Custom illustrations", "Color psychology", "Typography mastery"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Strategic Content Layout",
    description: "Optimized information hierarchy that guides readers through your message effectively.",
    features: ["Visual hierarchy", "Call-to-action placement", "Information flow", "Reader engagement"]
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Print & Digital Ready",
    description: "High-resolution files optimized for both print production and digital distribution.",
    features: ["300 DPI print quality", "CMYK color profiles", "Social media formats", "Web optimization"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality, perfect for urgent marketing campaigns.",
    features: ["24-48 hour delivery", "Rush options available", "Real-time updates", "Priority support"]
  }
];

const stats = [
  { number: "500+", label: "Flyers Designed", icon: <FileText className="w-6 h-6" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
  { number: "24-48h", label: "Average Delivery", icon: <Clock className="w-6 h-6" /> },
  { number: "50+", label: "Industries Served", icon: <Trophy className="w-6 h-6" /> }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "EventPro Marketing",
    rating: 5,
    text: "The flyers they designed for our music festival increased attendance by 40%. The visual impact was incredible!",
    role: "Marketing Director"
  },
  {
    name: "Michael Chen",
    company: "Bella Vista Restaurant",
    rating: 5,
    text: "Our new menu flyers have significantly improved customer ordering. The design perfectly captures our brand essence.",
    role: "Restaurant Owner"
  },
  {
    name: "Amanda Rodriguez",
    company: "FitLife Gym",
    rating: 5,
    text: "Professional, creative, and delivered on time. Our membership drive was our most successful yet!",
    role: "Gym Manager"
  }
];

const benefits = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Eye-Catching Designs",
    description: "Creative designs that grab attention and make your message impossible to ignore"
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "High-Resolution Files",
    description: "Print-ready files delivered in multiple formats for all your distribution needs"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Target Audience Focus",
    description: "Custom designs tailored to resonate with your specific target demographic"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Professional Quality",
    description: "Industry-standard designs that reflect your brand's professionalism and credibility"
  }
];

export default function FlyerDesignPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFlyer, setSelectedFlyer] = useState(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const categories = ["All", "Events", "Corporate", "Food & Beverage", "Real Estate", "Health & Fitness", "Education"];
  
  const filteredFlyers = selectedCategory === "All" 
    ? flyerSamples 
    : flyerSamples.filter(flyer => flyer.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-100/20 to-yellow-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-block mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg"
            >
              <Palette className="w-12 h-12 text-white" />
            </motion.div>
          </div>
          
          <motion.h1
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Flyer Design Services
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transform your marketing with <span className="font-semibold text-blue-600">eye-catching flyers</span> that 
            drive engagement, boost conversions, and make your message impossible to ignore.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-white transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              View Portfolio
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Design Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive flyer design solutions tailored to your specific needs and marketing objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our diverse collection of professionally designed flyers across various industries
            </p>
            
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredFlyers.map((flyer, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedFlyer(flyer)}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={flyer.img}
                      alt={flyer.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-2">
                        {flyer.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {flyer.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {flyer.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {flyer.features.slice(0, 2).map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                      {flyer.features.length > 2 && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          +{flyer.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed their marketing with our flyer designs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Flyer Design</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional design makes for your marketing campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Create Amazing Flyers?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Transform your marketing today with professional flyer designs that 
              <span className="font-semibold"> capture attention and drive results</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <Eye className="w-5 h-5" />
                View More Examples
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24-48h Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Professional Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Flyer Preview */}
      <AnimatePresence>
        {selectedFlyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFlyer(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedFlyer.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {selectedFlyer.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedFlyer(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedFlyer.img}
                      alt={selectedFlyer.title}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedFlyer.description}
                    </p>
                    
                    <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
                    <div className="space-y-3 mb-6">
                      {selectedFlyer.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      Request Similar Design
                    </button>
                  </div>
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
