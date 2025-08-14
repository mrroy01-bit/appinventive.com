import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AdidasLogo from "../../../assest/portfolio/adidaslogo.svg";


const ServicesSection = () => {
  // Data structure updated to match the image content
  const services = [
    {
      num: "1",
      title: "Conceptualization",
      details: ["Market understanding", "Localization"],
    },
    {
      num: "2",
      title: "Product Design",
      details: ["User flow", "Designing"],
    },
    {
      num: "3",
      title: "Development",
      details: ["Android App", "iOS App"],
    },
    {
      num: "4",
      title: "Deployment",
      details: ["Play Store publishing", "App Store publishing"],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <>
    <section className="bg-[#1a1a1a] text-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-left text-4xl font-bold mb-20" // Increased bottom margin
        >
          Our Services Provided
        </h2>

        <div className="grid grid-cols-1 pt-20 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="relative text-left pt-12" // Added padding-top for spacing
            >
              {/* Large background number */}
              <span className="absolute -top-28 left-0 text-[150px] font-extrabold text-white opacity-5 -z-0">
                {service.num}
              </span>

              {/* Service Title */}
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                {service.title}
              </h3>

              {/* Service Details */}
              <div className="flex flex-col gap-2 relative z-10">
                {service.details.map((detail, index) => (
                  <p key={index} className="text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


     <section  className="bg-[#222] py-16 px-6 lg:px-12 text-white text-center">
     <div data-aos="fade-up" className="max-w-4xl mx-10">
       {/* Adidas Logo */}
       <div className="mb-8">
         <img src={AdidasLogo} alt="Adidas Logo" className="h-24 mx-auto" />
       </div>

       {/* Testimonial */}
       <div className="relative">
         <span className="absolute top-0 left-0 font-bold text-gray-500 text-7xl opacity-70 -translate-x-6 -translate-y-3">
           “
         </span>
         <p className="text-xl leading-relaxed font-bold italic mb-8">
           With little presence on mobile in the Middle Eastern region, we wanted to outsource <br />
           the app development to a company that could understand as well as execute our <br />
           requirements efficiently. When we saw AppInventiv's vast portfolio of clients followed by <br />
           having a discussion meeting, we knew it was the right company that could fulfil all our <br />
           requirements.
         </p>
         <span className="absolute bottom-0 right-0 font-bold text-gray-500 text-7xl opacity-70 translate-x-6 translate-y-3">
           ”
         </span>
       </div>
     </div>
   </section>
    </>
  );
};

export default ServicesSection;