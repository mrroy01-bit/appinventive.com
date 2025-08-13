import React from "react";
import { motion } from "framer-motion";
import Header from "../../Component/common/Header";

import { Search, MapPin, Mic, CheckCircle, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const seoServices = [
  {
    title: "SEO (Search Engine Optimization)",
    icon: <Search className="w-10 h-10 text-blue-500" />,
    desc: "Boost your website rankings on Google & Bing through keyword optimization, content strategy, and backlink building.",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    title: "Local SEO (Geo SEO)",
    icon: <MapPin className="w-10 h-10 text-emerald-500" />,
    desc: "Target local customers by optimizing Google My Business, maps ranking, and geo-targeted keywords.",
    gradient: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    title: "AEO (Answer Engine Optimization)",
    icon: <Mic className="w-10 h-10 text-purple-500" />,
    desc: "Optimize for voice search & AI-powered engines like ChatGPT, Google Bard, and Siri for direct answers.",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const benefits = [
  {
    text: "Higher search engine rankings",
    icon: <TrendingUp className="w-5 h-5 text-blue-500" />
  },
  {
    text: "More targeted organic traffic",
    icon: <Search className="w-5 h-5 text-emerald-500" />
  },
  {
    text: "Better online visibility",
    icon: <Sparkles className="w-5 h-5 text-purple-500" />
  },
  {
    text: "Improved brand credibility",
    icon: <CheckCircle className="w-5 h-5 text-blue-500" />
  },
  {
    text: "Higher ROI compared to paid ads",
    icon: <TrendingUp className="w-5 h-5 text-emerald-500" />
  }
];

export default function SeoServicesPage() {
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
            Premium SEO Solutions
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            SEO Services
          </h1>
          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with our expert SEO, Local SEO, and AEO strategies designed to accelerate your business growth online.
          </p>
          <motion.button
            className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-4"
          >
            <Search className="w-4 h-4 mr-2" />
            Our Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive SEO Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our range of specialized SEO services designed to boost your online presence and drive meaningful results.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {seoServices.map((item, index) => (
            <motion.div
              key={index}
              className={`relative group ${item.bgColor} border ${item.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon container */}
              <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                {item.desc}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-slate-700 text-sm font-medium mb-4"
          >
            Comparison Guide
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            SEO vs Local SEO vs AEO
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Understanding the differences to choose the right strategy for your business goals.
          </p>
        </div>
        
        <motion.div
          className="overflow-hidden rounded-3xl shadow-2xl bg-white border border-slate-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-blue-50">
                  <th className="p-6 text-left font-bold text-slate-900 border-b border-slate-200">Feature</th>
                  <th className="p-6 text-left font-bold text-blue-600 border-b border-slate-200">SEO</th>
                  <th className="p-6 text-left font-bold text-emerald-600 border-b border-slate-200">Local SEO</th>
                  <th className="p-6 text-left font-bold text-purple-600 border-b border-slate-200">AEO</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-slate-900 border-b border-slate-100">Focus Area</td>
                  <td className="p-6 border-b border-slate-100">Global/National search rankings</td>
                  <td className="p-6 border-b border-slate-100">Local business & map rankings</td>
                  <td className="p-6 border-b border-slate-100">Voice & AI-powered search results</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-slate-900 border-b border-slate-100">Best For</td>
                  <td className="p-6 border-b border-slate-100">E-commerce, blogs, national brands</td>
                  <td className="p-6 border-b border-slate-100">Restaurants, salons, service providers</td>
                  <td className="p-6 border-b border-slate-100">Voice queries, Q&A-based searches</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-slate-900 border-b border-slate-100">Main Strategy</td>
                  <td className="p-6 border-b border-slate-100">Keyword research, backlinks, content</td>
                  <td className="p-6 border-b border-slate-100">Google My Business, reviews, citations</td>
                  <td className="p-6 border-b border-slate-100">Structured data, FAQs, conversational content</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-slate-900">Competition</td>
                  <td className="p-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
                      High
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
                      Medium
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                      Low (emerging)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
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
              Why Choose Our SEO Services?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience measurable growth with our proven SEO strategies and data-driven approach.
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
              Ready to Transform Your Business?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Grow Your Business
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get found by the right customers at the right time with our tailored SEO solutions that deliver real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free SEO Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.button
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">500+</div>
                <div className="text-sm text-blue-100">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">98%</div>
                <div className="text-sm text-blue-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">5x</div>
                <div className="text-sm text-blue-100">Average ROI Increase</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
