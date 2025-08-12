import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from '@studio-freight/lenis';

const steps = [
  {
    id: 1,
    title: "Share Your Requirements",
    content: (
      <>
        Fill out the <a href="/contact" className="text-blue-500 underline">contact form</a>, and our expert consultants will connect with you on priority.
      </>
    ),
  },
  { id: 2, title: "Sign An NDA", content: "We'll secure your idea by signing a Non-Disclosure Agreement." },
  { id: 3, title: "Consult Over Call", content: "We'll discuss your goals, requirements, and challenges." },
  { id: 4, title: "Receive A Proposal", content: "Get a detailed proposal outlining our approach and timeline." },
  { id: 5, title: "Kickoff The Project", content: "Once you approve the proposal, we'll initiate the project with a kickoff meeting." },
  { id: 6, title: "Continuous Development", content: "We follow agile methodologies with regular sprints and deliverables." },
  { id: 7, title: "Quality Assurance", content: "Rigorous testing to ensure your product meets the highest standards." },
  { id: 8, title: "Deployment & Support", content: "We handle the launch and provide ongoing maintenance and support." },
  // ... add more steps
];

export default function AgileWorkflow() {
  const [openStep, setOpenStep] = useState(null);
  const scrollContainerRef = useRef(null);
  
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    // Wait for DOM to be ready
    const initLenis = () => {
      if (!scrollContainerRef.current) return;
      
      // Create a new Lenis instance for smooth scrolling
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1.5, // Increased for better response
        smoothTouch: true,    // Enable smooth touch for mobile
        touchMultiplier: 2,
        infinite: false,
        wrapper: scrollContainerRef.current,
        content: scrollContainerRef.current,
      });

      // Create RAF function for Lenis
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      // Start the animation frame loop
      requestAnimationFrame(raf);

      // Add CSS for custom scrollbar
      const style = document.createElement('style');
      style.textContent = `
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(37, 99, 235, 0.5) rgba(0, 0, 0, 0.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          margin: 8px 0;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(37, 99, 235, 0.5);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(37, 99, 235, 0.7);
        }
      `;
      document.head.appendChild(style);

      // Return cleanup function
      return () => {
        lenis.destroy();
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    };

    // Initialize Lenis
    const cleanup = initLenis();
    
    // Handle window resize
    const handleResize = () => {
      if (cleanup) {
        cleanup();
        initLenis();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to handle smooth scrolling to a step when clicked
  const scrollToStep = (stepId) => {
    // Toggle the open state
    const newOpenStep = openStep === stepId ? null : stepId;
    setOpenStep(newOpenStep);
    
    // If opening a step, scroll to it
    if (newOpenStep !== null) {
      const stepElement = document.getElementById(`step-${stepId}`);
      if (stepElement && scrollContainerRef.current) {
        setTimeout(() => {
          const containerTop = scrollContainerRef.current.getBoundingClientRect().top;
          const stepTop = stepElement.getBoundingClientRect().top;
          const offset = stepTop - containerTop - 20; // 20px padding
          
          scrollContainerRef.current.scrollBy({
            top: offset,
            behavior: 'smooth'
          });
        }, 100); // Small delay to allow the animation to start
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen">
      {/* Left Section - Sticky */}
      <div className="w-full lg:w-1/2 px-6 lg:px-14 pt-16 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
          Agile Workflow That Drives <span className="text-blue-600">Best Outcomes</span>
        </h1>
        <div className="bg-green-300 p-6 lg:p-10 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
          <h2 className="text-xl font-bold mb-2">Help Our Expertise Work For Your Growth</h2>
          <p className="mb-6 text-gray-800">
            Though our exhaustive process ensures maximum ROIs, it begins with thoroughly
            understanding your business objectives, goals, and limitations.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Consult Our Expert Panel
          </button>
        </div>
      </div>

      {/* Right Scrollable Steps */}
      <div 
        ref={scrollContainerRef}
        className="w-full lg:w-1/2 px-6 lg:px-10 py-10 lg:py-16 space-y-4 lg:max-h-screen lg:overflow-y-auto custom-scrollbar"
      >
        {steps.map((step) => (
          <div 
            key={step.id} 
            id={`step-${step.id}`}
            className="border-b border-gray-200 py-4 hover:bg-gray-50 transition-colors duration-300 rounded-lg"
          >
            <div
              className="flex justify-between items-center cursor-pointer p-2"
              onClick={() => scrollToStep(step.id)}
            >
              <span className="font-bold text-lg">
                ({String(step.id).padStart(2, "0")}) {step.title}
              </span>
              <span className="text-2xl text-blue-500">
                {openStep === step.id ? "✖" : "≡"}
              </span>
            </div>

            <AnimatePresence>
              {openStep === step.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2 text-gray-700 p-4 bg-gray-100 rounded-lg"
                >
                  {step.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
