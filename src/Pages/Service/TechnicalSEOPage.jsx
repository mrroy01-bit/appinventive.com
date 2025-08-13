import React from "react";
import { motion } from "framer-motion";
import Header from "../../Component/common/Header";

import { Search, Globe, Cpu, CheckCircle, Code, ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: <Search className="w-10 h-10 text-blue-500" />,
    title: "Advanced SEO Audit",
    desc: "In-depth analysis of your website's structure, speed, and indexing.",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: <Cpu className="w-10 h-10 text-emerald-500" />,
    title: "Core Web Vitals Optimization",
    desc: "Improve LCP, FID, and CLS for a smoother user experience.",
    gradient: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    icon: <Globe className="w-10 h-10 text-purple-500" />,
    title: "International & GEO SEO",
    desc: "Optimize for multiple regions and languages using hreflang tags.",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: <Code className="w-10 h-10 text-orange-500" />,
    title: "Structured Data & Schema",
    desc: "Enhance search visibility with rich snippets and markup.",
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
];

const benefits = [
  {
    text: "Faster website loading times",
    icon: <Zap className="w-5 h-5 text-yellow-500" />
  },
  {
    text: "Better search engine crawling and indexing",
    icon: <Search className="w-5 h-5 text-blue-500" />
  },
  {
    text: "Improved mobile performance",
    icon: <Cpu className="w-5 h-5 text-emerald-500" />
  },
  {
    text: "Higher rankings on Google & Bing",
    icon: <TrendingUp className="w-5 h-5 text-purple-500" />
  },
  {
    text: "Better local and voice search optimization",
    icon: <Globe className="w-5 h-5 text-orange-500" />
  }
];

export default function TechnicalSEOPage() {
  return (
    <>
      <Header />
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 max-w-6xl mx-auto overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-50"></div>
        
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Advanced Technical Solutions
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Technical SEO Services
          </h1>
          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Boost your website's performance, crawlability, and search visibility with expert technical SEO optimization and cutting-edge strategies.
          </p>
          <motion.button
            className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Optimization
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-4"
          >
            <Code className="w-4 h-4 mr-2" />
            Technical Solutions
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Technical SEO Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Advanced technical optimizations to improve your website's foundation and search engine performance.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className={`relative group ${item.bgColor} border ${item.borderColor} rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon container */}
              <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-800">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 text-sm">
                {item.desc}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-white rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-purple-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white rounded-full text-slate-600 text-sm font-medium mb-4 shadow-sm"
            >
              <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
              Key Benefits
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Our Technical SEO?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience enhanced performance and visibility with our comprehensive technical SEO optimizations.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.text}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Optimize Your Website?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Optimize Your Website Today
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let us handle the technical side so you can focus on growing your business with improved performance and rankings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.button
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">99%</div>
                <div className="text-sm text-blue-100">Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">45%</div>
                <div className="text-sm text-blue-100">Faster Load Times</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">2.5x</div>
                <div className="text-sm text-blue-100">Better Search Rankings</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
