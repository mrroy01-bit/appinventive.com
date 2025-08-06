import React from 'react';

// --- The Main Component ---
const ContactFormSection = () => {
  return (
    // Main container with the gradient background
    <div className="min-h-screen bg-gradient-to-r from-[#380036] to-[#0CBABA] flex justify-center items-center p-4 sm:p-6 lg:p-8">
      
      {/* Inner container for the two-column layout */}
      <div className="container mx-auto flex flex-col lg:flex-row max-w-6xl rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Left Side - Text Content */}
        <div className="bg-black bg-opacity-70 text-white py-16 px-8 lg:px-16 flex flex-col justify-center lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Technology Experts Are <br /> Change Catalysts
          </h2>
          <p className="text-lg text-zinc-300">
            Book A Free Consultation Call With Our Experts Today
          </p>
          {/* You could add an illustrative image here if desired */}
        </div>

        {/* Right Side - Form */}
        <div className="bg-zinc-900 py-12 px-8 lg:px-12 w-full lg:w-1/2">
          <form className="space-y-6">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-zinc-300">Full Name</label>
              <input 
                type="text" 
                id="full-name" 
                className="mt-1 block w-full rounded-md border-zinc-700 bg-zinc-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">E-mail ID*</label>
              <input 
                type="email" 
                id="email" 
                className="mt-1 block w-full rounded-md border-zinc-700 bg-zinc-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                required 
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-zinc-300">Contact Number*</label>
              <input 
                type="tel" 
                id="contact" 
                className="mt-1 block w-full rounded-md border-zinc-700 bg-zinc-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                required 
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-zinc-300">Select a Budget Range</label>
              <select 
                id="budget" 
                className="mt-1 block w-full rounded-md border-zinc-700 bg-zinc-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>Less than $10,000</option>
                <option>$10,000 - $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>More than $100,000</option>
              </select>
            </div>
            <div>
              <label htmlFor="project-brief" className="block text-sm font-medium text-zinc-300">Describe Your Project/Idea in Brief*</label>
              <textarea 
                id="project-brief" 
                rows="4" 
                className="mt-1 block w-full rounded-md border-zinc-700 bg-zinc-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                placeholder="Helps us come back better prepared..."
                required
              ></textarea>
            </div>
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                id="nda" 
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-blue-600 focus:ring-blue-500" 
              />
              <label htmlFor="nda" className="text-sm text-zinc-300">Include Copy of a Non-Disclosure Agreement</label>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="captcha" className="block text-sm font-medium text-zinc-300">6 + 3 =</label>
              <input 
                type="number" 
                id="captcha" 
                className="w-20 rounded-md border-zinc-700 bg-zinc-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                required 
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full rounded-lg bg-blue-600 py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Request Proposal
              </button>
            </div>
            <div className="text-center">
                <p className="text-xs text-zinc-500">* In just 2 mins you will get a response</p>
                <p className="text-xs text-zinc-500 mt-1">Your data is 100% protected by our Non Disclosure Agreement.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
