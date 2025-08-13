import React from 'react';
import { motion } from 'framer-motion';
import Header from "../../Component/common/Header";

import {
  Search,
  Gauge,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target
} from 'lucide-react';

const sections = [
  {
    icon: <Search className="w-10 h-10 text-blue-500" />,
    title: "Full SEO Crawl Analysis",
    desc: "Identify broken links, duplicate content, and missing meta tags.",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: <Gauge className="w-10 h-10 text-emerald-500" />,
    title: "Performance & Speed Report",
    desc: "Measure page speed, Core Web Vitals, and mobile responsiveness.",
    gradient: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-500" />,
    title: "Security & HTTPS Check",
    desc: "Detect mixed content, outdated SSL, and security vulnerabilities.",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
    title: "Keyword & Traffic Insights",
    desc: "Get ranking positions, keyword opportunities, and competitor data.",
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
];

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: "Improved Rankings",
    desc: "Boost your search rankings with precise fixes"
  },
  {
    icon: <Target className="w-6 h-6 text-emerald-500" />,
    title: "Better User Experience",
    desc: "Improve user experience and loading speed"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    title: "Technical Excellence",
    desc: "Identify technical errors before they harm SEO"
  },
  {
    icon: <ArrowRight className="w-6 h-6 text-orange-500" />,
    title: "Performance Tracking",
    desc: "Track performance over time with monthly audits"
  }
];

export default function WebsiteAuditAnalysis() {
  return (
    <>
      <Header />
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero */}
      <section className="relative text-center py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="relative text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Website Audit & Analysis
        </motion.h1>
        <motion.p
          className="relative text-xl text-blue-100 mt-6 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get a comprehensive analysis of your website's SEO performance, 
          technical health, and optimization opportunities with our detailed audit reports.
        </motion.p>
        
        <motion.div
          className="relative mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Start Your Free Audit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </section>

      {/* Audit Features */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Audit Includes
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 rounded-2xl ${section.bgColor} ${section.borderColor} border backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${section.gradient} mb-4`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Our Audit Service
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-white/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-blue-100">Websites Audited</div>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">24h</div>
              <div className="text-blue-100">Delivery Time</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-12 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Website?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a comprehensive audit report with actionable recommendations to improve your search rankings and user experience.
              </p>
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Get Free Audit Report
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
