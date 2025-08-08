import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../../css/component/testimonial-slider.css";

import { Navigation } from "swiper/modules";

import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "We chose Appinventiv to build our financial literacy and money management app from start to finish. From the first call, we were very impressed with Appinventiv's professionalism, expertise, and commitment to delivering top-notch results. Our app is now live and the feedback that we are receiving from users is fantastic.",
    author: {
      name: "Simon Wing",
      title: "Co-Founder & CEO",
      company: "Edfundo",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder
    },
    companyLogoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png", // Placeholder
  },
  {
    quote:
      "We approached Appinventiv with the idea of creating a platform that would integrate with the busy lifestyles of millennials, giving our brand a competitive edge. The Appinventiv team provided end-to-end support with their domain expertise. The end results exceeded our expectations, creating new revenue for different brands.",
    author: {
      name: "Neeraj Tiwari",
      title: "Director - Digital Products",
      company: "Americana Group",
      avatarUrl: "https://randomuser.me/api/portraits/men/33.jpg", // Placeholder
    },
    companyLogoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // Placeholder
  },
  {
    quote:
      "The job search cycle situation required us to first understand what we were doing wrong. The team simplified for the best results.",
    author: {
      name: "Jane Doe",
      title: "Product Manager",
      company: "JobGet",
      avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg", // Placeholder
    },
    companyLogoUrl: "https://cdn.worldvectorlogo.com/logos/jobget.svg", // Placeholder
  },
];

// --- The Main Component ---
const TestimonialSlider = () => {
  return (
    <div className="bg-black text-white w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 mb-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight pl-10">
              First-Hand Opinions Of Clients On <br /> Their Partnership Experience
            </h2>
            <p className="text-lg text-zinc-400 mt-4 pl-10">
              We are a software and mobile application development company that
              ensures its expertise extends to offer a seamlessly productive and
              growth-oriented partnership to its clients.
            </p>
          </div>
          {/* Navigation Buttons */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <button className="custom-swiper-button-prev p-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors disabled:opacity-50">
              <ArrowLeft size={20} />
            </button>
            <button className="custom-swiper-button-next p-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors disabled:opacity-50">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="-mx-4">
          <Swiper
            modules={[Navigation]}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            className="!px-4" 
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!w-[90vh] md:!w-[60vw] ">
                
                <div className="testimonial-card bg-zinc-900 rounded-xl p-8 h-[60vh] flex flex-col justify-between transition-all duration-300 opacity-50 border border-transparent ">
                  <blockquote className="testimonial-quote text-gray-200 text-lg leading-relaxed transition-colors duration-300 border-b border-zinc-700 pb-4">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between mt-8 gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.author.avatarUrl}
                        alt={testimonial.author.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div>
                        <p className="testimonial-author-name font-bold text-gray-200 transition-colors duration-300">
                          {testimonial.author.name}
                        </p>
                        <p className="testimonial-author-title text-sm text-gray-200 transition-colors duration-300">
                          {testimonial.author.title}
                        </p>
                        <p className="testimonial-author-company text-sm text-gray-200 transition-colors duration-300">
                          {testimonial.author.company}
                        </p>
                      </div>
                    </div>

                    <img
                      src={testimonial.companyLogoUrl}
                      alt={`${testimonial.author.company} Logo`}
                      className="testimonial-company-logo h-8 w-auto object-contain filter grayscale brightness-0 invert opacity-70 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
