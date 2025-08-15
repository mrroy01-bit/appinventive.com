import { Star } from "lucide-react";
import React from "react";

// --- Star Icon for Ratings ---
const StarIcon = ({ isFilled = true }) => (
  <svg
    className={`w-5 h-5 ${isFilled ? "text-yellow-400" : "text-gray-600"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// --- Platform Logo SVGs (simplified for example) ---
const ClutchLogo = () => (
  <span className="font-bold text-2xl text-white">Clutch</span>
);
const GoodFirmsLogo = () => (
  <span className="font-bold text-xl text-blue-400">GoodFirms</span>
);
const TechreviewerLogo = () => (
  <span className="font-semibold text-lg text-white italic">techreviewer</span>
);
const MobileAppDailyLogo = () => (
  <span className="font-bold text-md text-white">MOBILE APP DAILY</span>
);

// --- Reusable Rating Card Component ---
const RatingCard = ({ rating, platformLogo }) => (
  <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between transition-transform duration-300 hover:bg-gray-700 hover:scale-105">
    <div className="flex items-center">
      <p className="text-xl font-bold text-white mr-4">{rating.score}/5</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} isFilled={i < Math.floor(rating.stars)} />
        ))}
      </div>
    </div>
    <div className="h-8 flex items-center">{platformLogo}</div>
  </div>
);

// --- Main Component ---
 const StarCard = () => {
  const ratings = [
    { id: 1, score: 4.7, stars: 5, logo: <ClutchLogo /> },
    { id: 2, score: 4.7, stars: 5, logo: <GoodFirmsLogo /> },
    { id: 3, score: 4.8, stars: 5, logo: <TechreviewerLogo /> },
    { id: 4, score: 4.7, stars: 5, logo: <MobileAppDailyLogo /> },
  ];

  return (
    <div
      className="bg-black overflow-hidden min-h-screen w-full flex items-center justify-center p-8"
      style={{
        background:
          "linear-gradient(to bottom right, #1a1a2e, #16213e, #0f3460)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div
            className="text-white text-center lg:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Recognized Excellence Across Leading Platforms
            </h2>
            <p className="text-gray-300 text-lg">
              Appinventiv stands out with stellar ratings on leading platforms,
              reflecting a consistent track record of achieving excellence in
              every product we build.
            </p>
          </div>

          {/* Right Column: Ratings List */}
          <div className="space-y-4" data-aos="fade-left">
            {ratings.map((rating) => (
              <RatingCard
                key={rating.id}
                rating={rating}
                platformLogo={rating.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarCard;
