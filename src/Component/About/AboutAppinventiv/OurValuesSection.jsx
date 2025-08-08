import React from "react";
import img1 from "../../../assest/about/3.webp";
import img2 from "../../../assest/about/cup.webp";
const OurValuesSection = () => {
  return (
    <section className="w-full py-10 bg-black sm:py-14">
      <div className="flex flex-col w-full max-w-5xl gap-20 px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Image Container */}
          <div className="w-30 h-[65vh] overflow-hidden rounded-2xl">
            <img
              src={img1}
              alt="Team members giving a high-five"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Text Container */}
          <div className="text-white">
            <h3 className="mb-4 text-2xl font-bold">We Own Responsibilities</h3>
            <p className="leading-relaxed text-neutral-300">
              Along with the latest infrastructure, tech stacks, management
              processes, and security measures gained from a diverse collective
              portfolio of seasoned strategists, designers, and developers in
              35+ prominent industries. This helps us fulfil any client demand
              without compromising the output quality, quicker than the
              industry-best delivery timelines.
            </p>
          </div>
        </div>

        {/* Second Row: Text on the left, Image on the right */}
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Text Container */}
          <div className="text-white md:order-first">
            <h3 className="mb-4 text-2xl font-bold">We Work Tirelessly</h3>
            <p className="mb-6 leading-relaxed font-medium text-neutral-300">
              In an inclusive, progressive, and symbiotic environment, that won
              us the{" "}
              <span className="font-bold">"Best Place To Work 2023"</span>{" "}
              award by Outlook India.
            </p>
            <h4 className="mb-3 font-bold">Our work culture...</h4>
            <ul className="space-y-2 font-medium list-disc list-inside text-neutral-300">
              <li>Inspires Impactful Innovations</li>
              <li>Inculcates Self-Development</li>
              <li>Promotes Work-Life Balance</li>
            </ul>
          </div>
          {/* Image Container */}
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src={img2}
              alt="A mug that says Best Place to Work 2022"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
