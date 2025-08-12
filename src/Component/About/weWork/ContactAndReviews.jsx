import React from "react";

// A component to render star ratings
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={i < fullStars ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

// The main component for the contact and reviews section
const ContactAndReviews = () => {
  return (
    <div className="bg-gray-50 font-sans min-h-screen flex items-center  p-4">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Clutch Reviews */}
          <div className="w-full   ">
            {/* Clutch Header */}
            <div className="flex items-center gap-4">
              {/* You should replace this src with your actual Clutch logo image */}
              <img
                src="https://placehold.co/100x40/ffffff/000000?text=Clutch"
                alt="Clutch Logo"
                className="h-8"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/100x40/ffffff/000000?text=Clutch";
                }}
              />
              <div className="text-left">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-gray-800">4.8</span>
                  <span className="text-gray-500">/</span>
                  <span className="text-gray-500">5.0</span>
                  <div className="ml-2">
                    <StarRating rating={4.8} />
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  Based on 81 client reviews
                </p>
              </div>
            </div>
            <div className="flex w-[100vh] gap-8">
              {/* First Review Card */}
              <div className="bg-white   p-6 ">
                <StarRating rating={5} />
                <p className="text-gray-700 text-base my-3">
                  "Appinventiv was responsive and adapted to the company's
                  needs. They applied feedback to ensure constant improvements
                  on the development of the solution. The team was highly
                  skilled and had a great attitude."
                </p>
                <p className="font-semibold text-gray-800 text-sm">
                  Sr. Product Owner
                </p>
                <p className="text-gray-500 text-sm">Ecco</p>
              </div>

              <div className="line w-2 h-54 bg-gray-500 "></div>

              {/* Second Review Card */}
              <div className="bg-white p-6 ">
                <StarRating rating={5} />
                <p className="text-gray-700 text-base my-3">
                  "Thanks to Appinventiv, the client successfully launched their
                  mobile app. Appinventiv delivered the project on time and
                  within budget. The team was highly responsive, professional,
                  and client-oriented and demonstrated stellar project
                  management."
                </p>
                <p className="font-semibold text-gray-800 text-sm">
                  Jeff Starr
                </p>
                <p className="text-gray-500 text-sm">Broker/2Broker</p>
              </div>
            </div>
          </div>
          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-xl ml-30 shadow-lg p-8 w-full max-w-lg border border-gray-100">
            <form>
              {/* Full Name Input */}
              <div className="mb-4">
                <label
                  htmlFor="full-name"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  E-mail ID*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Contact Number Input */}
              <div className="mb-4">
                <label
                  htmlFor="contact-number"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Contact Number*
                </label>
                <input
                  type="tel"
                  id="contact-number"
                  className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Budget Select */}
              <div className="mb-4">
                <label
                  htmlFor="budget"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Select a Budget Range
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    className="w-full appearance-none px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option>Select Budget</option>
                    <option>$10,000 - $20,000</option>
                    <option>$20,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Brief Textarea */}
              <div className="mb-4">
                <label
                  htmlFor="project-brief"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Describe Your Project/Idea In Brief (Helps Us Come Back Better
                  Prepared)*
                </label>
                <textarea
                  id="project-brief"
                  rows="4"
                  className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                ></textarea>
              </div>

              {/* NDA Checkbox */}
              <div className="flex items-center mb-5">
                <input
                  type="checkbox"
                  id="nda"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="nda"
                  className="ml-2 block text-sm text-gray-800"
                >
                  Include copy of a Non-Disclosure Agreement.
                </label>
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                type="submit"
              >
                Request Proposal
              </button>

              {/* Footer Text */}
              <div className="text-center mt-4">
                <p className="text-gray-600 text-xs">
                  <span className="font-semibold">In just 2 mins</span> you will
                  get a response
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  Your idea is 100% protected by our{" "}
                  <span className="font-semibold">
                    Non Disclosure Agreement.
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAndReviews;
