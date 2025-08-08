import React, { useEffect } from "react";
import Header from "../Component/common/Header";
import TestimonialSection from "../Component/landingPage/TestimonialSection";
import ServicesSection from "../Component/landingPage/services";
import RoiOfIntelligenceSection from "../Component/landingPage/RoiCard";
import AwardsSection from "../Component/landingPage/AwardsSection";
import IndustrySlider from "../Component/landingPage/IndustrySlider";
import PartnershipLogos from "../Component/landingPage/PartnerShip";
import GlobalPartnerships from "../Component/landingPage/GlobalPartnerShip";
import CenteredCardSlider from "../Component/landingPage/CenterCard";
import TimelineSlider from "../Component/landingPage/TimelineSlider";
import TestimonialSlider from "../Component/landingPage/TestimonialSlider";
import AIAdvisory from "../Component/landingPage/AIAdvisory";
import ExpertForm from "../Component/landingPage/ExpertForm";
import TechTab from "../Component/landingPage/TechTab";
import StackedCards from "../Component/landingPage/StackedCards";
import Locations from "../Component/landingPage/Locations";
import Footer from "../Component/common/Footer";
import ScrollToTop from "../Component/common/ScrollToTop";
import SmoothScrollLink from "../Component/common/SmoothScrollLink";
import logo1 from "../assest/common/logo1.svg";
import logo2 from "../assest/common/logo2.svg";
import logo3 from "../assest/common/logo3.png";
import logo4 from "../assest/common/logo4.svg";
import logo5 from "../assest/common/logo5.svg";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const LandingPage = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  
  const { scrollTo } = useSmoothScroll({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  useEffect(() => {
    // Handle anchor links for smooth scrolling
    const handleAnchorLinks = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        setTimeout(() => {
          scrollTo(`#${id}`);
        }, 100);
      }
    };

    // Call once on mount to handle initial URL with hash
    handleAnchorLinks();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleAnchorLinks);

    // Cleanup function
    return () => {
      window.removeEventListener('hashchange', handleAnchorLinks);
    };
  }, [scrollTo]);

  return (
    <>
      <Header />
      <main>
        <div className="relative w-full h-[90vh] overflow-hidden home">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source
              src={require("../assest/common/home-video-new.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="home-content text-white mt-[25vh] ml-16">
            <h1 className="font-medium text-5xl">
              Engineering Global Digital Disruption <br />
              with AI-Native Solutions
            </h1>
            <span className="mt-5 text-xl font-normal block">
              We are a Deloitte Technology Fast 50 company and a Clutch Global
              Award 2025 winner <br />
              for unmatched customer excellence...
            </span>
            <div className="mt-10">
              <SmoothScrollLink
                to="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4 border-2 border-transparent hover:bg-transparent hover:border-white transition-colors duration-200 inline-block"
              >
                Consult Our Experts
              </SmoothScrollLink>
            </div>
          </div>
        </div>

        <section id="company-logos" className="bg-black py-10">
          {/* Use mx-auto to center the container and overflow-x-auto for responsiveness */}
          <div className="container mx-auto flex items-center justify-center overflow-x-auto">
            {logos.map((logo, i) => (
              <div
                key={i}
                // Use flex-shrink-0 to prevent logos from squishing on small screens.
                // Padding on each item controls the spacing instead of a gap.
                className="flex-shrink-0 px-12 py-4 border-r border-zinc-800 last:border-r-0"
              >
                <img
                  src={logo}
                  alt={`Partner Logo ${i + 1}`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black text-white py-20 px-4" id="impact-stats">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            {/* Left Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Transforming Businesses with AI-Driven Technology That Transcends
              Geographies and Platforms
            </h2>

            {/* Right Paragraph */}
            <p className="text-gray-300 text-base leading-relaxed">
              Appinventiv is one of the world’s largest AI-led IT service
              providers helping companies redefine their digital possibilities
              for nearly a decade now. With our team of 1600+ tech evangelists,
              we are building the digital infrastructure of our clients using
              intelligent, AI-native solutions, positioning them to be the
              market leaders of their respective industries.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-700">
            {[
              {
                number: "35+",
                title: "Industries Mastered",
                desc: "With our agility & engineering expertise, we equip your critical business functions with customized tech, and expand digital capabilities.",
              },
              {
                number: "1600+",
                title: "Tech Evangelists",
                desc: "We are a dynamic team of certified cloud architects, data scientists, and AI/ML specialists passionately driven to achieve the best results for our clients.",
              },
              {
                number: "150+",
                title: "AI Models Deployed",
                desc: "From predictive analytics to generative AI, we’ve implemented intelligent models that drive measurable ROI.",
              },
              {
                number: "3000+",
                title: "Solutions Designed And Delivered",
                desc: "Thousands of successful, futuristic, and AI-augmented solutions that have helped businesses grow and scale.",
              },
              {
                number: "500+",
                title: "Legacy Processes Transformed",
                desc: "We help businesses achieve transformation goals by integrating advanced technologies into legacy systems.",
              },
              {
                number: "05+",
                title: "Strategic Federal Partnerships",
                desc: "We drive collaborative initiatives that address critical challenges and deliver impactful solutions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border-b border-gray-700 lg:border-b-0 lg:border-r last:border-r-0"
              >
                <h3 className="text-3xl text-blue-500 font-bold mb-2">
                  {item.number}
                </h3>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <StackedCards />
        <TestimonialSection />

        <ServicesSection />

        <RoiOfIntelligenceSection />
        <TimelineSlider />
        <AIAdvisory />
        <GlobalPartnerships />
        <AwardsSection />
        <TestimonialSlider />
        <IndustrySlider />
        <TechTab />
        <PartnershipLogos />

        <CenteredCardSlider />
        <ExpertForm />

        <Locations />
        <Footer />
      </main>
      <ScrollToTop threshold={400} position="right" />
    </>
  );
};

export default LandingPage;
