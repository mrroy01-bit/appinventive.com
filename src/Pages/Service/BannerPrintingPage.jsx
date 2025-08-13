import React, { useState, useRef } from "react";
import Header from "../../Component/common/Header";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Image as ImageIcon, 
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
  X,
  Layers,
  Monitor,
  Flag
} from "lucide-react";

const bannerSamples = [
  { 
    title: "Event Promotion Banner", 
    img: "https://via.placeholder.com/600x400",
    category: "Events",
    description: "High-impact event banners that attract crowds and drive attendance",
    features: ["Weather resistant", "Vibrant colors", "Custom sizing"],
    size: "6x3 ft standard",
    material: "Vinyl Banner"
  },
  { 
    title: "Sale & Discount Banner", 
    img: "https://via.placeholder.com/600x400",
    category: "Retail",
    description: "Eye-catching sale banners that boost foot traffic and increase sales",
    features: ["Bold graphics", "Promotional text", "Attention-grabbing"],
    size: "4x2 ft standard",
    material: "PVC Banner"
  },
  { 
    title: "Festival Decorative Banner", 
    img: "https://via.placeholder.com/600x400",
    category: "Celebrations",
    description: "Colorful festival banners that create festive atmosphere and joy",
    features: ["Vibrant designs", "Festive themes", "Decorative elements"],
    size: "8x4 ft large",
    material: "Fabric Banner"
  },
  { 
    title: "Corporate Brand Banner", 
    img: "https://via.placeholder.com/600x400",
    category: "Corporate",
    description: "Professional corporate banners for brand visibility and recognition",
    features: ["Brand consistency", "Professional look", "High quality"],
    size: "10x3 ft wide",
    material: "Premium Vinyl"
  },
  { 
    title: "Grand Opening Banner", 
    img: "https://via.placeholder.com/600x400",
    category: "Business",
    description: "Celebratory opening banners that announce new business launches",
    features: ["Grand opening text", "Celebratory design", "High visibility"],
    size: "12x4 ft extra large",
    material: "Heavy Duty Vinyl"
  },
  { 
    title: "Sports Event Banner", 
    img: "https://via.placeholder.com/600x400",
    category: "Sports",
    description: "Dynamic sports banners that energize fans and promote events",
    features: ["Team colors", "Action graphics", "Weather proof"],
    size: "8x6 ft large",
    material: "Mesh Banner"
  }
];

const services = [
  {
    icon: <Flag className="w-8 h-8" />,
    title: "Custom Banner Design",
    description: "Professional banner designs tailored to your brand, event, or promotional needs with unlimited revisions.",
    features: ["Custom graphics", "Brand integration", "Unlimited revisions", "Professional layouts"]
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Digital Banner Printing",
    description: "High-resolution digital printing technology ensuring crisp, vibrant colors that last for years.",
    features: ["4K print quality", "Fade-resistant inks", "Color accuracy", "Sharp details"]
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fast Delivery & Setup",
    description: "Quick printing and reliable delivery service with optional installation and setup assistance.",
    features: ["Same-day printing", "Doorstep delivery", "Installation service", "Express options"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quality Assurance",
    description: "Premium materials and rigorous quality control ensuring durable, professional banners every time.",
    features: ["Material warranty", "Quality guarantee", "Weather resistance", "Professional finish"]
  }
];

const stats = [
  { number: "15,000+", label: "Banners Printed", icon: <Flag className="w-6 h-6" /> },
  { number: "99%", label: "Customer Satisfaction", icon: <Star className="w-6 h-6" /> },
  { number: "Same Day", label: "Express Printing", icon: <Zap className="w-6 h-6" /> },
  { number: "3+ Years", label: "Durability Guarantee", icon: <Shield className="w-6 h-6" /> }
];

const testimonials = [
  {
    name: "Jennifer Smith",
    company: "City Events Management",
    rating: 5,
    text: "Our music festival banners were absolutely stunning! The colors were vibrant and they withstood the entire weekend outdoors perfectly.",
    role: "Event Manager"
  },
  {
    name: "Robert Johnson",
    company: "Johnson's Retail Store",
    rating: 5,
    text: "The sale banners increased our foot traffic by 60%! The quality and quick delivery exceeded our expectations.",
    role: "Store Owner"
  },
  {
    name: "Maria Garcia",
    company: "Garcia Construction",
    rating: 5,
    text: "Professional quality banners at great prices. The installation team was efficient and the banners look fantastic!",
    role: "Marketing Director"
  }
];

const materials = [
  {
    name: "Premium Vinyl",
    description: "High-quality outdoor banner material",
    features: ["3+ year durability", "UV resistant", "Waterproof"],
    bestFor: "Outdoor events, retail signage"
  },
  {
    name: "PVC Banner",
    description: "Versatile indoor/outdoor material",
    features: ["Cost-effective", "Good durability", "Vibrant prints"],
    bestFor: "Short-term promotions"
  },
  {
    name: "Fabric Banner",
    description: "Premium fabric for elegant displays",
    features: ["Wrinkle-resistant", "Rich colors", "Professional finish"],
    bestFor: "Trade shows, indoor events"
  },
  {
    name: "Mesh Banner",
    description: "Wind-resistant perforated material",
    features: ["Wind-through design", "Large format", "Durable"],
    bestFor: "Building wraps, large outdoor"
  }
];

const bannerTypes = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Promotional Banners",
    description: "Drive sales with eye-catching promotional displays"
  },
  {
    icon: <Flag className="w-6 h-6" />,
    title: "Event Banners",
    description: "Announce and promote events with professional banners"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Trade Show Displays",
    description: "Stand out at exhibitions with premium banner displays"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Grand Opening Signs",
    description: "Celebrate new business launches with festive banners"
  }
];

