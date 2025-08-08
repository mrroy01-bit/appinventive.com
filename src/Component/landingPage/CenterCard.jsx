import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import {
  Search,
  LineChart,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const cardData = [
  {
    icon: <Search size={24} />,
    title: "Data That Drive Decisions",
    description:
      "Conflicting reports, unclear dashboards, and executives can't get straight answers about performance. Business intelligence systems turn messy data into clear insights that guide confident decision-making.",
  },
  {
    icon: <LineChart size={24} />,
    title: "Trust Built in Complex Transactions",
    description:
      "Multiple parties can't verify information, audit trails disappear, and fraud costs keep rising. Blockchain creates permanent, tamper-proof records everyone can trust. A supply chain client cut fraud losses by 90%.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Engage and Grow Your Audience",
    description:
      "Marketing feels impersonal, and scaling content creation is tough. AI generates forgettable brand messaging. We help you interact with prospects in meaningful ways.",
  },
  {
    icon: <Search size={24} />,
    title: "Another Insightful Card",
    description:
      "This is another example card to demonstrate the looping functionality of the slider, ensuring a seamless experience for the user.",
  },
];

// --- The Main Component ---
const CenteredCardSlider = () => {
  return (
    <section className="bg-black text-white ">
      <h2 className="text-4xl font-semibold mb-3 ml-10 text-left">
        Solving Your Biggest Business Challenges <br />
        with Advanced Technologies
      </h2>
      <div className="bg-black text-white w-full flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              loop={true}
              centeredSlides={true}
              slidesPerView={1.2}
              spaceBetween={30}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              // Responsive breakpoints
              breakpoints={{
                // when window width is >= 768px
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 40,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="!py-4"
            >
              {cardData.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#1C1C1C] border border-zinc-800 rounded-xl p-8 h-[320px] flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="bg-zinc-800 rounded-md w-12 h-12 flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-zinc-100">
                      {card.title}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons - Placed below the slider */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="custom-swiper-button-prev p-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors disabled:opacity-50">
                <ArrowLeft size={20} />
              </button>
              <button className="custom-swiper-button-next p-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors disabled:opacity-50">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenteredCardSlider;
