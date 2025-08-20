import { useState } from "react";
import Foodtech from "./TabContent/Foodtech";
import ShowAll from "./TabContent/ShowAll";
import Ecommerce from "./TabContent/Ecommerce";

const TabSystem = () => {
  const [activeMainTab, setActiveMainTab] = useState("industries");
  const [activeInnerTab, setActiveInnerTab] = useState("Show All"); // ✅ default matches button

  const tabOptions = {
    industries: [
      "Show All",
      "FoodTech",
      "eCommerce & Retail",
      "Healthcare",
      "FinTech",
      "Social Media",
      "EdTech",
      "Mobility",
      "Real Estate",
    ],
    services: [
      "Show All",
      "UI/UX",
      "Web Development",
      "Mobile Apps",
      "Cloud",
      "AI/ML",
    ],
    regions: [
      "Show All",
      "North America",
      "Europe",
      "Asia",
      "Middle East",
      "Australia",
    ],
  };

  const renderContent = () => {
    switch (activeInnerTab) {
      case "Show All":
        return <ShowAll />;
      case "FoodTech":
        return <Foodtech />;
      case "eCommerce & Retail":
        return <Ecommerce />;
      default:
        return <div className="text-gray-400">Content coming soon...</div>;
    }
  };

  return (
    <div className="bg-black text-white p-6">
      {/* Main Tabs */}
      <div className="flex space-x-8 mb-6">
        {["industries", "services", "regions"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveMainTab(tab);
              setActiveInnerTab("Show All"); // ✅ reset correctly
            }}
            className={`text-lg font-semibold ${
              activeMainTab === tab
                ? "border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Inner Tabs */}
      <div className="flex flex-wrap gap-3">
        {tabOptions[activeMainTab].map((innerTab) => (
          <button
            key={innerTab}
            onClick={() => setActiveInnerTab(innerTab)}
            className={`px-4 py-2 border rounded ${
              activeInnerTab === innerTab
                ? "bg-white text-black font-semibold"
                : "border-gray-500 text-gray-300 hover:border-white hover:text-white"
            }`}
          >
            {innerTab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default TabSystem;
