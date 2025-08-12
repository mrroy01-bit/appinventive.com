import React from "react";
import Padcare from '../../../assest/about/padcare-img.png';
import Peesafe from '../../../assest/about/peesafe-img.png';



const MenstrualHealth = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Menstrual Health & Hygiene
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Padcare</h2>
            <p className="text-lg leading-relaxed mb-4">
              The humans of Appinventiv give as much importance to women
              empowerment as they give to pioneering technological advancements.
              To leave a positive impact on the occasion of women's day, we
              collaborated with 
              <span className="font-bold"> PadCare</span>, world's first sanitary
              pads recycling startup to contribute to their mission of recycling
              120 Lac pads annually. The campaign involved installation of
              recyclable sanitary pads bins in all our female washrooms. The
              collected sanitary pads are sent to PadCare's recycling station in
              Pune where they transform waste pads into sustainable stationary
              including diary, pen and desk calendars.
            </p>
            <div className="flex items-center space-x-2">
              <button className="bg-gray-700 text-white py-2 px-4 rounded-full text-sm">
                FY 22-23
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={Padcare}
              alt="Padcare and Appinventiv team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <hr className="my-12 border-gray-700" />
        <div className="flex w-[95vw] justify-between">
          <div className="flex  gap-10 items-center">
            <div className="flex justify-center md:order-2">
              <img
                src={Peesafe}
                alt="Peesafe and Appinventiv session"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full  md:w-1/2">
            <h2 className="text-2xl font-bold  text-blue-600 mb-4">Peesafe</h2>
            <p className="text-lg leading-relaxed">
              Adequate awareness around menstrual hygiene especially among
              working urban women is still in its early stage. Our team
              partnered with <span className="font-bold">Pee Safe</span> to
              educate our female employees about safe sanitary use & disposal,
              and managing general health and hygiene during periods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenstrualHealth;
