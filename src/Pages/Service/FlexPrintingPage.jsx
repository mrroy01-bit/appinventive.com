import React, { useState, useRef } from "react";
import Header from "../../Component/common/Header";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Printer, 
  Truck, 
  CheckCircle,
  Star,
  Shield,
  Clock,
  Target,
  Award,
  Zap,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Eye,
  Calendar,
  Package,
  Palette,
  Settings,
  Users,
  Download,
  Play,
  X
} from "lucide-react";

const flexSamples = [
  { 
    title: "Outdoor Advertising Banner", 
    img: "https://via.placeholder.com/600x400",
    category: "Outdoor",
    description: "Weather-resistant outdoor banners for maximum visibility and durability",
    features: ["UV-resistant inks", "Waterproof material", "Wind-resistant design"],
    size: "Custom sizes available",
    material: "Premium vinyl flex"
  },
  { 
    title: "Event Flex Backdrop", 
    img: "https://via.placeholder.com/600x400",
    category: "Events",
    description: "Professional event backdrops that create stunning visual impact",
    features: ["High resolution prints", "Seamless finish", "Easy installation"],
    size: "Up to 20ft wide",
    material: "Fabric flex"
  },
  { 
    title: "Retail Store Signage", 
    img: "https://via.placeholder.com/600x400",
    category: "Retail",
    description: "Eye-catching retail displays that attract customers and boost sales",
    features: ["Vibrant colors", "Brand consistency", "Durable finish"],
    size: "Standard & custom",
    material: "Indoor flex"
  },
  { 
    title: "Trade Show Display", 
    img: "https://via.placeholder.com/600x400",
    category: "Corporate",
    description: "Professional trade show graphics that make your booth stand out",
    features: ["Portable design", "Quick setup", "Professional finish"],
    size: "Modular sizes",
    material: "Lightweight flex"
  },
  { 
    title: "Restaurant Menu Board", 
    img: "https://via.placeholder.com/600x400",
    category: "Food & Beverage",
    description: "Appetizing menu displays that enhance customer dining experience",
    features: ["Food-safe materials", "Easy to clean", "Vibrant food imagery"],
    size: "Standard menu sizes",
    material: "Food-grade flex"
  },
  { 
    title: "Construction Site Banner", 
    img: "https://via.placeholder.com/600x400",
    category: "Construction",
    description: "Heavy-duty banners built to withstand harsh construction environments",
    features: ["Extra durability", "Safety compliance", "Weather resistant"],
    size: "Large format",
    material: "Heavy-duty vinyl"
  }
];

const services = [
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Digital Flex Printing",
    description: "High-resolution digital printing with vibrant colors and sharp details for all your signage needs.",
    features: ["4K resolution printing", "Color accuracy", "Quick turnaround", "Multiple material options"]
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Custom Sizing & Design",
    description: "Tailored solutions with custom dimensions and professional design services to match your requirements.",
    features: ["Any size available", "Design consultation", "Brand guidelines", "Layout optimization"]
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fast Delivery Service",
    description: "Reliable doorstep delivery with same-day and next-day options for urgent printing requirements.",
    features: ["Same-day delivery", "Installation service", "Tracking updates", "Secure packaging"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quality Guarantee",
    description: "Premium materials and rigorous quality control ensure your prints look professional and last longer.",
    features: ["Material warranty", "Color guarantee", "Weather resistance", "Fade protection"]
  }
];

const stats = [
  { number: "10,000+", label: "Prints Delivered", icon: <Package className="w-6 h-6" /> },
  { number: "99.5%", label: "On-Time Delivery", icon: <Clock className="w-6 h-6" /> },
  { number: "24hr", label: "Fastest Turnaround", icon: <Zap className="w-6 h-6" /> },
  { number: "5 Years", label: "Print Durability", icon: <Shield className="w-6 h-6" /> }
];

