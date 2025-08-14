import React from "react";
import GoalImg from "../../../assest/portfolio/project-goal-screen.webp";
import banner from "../../../assest/portfolio/onboarding-img.jpg";



const GoalItem = ({
  number,
  title,
  description,
  aosAnimation,
  aosDelay,
  textAlign = "text-center",
}) => {
  return (
    <div
      className={`relative ${textAlign}`}
      data-aos={aosAnimation}
      data-aos-delay={aosDelay}
    >
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-auto lg:-top-10 text-9xl font-extrabold text-gray-200 -z-10">
        {number}
      </span>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const QuoteIcon = () => (
  <svg
    className="w-10 h-10 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10.455 2.388A.998.998 0 009.5 3.38V7.5c0 .552-.448 1-1 1H4.5c-.552 0-1-.448-1-1V3.38c0-.98.79-1.801 1.768-1.944C6.23 1.285 7.5 2.126 7.5 3.38V5.5h1V3.38c0-.98.79-1.801 1.768-1.944C11.23 1.285 12.5 2.126 12.5 3.38V7.5c0 .552-.448 1-1 1h-1.045c.274-1.56.1-3.38-.5-5.112zM16.455 2.388A.998.998 0 0015.5 3.38V7.5c0 .552-.448 1-1 1h-4c-.552 0-1-.448-1-1V3.38c0-.98.79-1.801 1.768-1.944C12.23 1.285 13.5 2.126 13.5 3.38V5.5h1V3.38c0-.98.79-1.801 1.768-1.944C17.23 1.285 18.5 2.126 18.5 3.38V7.5c0 .552-.448 1-1 1h-1.045c.274-1.56.1-3.38-.5-5.112z" />
  </svg>
);

const ProjectGoalsSection = () => {
  const goals = [
    {
      number: "1",
      title: "Conceptualization of the project",
      description:
        "We started with the customer journey mapping process, ensuring that we have a complete understanding of the roadblocks IKEA offline customers face when shopping in-store. The understanding then laid the basis for the ERP solution's feature-set and the integration choices.",
      textAlign: "lg:text-right",
    },
    {
      number: "2",
      title: "Creation of an ERP solution",
      description:
        "We worked on the creation of the ERP solution following an agile development approach. Our team of designers, developers, and deployment experts worked together to build a solution that would become the first point of contact for every IKEA walk-in customer.",
      textAlign: "lg:text-left",
    },
    {
      number: "3",
      title: "Integrate the facility to gather customers' information",
      description:
        "A crucial outcome that the IKEA management team was expecting was in terms of customers' information that they could then use as marketing assets. We brainstormed and integrated the facility of entering personal information and preferences with the system's backend in real-time.",
      textAlign: "lg:text-right",
    },
    {
      number: "4",
      title: "Deploy the solution across individual IKEA stores",
      description:
        "Our deployment team worked on the launch of the ERP solution across different IKEA stores, each with their individual servers. We worked remotely on the IKEA private IP address while ensuring that there are zero glitches in the system when it runs on multiple servers.",
      textAlign: "lg:text-left",
    },
  ];

  return (
    <>
      <section className="bg-white py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-20 lg:mb-32" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Project Goals
            </h2>
          </div>

          <div className="relative">
            {/* Phone image - desktop only */}
            <div
              className="hidden lg:flex justify-center items-center absolute inset-0 z-10"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src={GoalImg}
                alt="IKEA app on a smartphone"
                className="w-64"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/256x512/ffffff/000000?text=Phone+Mockup";
                }}
              />
            </div>

            {/* Phone image - mobile/tablet only */}
            <div
              className="flex justify-center mb-12 lg:hidden"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src={GoalImg}
                alt="IKEA app on a smartphone"
                className="w-64"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/256x512/ffffff/000000?text=Phone+Mockup";
                }}
              />
            </div>

            {/* Dotted connector lines - desktop only */}
            <div className="hidden lg:block absolute inset-0">
              <div className="absolute mt-8 top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-full -translate-y-full border-r-2 border-b-2 border-dotted border-gray-300 rounded-br-3xl"></div>
              <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-y-full border-l-2 border-b-2 border-dotted border-gray-300 rounded-bl-3xl"></div>
              <div className="absolute  top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-full border-r-2 border-t-2 border-dotted border-gray-300 rounded-tr-3xl"></div>
              <div className="absolute mt-8 top-1/2 left-1/2 w-1/2 h-1/2 border-l-2 border-t-2 border-dotted border-gray-300 rounded-tl-3xl"></div>
            </div>

            {/* Goals Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-y-32 lg:gap-x-64">
              <GoalItem
                {...goals[0]}
                aosAnimation="fade-right"
                aosDelay="200"
                textAlign="lg:text-left"
                className="mt-30"
              />
              <GoalItem
                {...goals[1]}
                aosAnimation="fade-left"
                aosDelay="300"
                textAlign="lg:text-left"
                className=""
              />
              <GoalItem
                {...goals[2]}
                aosAnimation="fade-right"
                aosDelay="400"
                textAlign="lg:text-left"
                className=""
              />
              <GoalItem
                {...goals[3]}
                aosAnimation="fade-left"
                aosDelay="500"
                textAlign="lg:text-left"
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              {/* Testimonial Content */}
              <div className="relative">
                <div className="absolute -top-10 -left-4">
                  <QuoteIcon />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our team worked in an agile manner to build the ERP solution
                  in record time. There were some challenges in the way but we
                  brainstormed and found solutions to those without hampering
                  the delivery timeline. We are very proud to be a part of
                  IKEA's user journey while contributing to the brand's
                  promotional efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Column: Text Content */}
            <div
              className="w-full md:w-1/2 bg-yellow-400 flex flex-col justify-center p-8 sm:p-12 lg:p-16"
              data-aos="fade-right"
            >
              <div className="max-w-md">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Making Customer Onboarding Easy
                </h2>
                <p className="text-gray-700 mb-6">
                  The result of our dedicated efforts behind the ERP solution
                  development led to the creation of a solution that is today
                  getting expanded the 7+ IKEA stores in the UAE. The retail
                  outlet touts the solution as the biggest source of ROI
                  measurement.
                </p>
                <a
                  href="#"
                  className="font-semibold text-gray-800 border-b-2 border-gray-800 hover:text-black hover:border-black transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <img
                src={banner}
                alt="Exterior of a large IKEA store"
                className="w-full h-full object-cover min-h-[300px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/800x600/0051ba/ffda1a?text=IKEA+Store";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGoalsSection;
