import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

import AdidasPhoneMockup from "../../../assest/portfolio/brand-design-scrn.webp";
import AdidasPhoneMockup2 from "../../../assest/portfolio/currency-mobile.webp";

const ProjectChallenges = () => {
  const challenges = [
    {
      num: "1",
      title: "Abiding By The Brand's Design System",
      description:
        "Since Adidas is an established name in the retail market, it was important that its extension - irrespective of the platform - abided by its design system. Our team of designers ensured that their logo, color codes, and branding guidelines remained intact during the entire design process.",
    },
    
  ];


  const currencies = [
    { symbol: "د.إ", name: "Arab Emirates Dirham", code: "AED", color: "#E5A00D" },
    { symbol: "€", name: "Euro", code: "EUR", color: "#E86A6A" },
    { symbol: "$", name: "United States Dollar", code: "USD", color: "#61D7A1" },
    { symbol: "A$", name: "Australian Dollar", code: "AUD", color: "#6AD4B4" },
    { symbol: "H$", name: "Hong Kong Dollar", code: "HKD", color: "#E5A00D" },
    { symbol: "N$", name: "New Zealand Dollar", code: "NZD", color: "#E86A6A" },
    { symbol: "C$", name: "Canadian Dollar", code: "CAD", color: "#7AABE7" },
    { symbol: "S$", name: "Singapore Dollar", code: "SGD", color: "#7B86E8" },
  ];


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
    <section className="bg-[#1a1a1a] w-full h-screen text-white  px-6 lg:px-12">
      <div className="max-w-5xl h-[50vw] mx-10">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold mb-5 pt-5 text-left"
        >
          Our Project Challenges
        </h2>

        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 "
          >
            {/* Left Column: Text Content */}
            <div data-aos="fade-right" className="relative flex items-center lg:pt-0">
              {/* Background Number */}
              <span className="absolute top-4 left-0 text-[150px] font-extrabold text-white opacity-5 select-none -z-0">
                {challenge.num}
              </span>

              {/* Foreground Text */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">{challenge.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div data-aos="fade-left" className="flex w-[44vh] h-[90vh] justify-center lg:justify-end">
              <img
                src={AdidasPhoneMockup}
                alt="Adidas App Challenge"
                className="max-w-xs w-full h-full rounded-2xl shadow-2xl shadow-black/50"
              />
            </div>
          </div>
        ))}
      </div>
    </section>



    <section className="bg-[#1a1a1a] text-white py-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20 items-center">
        
        {/* Left Column: Phone Mockup & Currency Slider */}
        <div data-aos="fade-right" className="relative h-[500px] flex items-center justify-center">
          {/* Phone Image as background */}
          <img
            src={AdidasPhoneMockup2}
            alt="Phone displaying Adidas App"
            className="absolute inset-0 mx-auto h-full w-auto object-contain"
          />

          {/* Marquee overlay */}
          <div className="absolute  -translate-y-1/2 w-full">
            <Marquee speed={50} gradient={false}>
              {currencies.map((currency, index) => (
                <div key={index} className="mx-3 flex h-44 w-36 flex-col justify-between rounded-lg bg-[#2d2d2d] p-4 shadow-xl shadow-black/30">
                  <h3 className="text-4xl font-bold" style={{ color: currency.color }}>
                    {currency.symbol}
                  </h3>
                  <div className="border-t border-gray-500 pt-2">
                    <p className="text-sm font-semibold leading-tight">{currency.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{currency.code}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div data-aos="fade-left" className="relative pt-12 lg:pt-0">
          {/* Background Number */}
          <span className="absolute -top-36 left-0 text-[150px] font-extrabold text-white opacity-5 select-none -z-0">
            2
          </span>
          {/* Foreground Text */}
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">
              Multi-Lingual & Multi-Currency Support
            </h3>
            <p className="text-gray-300 leading-relaxed">
              The application was ideated to have a multi-region launch. We used our localization skillset to ensure that the app would be accepted across the different locations of the Middle East both in terms of content and products. Our team also worked on multiple currency integration to make sure that the app would be used across a number of geographies.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProjectChallenges;