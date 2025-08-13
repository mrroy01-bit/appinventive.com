import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../Component/common/Header";

import { Scissors, Sparkles, Play, Clock, Camera, Film, Monitor, Zap, ArrowUpRight, Award, Users, Eye } from "lucide-react";

const services = [
  { 
    icon: <Scissors className="w-8 h-8" />, 
    title: "Cinematic Editing", 
    desc: "AI-powered editing with precision cuts and seamless transitions for professional storytelling.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20"
  },
  { 
    icon: <Sparkles className="w-8 h-8" />, 
    title: "Advanced Color Grading", 
    desc: "HDR color correction with cinema-grade LUTs and custom color science for breathtaking visuals.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    icon: <Clock className="w-8 h-8" />, 
    title: "Real-time Collaboration", 
    desc: "Cloud-based editing workflow with instant feedback and lightning-fast delivery timelines.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20"
  },
  { 
    icon: <Camera className="w-8 h-8" />, 
    title: "Motion Graphics 2.0", 
    desc: "3D animations, particle systems, and custom visual effects that bring your vision to life.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/20 to-red-500/20"
  },
  { 
    icon: <Film className="w-8 h-8" />, 
    title: "8K Post Production", 
    desc: "Ultra-high resolution editing with professional audio mixing and surround sound mastering.",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/20 to-purple-500/20"
  },
  { 
    icon: <Monitor className="w-8 h-8" />, 
    title: "Multi-Platform Delivery", 
    desc: "Optimized exports for web, mobile, cinema, and broadcast with format-specific enhancements.",
    gradient: "from-teal-500 to-blue-500",
    bgGradient: "from-teal-500/20 to-blue-500/20"
  },
];

const portfolioVideos = [
  { 
    id: 1,
    title: "Tech Product Launch", 
    category: "Commercial",
    duration: "2:30",
    views: "2.5M",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=450&fit=crop",
    url: "#",
    description: "Cinematic product reveal with 3D animations and motion graphics for a major tech launch.",
    tags: ["3D Animation", "Motion Graphics", "Commercial"]
  },
  { 
    id: 2,
    title: "AI Startup Documentary", 
    category: "Documentary",
    duration: "15:45",
    views: "850K",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    url: "#",
    description: "Behind-the-scenes documentary showcasing the journey of an AI startup from concept to IPO.",
    tags: ["Documentary", "Color Grading", "Interviews"]
  },
  { 
    id: 3,
    title: "Music Video - Electronic", 
    category: "Music Video",
    duration: "3:45",
    views: "1.8M",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop",
    url: "#",
    description: "Futuristic music video with synchronized visual effects and particle systems.",
    tags: ["Music Video", "VFX", "Sync Editing"]
  },
  { 
    id: 4,
    title: "Corporate Brand Film", 
    category: "Branding",
    duration: "4:20",
    views: "420K",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop",
    url: "#",
    description: "Elegant brand story combining live action with sophisticated motion design.",
    tags: ["Branding", "Animation", "Corporate"]
  },
  { 
    id: 5,
    title: "Gaming Tournament Highlights", 
    category: "Gaming",
    duration: "8:15",
    views: "3.2M",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
    url: "#",
    description: "High-energy tournament recap with dynamic transitions and esports graphics.",
    tags: ["Gaming", "Sports Graphics", "Fast Cuts"]
  },
  { 
    id: 6,
    title: "Fashion Campaign", 
    category: "Fashion",
    duration: "1:30",
    views: "650K",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=450&fit=crop",
    url: "#",
    description: "Luxury fashion campaign with cinematic color grading and elegant transitions.",
    tags: ["Fashion", "Luxury", "Color Grading"]
  }
];

const categories = ["All", "Commercial", "Documentary", "Music Video", "Branding", "Gaming", "Fashion"];

