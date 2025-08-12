import React from "react";
import BgImg from "../../../assest/about/blur.webp";
import { MdOutlineAccountBalance } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";

const ImgB = () => {
  return (
    <>
     <section
      className="flex items-center justify-center py-20 px-10"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="w-full max-w-7xl mt-[50vh] bg-black/70 backdrop-blur-md rounded-2xl text-white">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center">
            <p className="text-base font-semibold text-gray-300 tracking-wider uppercase">
              The Appinventiv Advantage
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Elevating Your Development Experience
            </h1>
          </div>

          {/* Grid for all four features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
            {/* Compliance Column */}
            <div className="px-8 py-10 text-center md:border-r md:border-b border-gray-700">
              <div className="flex justify-center mb-6">
                <MdOutlineAccountBalance className="h-10 w-10 text-blue-500" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold">Compliance</h3>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">
                Committed to achieving excellence at every stage of development, we ensure strict compliance with all domestic and international legal regulations.
              </p>
            </div>

            {/* Security Column */}
            <div className="px-8 py-10 text-center md:border-b border-gray-700">
              <div className="flex justify-center mb-6">
                <BsShieldCheck className="h-10 w-10 text-blue-500" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold">Security</h3>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">
                At Appinventiv, security is paramount throughout the product development lifecycle. We employ industry-leading security measures to ensure your software is safe.
              </p>
            </div>

            {/* Quality Column */}
            <div className="px-8 py-10 text-center md:border-r border-gray-700">
              <div className="flex justify-center mb-6">
                <IoDiamondOutline className="h-10 w-10 text-blue-500" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold">Quality</h3>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">
                Appinventiv's USP lies in building future-proof applications that solve tomorrow's problems with cutting-edge technologies like artificial intelligence, cloud, and data analytics.
              </p>
            </div>

            {/* Innovation Column */}
            <div className="px-8 py-10 text-center">
              <div className="flex justify-center mb-6">
                <HiOutlineLightBulb className="h-10 w-10 text-blue-500" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold">Innovation</h3>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">
                With three R&D labs globally, our experts continuously research emerging innovations, tapping into any potential opportunity that aids our client's business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ImgB;
