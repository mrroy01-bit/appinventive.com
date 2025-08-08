import React from 'react';

const AIAdvisory = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-yellow-600 rounded-lg p-6 flex items-center w-3/4">
        <div className="w-1/2 text-white">
          <h2 className="text-xl font-bold mb-2">Let's Talk AI</h2>
          <p className="text-sm mb-4">
            The future of business is intelligent. But navigating AI, from Large Language Models to MLOps, is complex. Explore our resources, talk to our certified AI specialists, and build your roadmap for an AI-native future.
          </p>
          <button className="bg-white text-yellow-600 px-4 py-2 rounded">
            Book AI Advisory Session
          </button>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">AI</span>
            </div>
            <div className="w-64 h-64 bg-yellow-400 rounded-lg transform rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-transparent border-2 border-yellow-300 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">AI</span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-yellow-300 rounded-full"
                  style={{
                    transform: `rotate(${i * 45}deg) translateX(80px)`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisory;