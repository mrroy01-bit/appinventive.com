import React from 'react';

// Data for the cards. In a real app, this might come from an API.
const engineeringProcesses = [
  {
    title: 'Ideation and Research',
    points: [
      'Identifying the intent',
      'Determining the market potential',
      'Conducting intensive workshops',
      'Laying the foundation for MVP',
    ],
  },
  {
    title: 'Architecture and Design',
    points: [
      'Building the Information Architecture',
      'Designing wireframes',
      'Developing a rapid-interactive prototype',
      'Building a design system',
    ],
  },
  {
    title: 'Development',
    points: [
      'Picking the perfect technology stack',
      'Deploying tech specialists',
      'Beginning to code',
    ],
  },
  {
    title: 'Testing, Launch, and Maintenance',
    points: [
      'Functional, user, compliance, and security testing',
      'Publishing and deploying the product',
      'Offering managed services',
      'Conducting absolute version revamps',
    ],
  },
];

const EngineeringExcellence = () => {
  return (
    <div className="bg-black text-white font-sans mx-10 py-16 sm:py-10">
      <div className="container  px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Behind The Screens Of <br /> Our Engineering Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {engineeringProcesses.map((process, index) => (
            <div
              key={index}
              className="bg-[#1c1c1e] w-[90vh] p-8 py-10 px-10 rounded-lg border-2 border-transparent hover:bg-blue-500 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-blue-500 w-1 h-6 mr-3 inline-block transform -skew-x-12"></span>
                {process.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {process.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className=" text-gray-300 border border-gray-400 text-sm font-medium py-1.5 px-3 rounded-full"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineeringExcellence;