const benefits = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Premium Print Quality",
    description: "Vibrant colors and sharp details that make your message stand out and last for years"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Custom Sizes & Designs",
    description: "Any size, any design - we customize every banner to meet your specific requirements"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Printing & Delivery",
    description: "Same-day printing available with reliable doorstep delivery for urgent projects"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Professional Service",
    description: "Expert design consultation and installation services for a complete banner solution"
  }
];

export default function BannerPrintingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBanner, setSelectedBanner] = useState(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const categories = ["All", "Events", "Retail", "Celebrations", "Corporate", "Business", "Sports"];
  
  const filteredBanners = selectedCategory === "All" 
    ? bannerSamples 
    : bannerSamples.filter(banner => banner.category === selectedCategory);

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
    <div className="bg-gradient-to-br from-orange-50 to-red-50 min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-red-100/30 to-orange-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-yellow-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              className="p-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl shadow-lg"
            >
              <Flag className="w-12 h-12 text-white" />
            </motion.div>
          </div>
          
          <motion.h1
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Banner Printing Services
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Create <span className="font-semibold text-red-600">eye-catching banners</span> for 
            events, promotions, and branding with premium print quality and fast delivery.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Order Custom Banner
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-white transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              View Gallery
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
                    <div className="p-3 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl text-red-600 group-hover:scale-110 transition-transform duration-300">
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

      {/* Banner Types Section */}
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
              Banner <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Types We Print</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From promotional displays to event signage, we create banners for every occasion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bannerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="p-3 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-red-600">
                    {type.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Banner Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete banner solutions from design to delivery with professional quality guaranteed
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
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl text-red-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
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
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Banner Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our diverse collection of professionally printed banners across various industries
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
                      ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
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
              {filteredBanners.map((banner, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedBanner(banner)}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={banner.img}
                      alt={banner.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-2">
                        {banner.category}
                      </span>
                      <p className="text-white text-sm">{banner.material}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {banner.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {banner.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {banner.features.slice(0, 2).map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span className="font-medium">{banner.size}</span>
                      <span className="text-red-600 font-medium">{banner.material}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Materials Section */}
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
              Premium <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Materials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use only the finest quality materials to ensure your banners look professional and last
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
                  <div className="p-3 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl w-fit mx-auto mb-4">
                    <Palette className="w-8 h-8 text-red-600" />
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
                  
                  <div className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                    {material.bestFor}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              What Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses and organizations for quality banner printing and exceptional service
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
                  <p className="text-red-600 font-medium">{testimonial.role}</p>
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
              Why Choose Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Banner Printing</span>
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
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl text-red-600 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
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
      <section className="relative py-20 px-6 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white overflow-hidden">
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
              Get Your Banner Printed Today!
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Premium quality printing with 
              <span className="font-semibold"> fast delivery at your location</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-red-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
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
                Get Free Quote
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Same Day Printing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Free Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Banner Preview */}
      <AnimatePresence>
        {selectedBanner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBanner(null)}
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
                      {selectedBanner.title}
                    </h3>
                    <div className="flex gap-2 mb-2">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        {selectedBanner.category}
                      </span>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {selectedBanner.material}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedBanner(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedBanner.img}
                      alt={selectedBanner.title}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedBanner.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Standard Size:</h4>
                      <p className="text-gray-700">{selectedBanner.size}</p>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
                    <div className="space-y-3 mb-6">
                      {selectedBanner.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                        Order Similar
                      </button>
                      <button className="bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300">
                        Get Quote
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
