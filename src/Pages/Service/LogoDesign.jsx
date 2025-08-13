import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../Component/common/Header";

import { Palette, Sparkles, CheckCircle, Eye, Download, Zap, Award, Users, ArrowUpRight, Star, Target, Lightbulb, Layers } from "lucide-react";

const logoSamples = [
  { 
    title: "Minimal Tech Logo", 
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop", 
    category: "Technology",
    description: "Clean, geometric design for a software startup",
    gradient: "from-blue-500 to-purple-600"
  },
  { 
    title: "Luxury Brand Logo", 
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop", 
    category: "Luxury",
    description: "Elegant typography for premium fashion brand",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    title: "Creative Studio Logo", 
    img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=400&fit=crop", 
    category: "Creative",
    description: "Artistic symbol for design agency",
    gradient: "from-orange-500 to-red-500"
  },
  { 
    title: "Organic Food Brand", 
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop", 
    category: "Food & Beverage",
    description: "Natural elements for eco-friendly brand",
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    title: "Fitness Brand Logo", 
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", 
    category: "Sports & Fitness",
    description: "Dynamic design for fitness company",
    gradient: "from-cyan-500 to-blue-500"
  },
  { 
    title: "Financial Services", 
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop", 
    category: "Finance",
    description: "Trust-building design for fintech startup",
    gradient: "from-indigo-500 to-purple-500"
  },
];

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Brand Identity Design",
    description: "Complete visual identity systems including logos, color palettes, and typography guidelines.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Logo Strategy",
    description: "Strategic logo development based on market research and brand positioning analysis.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Creative Concepts",
    description: "Multiple unique concepts with unlimited revisions until you're completely satisfied.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "File Delivery",
    description: "High-resolution files in all formats: AI, EPS, PNG, JPG, and SVG for any application.",
    gradient: "from-green-500 to-emerald-500"
  },
];

const benefits = [
  { 
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Custom concepts tailored to your brand",
    description: "Every logo is designed from scratch based on your unique brand requirements"
  },
  { 
    icon: <Download className="w-6 h-6" />,
    title: "High-resolution files for print & web",
    description: "Complete file package with vector and raster formats for all applications"
  },
  { 
    icon: <Zap className="w-6 h-6" />,
    title: "Unlimited revisions until satisfaction",
    description: "We work with you until the logo perfectly represents your vision"
  },
  { 
    icon: <Award className="w-6 h-6" />,
    title: "Professional design standards",
    description: "Industry-leading design principles and color theory application"
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    feedback: "The logo perfectly captures our brand essence. Professional, modern, and memorable!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    company: "EcoGreen Foods",
    feedback: "Outstanding work! The organic elements really connect with our sustainable mission.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    company: "Creative Studios",
    feedback: "Exceeded our expectations. The creative process was collaborative and results are amazing!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
];

export default function LogoDesignPage() {
  const [selectedLogo, setSelectedLogo] = useState(null);

  return (
    <>
      <Header />
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-200/30 to-pink-200/30 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/20 blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.4
      }}></div>

      {/* Hero Section */}
      <section className="relative text-center py-32 px-6 max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-xl rounded-full border border-blue-200/50 mb-8">
            <Palette className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Logo Design
            </span>
          </div>
        </motion.div>
        
        <motion.h1
          className="text-7xl md:text-8xl font-bold tracking-tight leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
            Logo
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Design
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting unique, memorable logos that capture your brand's essence and leave a lasting impression.
          Professional design that speaks to your audience and drives business growth.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border border-gray-200/50 shadow-2xl"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-600 text-sm">Logos Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-gray-600 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">48h</div>
            <div className="text-gray-600 text-sm">Average Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Support Available</div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                Our Design Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive logo design solutions tailored to your brand's unique identity and business goals.
            </p>
          </motion.div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/90 backdrop-blur-2xl rounded-3xl p-8 border border-gray-200/50 hover:border-blue-300/50 transition-all duration-500 transform hover:-translate-y-4 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-gray-800 text-xl mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Recent Logo Designs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest logo creations that have helped brands establish their unique identity
            and connect with their target audience.
          </p>
        </motion.div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {logoSamples.map((logo, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-gray-200/50 hover:border-blue-300/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedLogo(logo)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={logo.img}
                  alt={logo.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-xl text-gray-800 rounded-full text-xs font-medium border border-gray-200/50">
                    {logo.category}
                  </span>
                </div>

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="p-4 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/30 transition-colors border border-white/30 transform hover:scale-110">
                    <Eye className="w-8 h-8 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-gray-800">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">
                  {logo.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {logo.description}
                </p>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
                  View Details
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logo Modal */}
      <AnimatePresence>
        {selectedLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedLogo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-gray-200/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedLogo.img}
                  alt={selectedLogo.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedLogo(null)}
                  className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  <ArrowUpRight size={24} className="text-white rotate-45" />
                </button>
                
                {/* Modal Header Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-medium border border-white/20">
                      {selectedLogo.category}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">{selectedLogo.title}</h2>
                </div>
              </div>
              
              <div className="p-8 text-gray-800">
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {selectedLogo.description}
                </p>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg shadow-blue-500/25">
                    <Download className="inline mr-2" size={20} />
                    Download Files
                  </button>
                  <button className="flex-1 border border-blue-300/50 bg-blue-50/80 text-blue-700 py-4 px-8 rounded-xl hover:bg-blue-100/80 transition-colors font-semibold">
                    <Users className="inline mr-2" size={20} />
                    Similar Projects
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Benefits Section */}
      <section className="relative py-20 px-6 bg-white/80 backdrop-blur-xl border-t border-gray-200/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                Why Choose Our Logo Design?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional logo design services that deliver exceptional results and help your brand stand out.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">
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

      {/* Testimonials Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about their logo design experience with us.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 border-t border-blue-200/50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30"></div>
        <div className="relative max-w-7xl mx-auto text-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                Let's Create
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Your Perfect Logo
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Start your branding journey with a logo that speaks for your business.
              Professional design that captures your vision and drives results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-2xl shadow-blue-500/25 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Today
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity"></div>
              </button>
              
              <button
                className="group inline-flex items-center justify-center px-12 py-5 border-2 border-blue-300/50 bg-white/80 backdrop-blur-xl text-blue-700 rounded-2xl font-semibold hover:bg-white/90 hover:border-blue-400 transition-all"
              >
                <span className="flex items-center gap-3">
                  <Eye className="w-5 h-5" />
                  View Portfolio
                </span>
              </button>
            </div>

            {/* Service Icons */}
            <div className="mt-16 flex justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Palette className="w-6 h-6" />
                <span className="text-sm">Brand Identity</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm">Creative Design</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Target className="w-6 h-6" />
                <span className="text-sm">Strategy</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Layers className="w-6 h-6" />
                <span className="text-sm">File Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
