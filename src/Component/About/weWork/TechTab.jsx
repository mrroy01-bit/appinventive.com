import React, { useState, useRef, useEffect } from "react";
import {
  Code,
  Server,
  Smartphone,
  Database,
  ArrowRight,
  BrainCircuit,
  Cloud,
  Layers3,
} from "lucide-react";

// Data for the tabs and their content
const capabilitiesData = [
  {
    name: "Artificial Intelligence",
    icon: BrainCircuit,
    content: {
      "Models & APIs": [
        {
          name: "OpenAI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
        },
        {
          name: "Meta",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meta/meta-original.svg",
        },
        { name: "Mistral AI", icon: "https://mistral.ai/favicon.ico" },
        {
          name: "Google",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
        },
        {
          name: "Hugging Face",
          icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        },
        { name: "Grok", icon: "https://x.ai/grok/favicon.ico" },
      ],
      "Vector Databases": [
        {
          name: "MongoDB Atlas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        { name: "Chroma", icon: "https://www.trychroma.com/favicon.ico" },
      ],
    },
  },
  {
    name: "Frontend Programming Languages",
    icon: Code,
    content: {
      "Languages & Frameworks": [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
      ],
      Styling: [
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          name: "Sass",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
      ],
    },
  },
  {
    name: "Backend Programming Languages",
    icon: Server,
    content: {
      "Languages & Runtimes": [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Go",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Rust",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
        },
      ],
    },
  },
  {
    name: "Mobile",
    icon: Smartphone,
    content: {
      Frameworks: [
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "Swift",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
      ],
    },
  },
  {
    name: "Big Data",
    icon: Layers3,
    content: {
      Technologies: [
        {
          name: "Apache Spark",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
        },
        {
          name: "Hadoop",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
        },
        {
          name: "Kafka",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
        },
      ],
    },
  },
  {
    name: "Databases / Data Storages",
    icon: Database,
    content: {
      SQL: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
      NoSQL: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
      ],
    },
  },
{
    name: "Cloud",
    icon: Cloud,
    content: {
      Providers: [
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        },
        {
          name: "Azure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftazure/microsoftazure-original.svg",
        },
        {
          name: "Google Cloud",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        },
      ],
      Services: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
      ],
    },
  },
  {
    name: "Cloud",
    icon: Cloud,
    content: {
      Providers: [
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        },
        {
          name: "Azure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftazure/microsoftazure-original.svg",
        },
        {
          name: "Google Cloud",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        },
      ],
      Services: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
      ],
    },
  },
];

// Main Component
const TechTab = () => {
  // State to track the active tab, defaults to the first item
  const [activeTab, setActiveTab] = useState(capabilitiesData[0].name);
  const navRef = useRef(null);

  // Find the data for the currently active tab
  const activeTabData = capabilitiesData.find((tab) => tab.name === activeTab);

  // Scroll to active tab when it changes
  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        // Use Lenis smooth scrolling for navigation
        const yOffset = activeElement.offsetTop - navRef.current.offsetTop - 10;
        
        navRef.current.scrollTo({
          top: yOffset,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab]);

  return (
    <div className="bg-[#FAF2F0] text-white min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl  text-black font-normal mb-2"> Appinventiv’s Tech Arsenal</h3>
        <h1 className="text-3xl text-black sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Languages, Tools, And Frameworks
        </h1>
        <div className="flex flex-col  lg:flex-row gap-8">
          {/* Left Column: Navigation Tabs */}
          <div className="w-full lg:w-1/2 max-h-[80vh] overflow-hidden">
            <div className="bg-blue-600 rounded-xl p-4 h-full">
              <nav ref={navRef} className="space-y-2 overflow-y-auto h-full custom-scrollbar pr-2">
                {capabilitiesData.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = tab.name === activeTab;
                  return (
                    <button
                      key={tab.name}
                      data-active={isActive}
                      onClick={() => setActiveTab(tab.name)}
                      className={`w-full text-left flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-blue-700 shadow-lg scale-102"
                          : "hover:bg-blue-500/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <Icon className={`w-6 h-6 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                        <span className="font-semibold text-lg">
                          {tab.name}
                        </span>
                      </div>
                      {isActive && <ArrowRight className="w-6 h-6 animate-pulse" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="w-full lg:w-2/4 text-black">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 min-h-[300px]">
              {activeTabData && (
                <div className="animate-fade-in">
                  {Object.entries(activeTabData.content).map(
                    ([category, items], categoryIndex) => (
                      <div 
                        key={category} 
                        className="mb-8 opacity-0 animate-fade-in" 
                        style={{ animationDelay: `${categoryIndex * 100}ms` }}
                      >
                        <h2 className="text-2xl font-bold mb-6">{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {items.map((item, itemIndex) => (
                            <div
                              key={item.name}
                              className="bg-gray-200 hover:bg-gray-700/70 transition-all duration-300 rounded-xl p-4 flex items-center gap-4 opacity-0 animate-fade-in"
                              style={{ animationDelay: `${(categoryIndex * 100) + (itemIndex * 50)}ms` }}
                            >
                              <img
                                src={item.icon}
                                alt={`${item.name} logo`}
                                className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-110"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src =
                                    "https://placehold.co/40x40/1f2937/ffffff?text=?";
                                }}
                              />
                              <span className="font-medium text-gray-800">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced styles with custom scrollbar */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
        
        /* Custom scrollbar styles */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          margin: 8px 0;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:active {
          background: rgba(255, 255, 255, 0.7);
        }
        
        /* Smooth scrolling enhancement */
        .custom-scrollbar {
          scroll-behavior: smooth;
          overscroll-behavior: contain;
          transition: all 0.3s cubic-bezier(0.1, 0.6, 0.3, 1);
        }
        
        /* Hide scrollbar on mobile for cleaner look */
        @media (max-width: 1024px) {
          .custom-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .custom-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TechTab;