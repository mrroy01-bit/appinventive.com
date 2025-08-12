import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Kfc from "../../../assest/about/kfc-banner.webp"
import JobGet from "../../../assest/about/jobget-banner-new.webp";
import EdFundo from "../../../assest/about/edfundo-banner-new.webp";

import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const ImgB = [Kfc, JobGet, EdFundo]


const stories = [
  {
    id: "KFC",
    image: ImgB[0],
    logo: "KFC",
    shortText:
      "Paying additional fees to food aggregators apps, KFC was losing revenue to stiff competition...",
    results: [
      { value: "22%", label: "Increase in Conversion Rate" },
      { value: "60%", label: "Repeat Purchases across Channels" },
    ],
    testimonial:
      "We approached Appinventiv with a clear vision to build a robust and future-ready platform...",
    person: {
      name: "Neeraj Tiwari",
      title: "Director – Digital Engineering, Americana Group (Kuwait Food Co.)",
      avatar: "/neeraj.jpg", // optional
    },
  },
  {
    id: "JobGet",
    image: ImgB[1],
    logo: "JobGet",
    shortText:
      "Revolutionizing the recruitment industry, we significantly reduced the job fulfillment time...",
    results: [
      { value: "$52 million", label: "Received in Series B funding" },
      { value: "2 Million+", label: "Mobile App Downloads" },
    ],
    testimonial:
      "We were looking for an agency that would understand the dire need of the hourly worker job search...",
    person: {
      name: "Billy Lan",
      title: "CTO and Co-founder, JobGet",
      avatar: "/billy.jpg",
    },
  },
  {
    id: "EdFundo",
    image: ImgB[2],
    logo: "edFundo",
    shortText:
      "We built the world's first financial intelligence hub and a smart money management platform for kids...",
    results: [
      { value: "$500K", label: "Received in Series B funding" },
      { value: "#1", label: "Recognized as Best FinTech Startup" },
    ],
    testimonial:
      "We chose Appinventiv to build our financial literacy and money management app from start to finish...",
    person: {
      name: "Simon Wing",
      title: "Co-Founder & CEO, EdFundo",
      avatar: "/simon.jpg",
    },
  },
];

export default function ClientSuccessStories() {
  const [active, setActive] = useState(0);

  const nextStory = () => setActive((prev) => (prev + 1) % stories.length);
  const prevStory = () =>
    setActive((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          From Vision to Victory
        </p>
        <h2 className="text-3xl font-bold">Client Success Stories</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto">
        {/* Left image side */}
        <div className="md:w-1/2 relative bg-gray-900 rounded-lg overflow-hidden">
          <img
            src={stories[active].image}
            alt={stories[active].logo}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 className="text-2xl font-bold mb-2">{stories[active].logo}</h3>
            <p className="mb-4 text-sm">{stories[active].shortText}</p>
            <div className="flex gap-8 mb-4">
              {stories[active].results.map((r, idx) => (
                <div key={idx}>
                  <p className="text-lg font-bold">{r.value}</p>
                  <p className="text-xs text-gray-300">{r.label}</p>
                </div>
              ))}
            <button className="text-sm underline">View Success Story</button>
            </div>
          </div>
        </div>

        {/* Right text side */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stories[active].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="md:w-1/2 bg-gray-900 p-6 rounded-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">{stories[active].logo}</h3>
              <p className="mb-6 text-gray-300">{stories[active].testimonial}</p>
            </div>
            <div className="flex items-center gap-3">
              {stories[active].person.avatar && (
                <img
                  src={stories[active].person.avatar}
                  alt={stories[active].person.name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div>
                <p className="font-bold">{stories[active].person.name}</p>
                <p className="text-sm text-gray-400">
                  {stories[active].person.title}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mt-6">
        <div className="flex gap-4">
          <button
            onClick={prevStory}
            className="p-2  rounded-full hover:bg-white hover:text-black transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextStory}
            className="p-2  rounded-full hover:bg-white hover:text-black transition"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-gray-800 rounded-full flex">
          {stories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActive(idx)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                active === idx ? "bg-black text-white" : "text-gray-400"
              }`}
            >
              {story.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
