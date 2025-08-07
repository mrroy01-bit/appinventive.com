import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Images } from "../assest/Stacked/image";

gsap.registerPlugin(ScrollTrigger);

export default function StackedCards() {
  const containerRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Mouse move handler for custom cursor
  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stacked-card");
      const sections = gsap.utils.toArray(".trigger-section");

      console.log("Cards found:", cards.length);
      console.log("Sections found:", sections.length);

      cards.forEach((card, index) => {
        if (index === 4) return; // Skip bottom card

        const contentArea = card.querySelector(".content-area");
        console.log(`Card ${index} content area:`, contentArea);

        if (index === 0) {
          // First card - handle content change on first section scroll
          if (contentArea) {
            ScrollTrigger.create({
              trigger: containerRef.current,
              start: "top top",
              end: () => "+=" + window.innerHeight,
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                console.log(`Card 0 progress: ${progress}`);

                const h2Element = contentArea.querySelector("h2");
                const pElement = contentArea.querySelector("p");
                const spanElement = contentArea.querySelector("span");
                const divElement = contentArea.querySelector("#text");

                if (progress >= 0.8) {
                  // When 80% scrolled, change text to gray-700
                  if (h2Element)
                    h2Element.className = "text-5xl font-bold text-black";
                  if (pElement) pElement.className = "text-black";
                  if (spanElement) spanElement.className = "text-black";
                  if (divElement) {
                    divElement.className = "txt text-gray-300";
                    // Update child elements
                    const childSpans = divElement.querySelectorAll("span");
                    childSpans.forEach(
                      (span) =>
                        (span.className = span.className.replace(
                          /text-\w+-\d+/g,
                          "text-white"
                        ))
                    );
                    const childDivs = divElement.querySelectorAll("div");
                    childDivs.forEach((div) => {
                      if (div.className.includes("text-gray-100")) {
                        div.className = div.className.replace(
                          /text-gray-100/g,
                          "text-gray-300"
                        );
                      }
                    });
                    const btn = divElement.querySelector(".btn");
                    if (btn)
                      btn.className = btn.className.replace(
                        /text-\w+/g,
                        "text-gray-300"
                      ).replace(
                        /border-\w+-\d+/g,
                        "border-gray-300"
                      );
                  }
                  contentArea.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                  contentArea.style.borderRadius = "20px";
                } else if (progress >= 0.4) {
                  // When 40% scrolled, make background black
                  if (h2Element)
                    h2Element.className = "text-5xl font-bold text-white";
                  if (pElement) pElement.className = "text-gray-300";
                  if (spanElement) spanElement.className = "text-white";
                  if (divElement) {
                    divElement.className = "txt text-white";
                    // Update child elements
                    const childSpans = divElement.querySelectorAll("span");
                    childSpans.forEach(
                      (span) =>
                        (span.className = span.className.replace(
                          /text-\w+-\d+/g,
                          "text-gray-100"
                        ))
                    );
                    const childDivs = divElement.querySelectorAll("div");
                    childDivs.forEach((div) => {
                      if (div.className.includes("text-gray-100")) {
                        div.className = div.className.replace(
                          /text-gray-100/g,
                          "text-white"
                        );
                      }
                    });
                    const btn = divElement.querySelector(".btn");
                    if (btn)
                      btn.className = btn.className.replace(
                        /text-\w+/g,
                        "text-white"
                      ).replace(
                        /border-\w+-\d+/g,
                        "border-white"
                      );
                  }
                  contentArea.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                  contentArea.style.borderRadius = "20px";
                } else {
                  // Less than 40%, keep original
                  if (h2Element)
                    h2Element.className = "text-5xl font-bold text-white";
                  if (pElement) pElement.className = "text-gray-300";
                  if (spanElement) spanElement.className = "text-white";
                  if (divElement) {
                    divElement.className = "txt text-gray-300";
                    // Update child elements
                    const childSpans = divElement.querySelectorAll("span");
                    childSpans.forEach(
                      (span) =>
                        (span.className = span.className.replace(
                          /text-\w+-\d+/g,
                          "text-gray-700"
                        ))
                    );
                    const childDivs = divElement.querySelectorAll("div");
                    childDivs.forEach((div) => {
                      if (!div.className.includes("text-gray-100")) {
                        div.className = div.className + " text-gray-700";
                      }
                    });
                    const btn = divElement.querySelector(".btn");
                    if (btn)
                      btn.className = btn.className.replace(
                        /text-\w+/g,
                        "text-gray-700"
                      ).replace(
                        /border-\w+-\d+/g,
                        "border-gray-700"
                      );
                  }
                  contentArea.style.backgroundColor = "transparent";
                  contentArea.style.borderRadius = "0px";
                }
              },
            });
          }
        } else {
          // Cards 2, 3, 4 - slide up animation
          gsap.fromTo(
            card,
            { yPercent: 100 },
            {
              yPercent: 0,
              ease: "none",
              scrollTrigger: {
                trigger: sections[index - 1],
                start: "top center",
                end: "bottom center",
                scrub: true,
              },
            }
          );

          // Content area change for cards 2, 3, 4
          if (contentArea) {
            ScrollTrigger.create({
              trigger: sections[index - 1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                console.log(`Card ${index} progress: ${progress}`);

                const h2Element = contentArea.querySelector("h2");
                const pElement = contentArea.querySelector("p");
                const spanElement = contentArea.querySelector("span");
                const divElement = contentArea.querySelector("#text");

                if (progress >= 1) {
                  // When 100% scrolled, change text to gray-100
                  if (h2Element)
                    h2Element.className = "text-5xl font-bold text-white";
                  if (pElement) pElement.className = "text-gray-100";
                  if (spanElement) spanElement.className = "text-white";
                  if (divElement) {
                    divElement.className = "txt text-gray-100";
                    // Update child elements
                    const childSpans = divElement.querySelectorAll("span");
                    childSpans.forEach(
                      (span) =>
                        (span.className = span.className.replace(
                          /text-\w+-\d+/g,
                          "text-white"
                        ))
                    );
                    const btn = divElement.querySelector(".btn");
                    if (btn)
                      btn.className = btn.className.replace(
                        /text-\w+/g,
                        "text-white"
                      ).replace(
                        /border-\w+-\d+/g,
                        "border-white"
                      );
                  }
                  contentArea.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                  contentArea.style.borderRadius = "20px";
                } else if (progress >= 0.4) {
                  // When 40% scrolled, make background black
                  if (h2Element)
                    h2Element.className = "text-5xl font-bold text-black";
                  if (pElement) pElement.className = "text-black";
                  if (spanElement) spanElement.className = "text-black";
                  if (divElement) {
                    divElement.className = "txt text-black border-black";
                    // Update child elements
                    const childSpans = divElement.querySelectorAll("span");
                    childSpans.forEach(
                      (span) =>
                        (span.className = span.className.replace(
                          /text-\w+-\d+/g,
                          "text-black"
                        ))
                    );
                    const btn = divElement.querySelector(".btn");
                    if (btn)
                      btn.className = btn.className.replace(
                        /text-\w+/g,
                        "text-black"
                      ).replace(
                        /border-\w+-\d+/g,
                        "border-black"
                      );
                  }

                  contentArea.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                  contentArea.style.borderRadius = "20px";
                } else {
                  // Less than 40%, keep original
                  if (h2Element)
                    h2Element.className = "text-5xl font-bold text-black";
                  if (pElement) pElement.className = "text-black";
                  if (spanElement) spanElement.className = "text-black";
                  if (divElement) {
                    divElement.className = "txt text-gray-300";
                    // Update child elements
                    const childSpans = divElement.querySelectorAll("span");
                    childSpans.forEach(
                      (span) =>
                        (span.className = span.className.replace(
                          /text-\w+-\d+/g,
                          "text-gray-300"
                        ))
                    );
                    const btn = divElement.querySelector(".btn");
                    if (btn)
                      btn.className = btn.className.replace(
                        /text-\w+/g,
                        "text-gray-300"
                      ).replace(
                        /border-\w+-\d+/g,
                        "border-gray-300"
                      );
                  }
                  contentArea.style.backgroundColor = "transparent";
                  contentArea.style.borderRadius = "0px";
                }
              },
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Floating div that follows cursor */}
      {cursorVisible && (
        <div
          className="fixed pointer-events-none z-[9999] bg-white rounded-[100px] py-10 px-5 text-black font-semibold shadow-lg"
          style={{
            left: cursorPosition.x + 20,
            top: cursorPosition.y - 50,
          }}
        >
          Case Study
        </div>
      )}

      <div ref={containerRef} className="relative main bg-black text-white">
        {/* Sticky container to hold stacked cards */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Card 1 */}
          <div className="stacked-card  absolute top-0 left-0 w-full h-full px-20 py-10 z-[1] flex justify-between items-center">
            <div className="content-area w-1/2 space-y-4 p-6 transition-all duration-300">
              <span className="text-gray-300">Case Study</span>
              <h2 className="text-3xl font-bold">Adidas</h2>
              <p className="text-gray-300 mb-10">
                Crafting innovation for the consumer markets with Adidas
              </p>
              <div id="text" className="txt text-gray-300">
                <span className=" mt-10">Result</span>
                <div className="flex txt space-x-4 mt-8">
                  <div className="flex flex-col items-center text-gray-100 txt">
                    <span className=" text-2xl font-bold">5M+</span>
                    <span className="txt font-semibold">App downloads</span>
                  </div>
                  <div className="line text-black w-[2px] h-12  bg-gray-300"></div>
                  <div className="flex flex-col items-center text-gray-100">
                    <span className=" text-2xl font-bold">5M+</span>
                    <span className=" font-semibold">App downloads</span>
                  </div>
                </div>
                <div className="btn py-2 px-2 w-[30vh] text-center  border border-gray-300 rounded-lg mt-6 hover:bg-blue-700 transition-colors duration-200">
                  View case study
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <div
                className="w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-xl"
                style={{
                  backgroundImage: `url(${Images[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="stacked-card  absolute top-0 left-0 w-full h-full px-20 py-10 z-[2] flex justify-between items-center">
            <div className="content-area w-1/2 space-y-4 p-6 transition-all duration-300">
              <h2 className="text-5xl font-bold">Adidas</h2>
              <p className="text-gray-300">
                Reimagining retail experiences worldwide
              </p>
              <div id="text" className="txt text-gray-300">
                <span className="text-gray-300 mt-10">Result</span>
                <div className="flex space-x-4 mt-8">
                  <div className="flex flex-col items-center">
                    <span className=" text-2xl font-bold">5M+</span>
                    <span className="txt font-semibold">App downloads</span>
                  </div>
                  <div className="line text-black w-[2px] h-12 bg-gray-300"></div>
                  <div className="flex flex-col items-center">
                    <span className=" text-2xl font-bold">5M+</span>
                    <span className=" font-semibold">App downloads</span>
                  </div>
                </div>
                <div className="btn py-2 px-2 w-[30vh] text-center  border border-gray-300 rounded-lg mt-6 hover:bg-blue-700 transition-colors duration-200">
                  View case study
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <div
                className="w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-xl bg-gray-200"
                style={{
                  backgroundImage: `url(${Images[1]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="stacked-card  absolute top-0 left-0 w-full h-full px-20 py-10 z-[3] flex justify-between items-center">
            <div className="content-area w-1/2 space-y-4 p-6 transition-all duration-300">
              <h2 className="text-5xl font-bold">Pizza Hut</h2>
              <p className="text-gray-300">
                Delivering fast UX for food lovers
              </p>
              <div id="text" className="txt text-gray-300">
                <span className="text-gray-300 mt-10">Result</span>
                <div className="flex space-x-4 mt-8">
                  <div className="flex flex-col items-center">
                    <span className="text-gray-300 text-2xl font-bold">
                      5M+
                    </span>
                    <span className="text-gray-300 font-semibold">
                      App downloads
                    </span>
                  </div>
                  <div className="line text-black w-[2px] h-12 bg-gray-300"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-300 text-2xl font-bold">
                      5M+
                    </span>
                    <span className="text-gray-300 font-semibold">
                      App downloads
                    </span>
                  </div>
                </div>
                <div className="btn py-2 px-2 w-[30vh] text-center text-white border border-gray-300 rounded-lg mt-6 hover:bg-blue-700 transition-colors duration-200">
                  View case study
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <div
                className="w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-xl bg-gray-200"
                style={{
                  backgroundImage: `url(${Images[2]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="stacked-card absolute top-0 left-0 w-full h-full px-20 py-10 z-[4] flex justify-between items-center">
            <div className="content-area w-1/2 space-y-4 p-6 transition-all duration-300">
              <h2 className="text-5xl font-bold">New Brand</h2>
              <p className="text-gray-300">Innovating the future of retail</p>
              <div id="text" className="txt text-gray-300">
                <span className="text-gray-300 mt-10">Result</span>
                <div className="flex space-x-4 mt-8">
                  <div className="flex flex-col items-center">
                    <span className="text-gray-300 text-2xl font-bold">
                      5M+
                    </span>
                    <span className="text-gray-300 font-semibold">
                      App downloads
                    </span>
                  </div>
                  <div className="line text-black w-[2px] h-12 bg-gray-300"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-300 text-2xl font-bold">
                      5M+
                    </span>
                    <span className="text-gray-300 font-semibold">
                      App downloads
                    </span>
                  </div>
                </div>
                <div className="btn py-2 px-2 w-[30vh] text-center text-white border border-gray-300 rounded-lg mt-6 hover:bg-blue-700 transition-colors duration-200">
                  View case study
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <div
                className="w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-xl bg-gray-200"
                style={{
                  backgroundImage: `url(${Images[3]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></div>
            </div>
          </div>

          {/* Card 5 - Bottom card with highest z-index */}
          <div className="stacked-card absolute bottom-0 left-0 w-full h-[100px] px-10 py-5 z-[10] bg-black flex justify-center items-center">
            <div className="text-center">
              {/* <h2 className="text-3xl font-bold text-white">Bottom Card</h2>
            <p className="text-white">This card is at the bottom with highest z-index</p> */}
            </div>
          </div>
        </div>

        {/* Trigger spacers – for each card */}
        <div className="trigger-section h-[100vh]" />
        <div className="trigger-section h-[100vh]" />
        <div className="trigger-section h-[100vh]" />
        <div className="trigger-section h-[100vh]" />
      </div>
    </>
  );
}