const testimonials = [
  {
    name: "David Wilson",
    company: "Wilson Construction Ltd",
    rating: 5,
    text: "Outstanding quality and delivery service. Our construction site banners have been up for 6 months and still look brand new!",
    role: "Project Manager"
  },
  {
    name: "Lisa Chen",
    company: "Urban Events Co",
    rating: 5,
    text: "The event backdrops exceeded our expectations. Perfect print quality and the installation team was fantastic!",
    role: "Event Coordinator"
  },
  {
    name: "Mark Rodriguez",
    company: "Taste Bistro",
    rating: 5,
    text: "Our new menu boards look incredible and have definitely improved our customer experience. Highly recommended!",
    role: "Restaurant Owner"
  }
];

const materials = [
  {
    name: "Premium Vinyl Flex",
    description: "Weather-resistant outdoor material",
    features: ["5+ year durability", "UV resistant", "Waterproof"],
    bestFor: "Outdoor signage, banners"
  },
  {
    name: "Fabric Flex",
    description: "High-quality indoor printing material",
    features: ["Vibrant colors", "Smooth finish", "Lightweight"],
    bestFor: "Indoor displays, backdrops"
  },
  {
    name: "Mesh Banner",
    description: "Wind-resistant perforated material",
    features: ["Wind-through design", "Durable", "Lightweight"],
    bestFor: "Large outdoor banners"
  },
  {
    name: "Blockout Banner",
    description: "Double-sided printing capability",
    features: ["No light bleed", "Double-sided", "Premium finish"],
    bestFor: "Premium displays, trade shows"
  }
];

const benefits = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "High-Quality Prints",
    description: "Weather-resistant prints with vibrant colors that maintain their quality for years"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Custom Solutions",
    description: "Any size, any design - we customize every project to meet your specific requirements"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Turnaround",
    description: "Same-day printing and delivery available for urgent projects without compromising quality"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Professional Service",
    description: "Expert consultation, design support, and installation services for a complete solution"
  }
];

export default function FlexPrintingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const categories = ["All", "Outdoor", "Events", "Retail", "Corporate", "Food & Beverage", "Construction"];
  
  const filteredItems = selectedCategory === "All" 
    ? flexSamples 
    : flexSamples.filter(item => item.category === selectedCategory);

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
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg"
            >
              <Printer className="w-12 h-12 text-white" />
            </motion.div>
          </div>
          
          <motion.h1
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Flex Printing & Delivery
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Professional <span className="font-semibold text-blue-600">flex printing solutions</span> with 
            lightning-fast delivery. From outdoor banners to event backdrops - we've got you covered.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Instant Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-white transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              View Samples
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
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
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
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Printing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete flex printing solutions from design consultation to doorstep delivery
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
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
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
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Print Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our diverse portfolio of professional flex printing projects across various industries
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
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
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
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-2">
                        {item.category}
                      </span>
                      <p className="text-white text-sm">{item.material}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.features.slice(0, 2).map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span className="font-medium">{item.size}</span>
                      <span className="text-blue-600 font-medium">{item.material}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Materials Section */}
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
              Premium <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Materials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use only the finest quality materials to ensure your prints look professional and last for years
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl w-fit mx-auto mb-4">
                    <Palette className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{material.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {material.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {material.bestFor}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses across industries for quality printing and reliable service
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
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Printing Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional printing and exceptional service makes
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
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
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
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white overflow-hidden">
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
              Ready to Print & Deliver?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Get your professional flex prints delivered to your doorstep 
              <span className="font-semibold"> faster than ever before</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call for Quote
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Same Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Doorstep Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Item Preview */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
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
                      {selectedItem.title}
                    </h3>
                    <div className="flex gap-2 mb-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {selectedItem.category}
                      </span>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {selectedItem.material}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedItem.img}
                      alt={selectedItem.title}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedItem.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Available Size:</h4>
                      <p className="text-gray-700">{selectedItem.size}</p>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
                    <div className="space-y-3 mb-6">
                      {selectedItem.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                        Get Quote
                      </button>
                      <button className="bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300">
                        Download Sample
                      </button>
                    </div>
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
