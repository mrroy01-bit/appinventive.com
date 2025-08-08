import React from "react";
import Workspace from "../../../assest/about/appinventiv-banner.webp"
const RoiSection = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row w-full h-screen items-center bg-black">
        <div className="img absolute z-10 w-full md:w-[65vw] h-[72vh] mr-12 overflow-hidden rounded-lg shadow-xl right-0">
            <img src={Workspace} alt="Workspace" className="w-full h-full object-cover" />
        </div>
        <div className="text relative z-30 w-full md:w-[78vh] h-[55vh] md:p-8 bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg md:mb-0 md:ml-8">
             <h2 className="mb-4 text-2xl md:text-2xl font-bold text-white">
              We Keep Our Eye On The ROI
            </h2>
            <p className="leading-relaxed text-neutral-300">
              Along with the latest infrastructure, tech stacks, management processes, and security measures gained from a diverse collective portfolio of seasoned strategists, designers, and developers in 35+ prominent industries. This helps us fulfil any client demand without compromising the output quality, quicker than the industry-best delivery timelines.
            </p>
        </div>
      </div>
    </>
  );
};

export default RoiSection;
