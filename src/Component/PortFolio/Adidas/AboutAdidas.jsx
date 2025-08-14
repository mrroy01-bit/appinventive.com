import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ballvid from "../../../assest/portfolio/adidas-anim.mp4";
import mobileImg from "../../../assest/portfolio/abt.webp";

const AboutAdidas = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-out-cubic",
      once: false, 
    });
  }, []);

  return (
    <div className="bg-[#121212] text-white">
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-8 flex flex-col gap-12 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="zoom-in-up">
          <h2 className="text-3xl font-bold mb-4">About Adidas</h2>
          <p className="text-gray-300 mb-6">
            Adidas is one of the largest sports merchandise brands across the globe.
            Starting from sportswear apparel to footwear, accessories and equipment,
            Adidas has a broad and diverse product portfolio.
          </p>
          <div className="grid grid-cols-2 gap-y-6 gap-x-8 text-sm">
            <div>
              <p className="font-semibold text-orange-400">Industry</p>
              <p className="text-gray-400">eCommerce</p>
            </div>
            <div>
              <p className="font-semibold text-orange-400">Business Type</p>
              <p className="text-gray-400">Franchise</p>
            </div>
            <div>
              <p className="font-semibold text-orange-400">Services</p>
              <p className="text-gray-400">Design, Development, and Deployment</p>
            </div>
            <div>
              <p className="font-semibold text-orange-400">Build your Idea</p>
              <p className="text-gray-400">Consult our experts</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center justify-center gap-6">
          <div data-aos="fade-right">
            <video autoPlay loop muted className=" w-[60vh] h-[60vh] object-cover">
              <source src={ballvid} type="video/mp4" />
            </video>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <img src={mobileImg} alt="Mobile UI" className="rounded-3xl shadow-lg w-60 h-[90vh] object-cover" />
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutAdidas;
