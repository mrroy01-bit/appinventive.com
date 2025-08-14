import React from "react";
import img1 from "../../../assest/portfolio/adidas-app1.webp";
import img2 from "../../../assest/portfolio/adidas-app2.webp";
import img3 from "../../../assest/portfolio/adidas-app3.webp";

const DevelopmentProcess = () => {
const mockups = [
    {
        img: img1,
        alt: "4DFWD Shoes",
        size: { width: 250, height: 700 },
    },
    {
        img: img2,
        alt: "Ultraboost Shoes",
        size: { width: 280, height: 700 },
    },
    {
        img: img3,
        alt: "Adidas Store",
        size: { width: 250, height: 700 },
    },
];

  return (
    <>
      <section className="bg-[#1e1e1e] text-white py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-2">
            Our Development Process
          </h2>

          {/* Subheading */}
          <h4
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg font-semibold text-gray-300 mb-8"
          >
            Developing Mobile Shopping Experience for Middle Eastern Audience
          </h4>

          {/* Paragraphs */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 leading-relaxed mb-6"
          >
            Our team of eCommerce experts worked on the end-to-end creation of
            the Adidas application. We used industry-loved technologies and
            frameworks (like Algolia, MoEngage, etc.) across native Android and
            iOS and backend to build an engaging shopping experience for the
            brand’s Middle Eastern users. To make the experience immersive, we
            implemented a strategic cache management system for faster
            application performance and elimination of redundancy. Push
            notification on the other hand increased the app engagement and
            conversion rate.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-300 leading-relaxed"
          >
            On the frontend front, we added complex animations and video
            components on the main landing page, to give the application a
            YouTube-like engaging feel. Every frontend effort we made was
            directed towards bettering the application quality.
          </p>
        </div>
      </section>
      <section className="bg-[#1e1e1e] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
          {mockups.map((mockup, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="transition-transform duration-300 hover:-translate-y-3"
            >
              <div className="group w-[280px] h-[550px] overflow-hidden flex items-center justify-center rounded-[2rem] shadow-lg bg-transparent">
                <img
                  src={mockup.img}
                  alt={mockup.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DevelopmentProcess;
