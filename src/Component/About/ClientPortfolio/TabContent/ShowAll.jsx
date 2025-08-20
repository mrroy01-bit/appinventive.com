import React from "react";
import Foodtech from "./Foodtech";
import Ecommerce from "./Ecommerce";

import kfcBucket from "../../../../assest/about/kfc-ports-banner.webp"; 

 
const ShowAll = () => {
  return (
    <div>
      <section>
        <div className="relative bg-black text-white w-full min-h-[500px] flex items-end justify-end rounded-2xl  shadow-sm overflow-hidden">
      {/* Background Image */}
      <img
        src={kfcBucket}
        alt="KFC Bucket"
        className="absolute right-0 top-0 h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 py-16 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Text */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">KFC</h2>
          <p className="text-gray-300 leading-relaxed max-w-md">
            Helping the Americana Group's KFC to digitally transform their
            business by launching seven innovative mobile apps across global
            markets.
          </p>
        </div>

        {/* Stats Section */}
        <div className="lg:w-1/2 flex flex-col sm:flex-row justify-around mt-10 lg:mt-0 gap-8">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold">22%</p>
            <p className="text-gray-400 text-sm">Higher Conversion Rate</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold">4.5</p>
            <p className="text-gray-400 text-sm">Average Rating on Stores</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold">30K+</p>
            <p className="text-gray-400 text-sm">Orders per Day via App</p>
          </div>
        </div>
      </div>
    </div>
      </section>
      <Foodtech />
      <Ecommerce />
    </div>
  );
};

export default ShowAll;
