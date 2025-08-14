import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../../assest/portfolio/youcomm-cs-study.webp";
import img2 from "../../../assest/portfolio/jobget-cs-study.webp";



const slides = [
  {
    title: "YouCOMM",
    description:
      "A multi-request platform transforming in-hospital patient communication by providing real-time access to medical help.",
    image: img1,
    link: "#",
  },
  {
    title: "JobGet",
    description:
      "Transforming the recruitment landscape with AI by reducing the job search time from months to minutes.",
    image: img2,
    link: "#",
  },
  
];

export default function CaseStudiesSlider() {
return (
    <>
    <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                autoplay={{ delay: 10000 }}
                loop={true}
                spaceBetween={40}
                slidesPerView={1}
                className="relative"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row items-center bg-white gap-4">
                            {/* Left Content */}
                            <div className="w-full md:w-1/2 p-6 md:p-8">
                                <h3 className="text-lg font-bold text-black uppercase tracking-wide">
                                    <span className="border-b-4 border-yellow-400 pb-1">
                                        More case studies
                                    </span>
                                </h3>
                                <h1 className="text-5xl font-bold mt-4 text-gray-900">
                                    {slide.title}
                                </h1>
                                <p className="text-lg mt-6 text-gray-700 leading-relaxed">
                                    {slide.description}
                                </p>
                                <a
                                    href={slide.link}
                                    className="mt-6 inline-block text-yellow-400 font-semibold text-lg hover:underline"
                                >
                                    Read More →
                                </a>
                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full max-w-md h-[300px] object-cover"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div className="mt-24 ">
                    <div className="custom-prev ml-14 absolute bottom-6 left-1/2 transform -translate-x-24 bg-white text-gray-800 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer shadow-lg z-10">
                        ←
                    </div>
                    <div className="custom-next -ml-10 absolute bottom-6 left-1/2 transform translate-x-24 bg-white text-gray-800 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer shadow-lg z-10">
                        →
                    </div>
                </div>
            </Swiper>
        </div>
    </div>


<section 
      className="relative bg-cover bg-center py-24 sm:py-32" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Main Heading */}
        <h2 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          data-aos="fade-up"
        >
          Kickstart Your Dream Project With Us
        </h2>

        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-gray-200 mb-8"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          We have worked with some of the best innovative ideas and brands in the world across industries.
        </p>

        {/* Call-to-Action Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
            Initiate a Partnership
          </button>
        </div>
      </div>
    </section>
    </>
);
}
