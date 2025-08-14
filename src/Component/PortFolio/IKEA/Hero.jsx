import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import banner from "../../../assest/portfolio/ikea-banner-img.webp";
import Ikearoom from "../../../assest/portfolio/ikea-detail-img.webp";

// SVG Icon for Development
const DevelopmentIcon = () => (
  <svg
    className="w-8 h-8 text-gray-800"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

// SVG Icon for Deployment
const DeploymentIcon = () => (
  <svg
    className="w-8 h-8 text-gray-800"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <section className="bg-yellow-400 overflow-hidden">
        <div className="max-w-7xl flex items-center h-screen mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column: Text Content */}
            <div
              className="w-[140vh]  text-center md:text-left p-8 lg:p-16"
              data-aos="fade-right"
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
                ERP Solution
                <br />
                For World's Largest
                <br />
                Furniture Retailer - IKEA
              </h1>
              <a
                href="#"
                className="inline-block mt-8 text-blue-900 font-semibold border-b-2 border-blue-900 hover:text-blue-700 hover:border-blue-700 transition-colors"
              >
                Consult with ERP Expert →
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="w-[70vw] h-80  md:w-[50vw]" data-aos="fade-left">
              <img
                src={banner}
                alt="Modern light grey sofa on a yellow background"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/800x600/ffc107/1e3a8a?text=IKEA+Sofa";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column: Image with Overlays */}
            <div
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                {/* Yellow accent bars */}
                <div className="absolute top-1/4  w-32 h-1/2 bg-yellow-400 "></div>
                <div className="absolute top-1/4 -right-1 w-32 h-1/2 bg-yellow-400 "></div>

                {/* Image Container */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={Ikearoom}
                    alt="Modern living room with IKEA furniture"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/500x600/ffffff/000000?text=IKEA+Room";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Project Details */}
            <div
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {/* Industry */}
                <div >
                  <p className="text-sm text-gray-500 mb-1">Industry</p>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Retail
                  </h4>
                </div>

                {/* Services */}
                <div >
                  <p className="text-sm text-gray-500 mb-1">Services</p>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Development and Deployment
                  </h4>
                </div>

                {/* Business Type */}
                <div >
                  <p className="text-sm text-gray-500 mb-1">Business Type</p>
                  <h4 className="text-lg font-semibold text-yellow-500">
                    Enterprise
                  </h4>
                </div>

                {/* Build your idea */}
                <div data-aos="fade-left" data-aos-delay="500">
                  <p className="text-sm text-gray-500 mb-1">Build your idea</p>
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-800 hover:text-yellow-500 transition-colors"
                  >
                    Consult our experts →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-3/5 p-8 sm:p-12 lg:p-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                About
              </h3>
              <p className="text-gray-600 text-base mb-8">
                Built for IKEA stores, the ERP solution helps walk-in customers
                go through the store's product catalogs right from the
                store-erected tablet panel. The two-fold solution has been used
                by IKEA for giving customers an in-store catalog solution on one
                hand and on the other hand using their personal information as a
                promotion asset.
              </p>

              <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Easing in-store Onboarding of World's Largest Furnishing Chain
              </h2>

              <p className="text-gray-600 text-base mb-4">
                For a brand as massive as IKEA, customer onboarding is always a
                challenge. Assigning a sales representative to every customer is
                difficult considering the heavy footfall, and even when
                customers get a guiding hand, it remains a challenge for the
                reps to be updated on the product availability in stocks and the
                applicable discounts and offers.
              </p>
              <p className="text-gray-600 text-base mb-4">
                Additionally, multi-national B2C brands constantly struggle with
                gathering customers' information - email addresses, products
                they are interested in, etc. for marketing purposes.
              </p>
              <p className="text-gray-600 text-base">
                Noting the issues, there was a need for an ERP solution that
                would do both - give users the real-time status of products'
                availability, and collect their information to then use as
                marketing assets.
              </p>
            </div>

            {/* Right Column: Our Role */}
            <div className="w-full lg:w-2/5 bg-yellow-400 p-8 sm:p-12 lg:p-16 flex items-center justify-center relative">
              <h3 className="absolute  text-left text-8xl font-extrabold text-yellow-500 opacity-50 select-none">
                Our <br /> Role
              </h3>
              <div className="relative">
                <h2 className="text-4xl font-bold text-gray-800 mb-10 border-b-4 border-gray-800 inline-block">
                  Our Role
                </h2>
                <ul className="space-y-10">
                  <li className="flex items-center">
                    <div className="flex items-center justify-center mr-6">
                      <span className="text-6xl font-bold text-gray-800 opacity-50 mr-4">
                        1
                      </span>
                      <DevelopmentIcon />
                    </div>
                    <span className="text-2xl font-semibold text-gray-800">
                      Development
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex items-center justify-center mr-6">
                      <span className="text-6xl font-bold text-gray-800 opacity-50 mr-4">
                        2
                      </span>
                      <DeploymentIcon />
                    </div>
                    <span className="text-2xl font-semibold text-gray-800">
                      Deployment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