export default function VideoEditingServices() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = selectedCategory === "All" 
    ? portfolioVideos 
    : portfolioVideos.filter(video => video.category === selectedCategory);

  return (
    <>
      <Header />
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen text-gray-900 relative overflow-hidden">
      
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
      <section className="relative py-32 text-center max-w-6xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-xl rounded-full border border-blue-200/50 mb-8">
            <Film className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cinematic Video Production
            </span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl font-bold tracking-tight leading-tight mb-8"
        >
          <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
            Video
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Mastery
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
        >
          Transforming raw footage into stunning visual narratives with cutting-edge editing techniques,
          AI-powered workflows, and cinematic excellence that captivates audiences worldwide.
        </motion.p>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative px-8 py-3 rounded-2xl font-medium transition-all duration-300 overflow-hidden ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25 scale-105"
                  : "bg-gray-100/80 backdrop-blur-xl text-gray-700 hover:bg-gray-200/80 hover:text-gray-900 border border-gray-200/50"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {selectedCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl"></div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border border-gray-200/50 shadow-2xl"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-600 text-sm">Videos Produced</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">15M+</div>
            <div className="text-gray-600 text-sm">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-gray-600 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">24h</div>
            <div className="text-gray-600 text-sm">Avg Turnaround</div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Services Section */}
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
                Our Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to delivery, we leverage cutting-edge technology and creative excellence
              to produce videos that drive engagement and deliver results.
            </p>
          </motion.div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  {service.desc}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Video Portfolio */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest video productions that have captivated millions of viewers
            and delivered exceptional results for our clients.
          </p>
        </motion.div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-gray-200/50 hover:border-blue-300/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Video Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-xl text-white rounded-full text-xs font-medium border border-white/30">
                    {video.category}
                  </span>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-xl text-white rounded-full text-xs font-medium flex items-center gap-1 border border-white/20">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="p-4 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/30 transition-colors border border-white/30 transform hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </button>
                </div>

                {/* Views Count */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-xl text-white rounded-full text-xs font-medium flex items-center gap-1 border border-white/20">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </span>
                </div>

                {/* Year */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-xl text-white rounded-full text-xs font-medium border border-white/30">
                    {video.year}
                  </span>
                </div>
              </div>

              {/* Video Details */}
              <div className="p-6 text-gray-800">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {video.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100/80 text-blue-700 text-xs rounded-md font-medium border border-blue-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => setSelectedVideo(video)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  Watch Video
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedVideo(null)}
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
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  <ArrowUpRight size={24} className="text-white rotate-45" />
                </button>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-6 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/30 transition-colors border border-white/30">
                    <Play className="w-12 h-12 text-white fill-current" />
                  </button>
                </div>
                
                {/* Modal Header Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-medium border border-white/20">
                      {selectedVideo.category}
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-medium border border-white/20">
                      {selectedVideo.duration}
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-medium border border-white/20">
                      {selectedVideo.views} views
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">{selectedVideo.title}</h2>
                </div>
              </div>
              
              <div className="p-8 text-gray-800">
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {selectedVideo.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                      <Film className="w-5 h-5 text-blue-600" />
                      Video Details
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium text-gray-800">{selectedVideo.category}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium text-gray-800">{selectedVideo.duration}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <span className="text-gray-600">Year:</span>
                        <span className="font-medium text-gray-800">{selectedVideo.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-blue-600" />
                      Performance
                    </h3>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-100/80 to-purple-100/80 rounded-xl border border-blue-200/50">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {selectedVideo.views}
                      </div>
                      <div className="text-sm text-gray-600">Total Views</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    Production Techniques
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedVideo.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700 rounded-xl font-medium border border-blue-200/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg shadow-blue-500/25">
                    <Play className="inline mr-2" size={20} />
                    Watch Full Video
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
                Ready to Create
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Your Masterpiece?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's transform your vision into a compelling video that captivates your audience
              and drives real results. From concept to final cut, we're your creative partners.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-2xl shadow-blue-500/25 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity"></div>
              </button>
              
              <button
                className="group inline-flex items-center justify-center px-12 py-5 border-2 border-blue-300/50 bg-white/80 backdrop-blur-xl text-blue-700 rounded-2xl font-semibold hover:bg-white/90 hover:border-blue-400 transition-all"
              >
                <span className="flex items-center gap-3">
                  <Film className="w-5 h-5" />
                  View Our Reel
                </span>
              </button>
            </div>

            {/* Service Icons */}
            <div className="mt-16 flex justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Film className="w-6 h-6" />
                <span className="text-sm">Cinematography</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Scissors className="w-6 h-6" />
                <span className="text-sm">Editing</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm">VFX</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6" />
                <span className="text-sm">Animation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
