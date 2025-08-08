import React from "react";

const VerticalScroll = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black text-white">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="snap-start min-h-screen flex items-center justify-center p-8"
        >
          <div className="flex max-w-6xl w-full items-center space-x-12">
            {/* Left Content */}
            <div className="flex flex-col space-y-6 max-w-md">
              <p className="text-blue-500 text-sm font-medium">Case Study</p>
              <h1 className="text-4xl font-bold">Adidas</h1>
              <p className="text-lg">
                Crafting innovation for the consumer markets with Adidas
              </p>

              <div>
                <h3 className="text-sm text-gray-400 uppercase mb-2">
                  Result
                </h3>
                <div className="flex space-x-12">
                  <div>
                    <p className="text-2xl font-bold">5M+</p>
                    <p className="text-sm text-gray-400">App downloads</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5M+</p>
                    <p className="text-sm text-gray-400">App downloads</p>
                  </div>
                </div>
              </div>

              <button className="flex items-center bg-white text-black px-6 py-3 rounded-full w-fit hover:bg-gray-200 transition">
                View case study
                <span className="ml-2">➔</span>
              </button>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-[50%] h-[70vh] bg-white rounded-lg shadow-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalScroll;
