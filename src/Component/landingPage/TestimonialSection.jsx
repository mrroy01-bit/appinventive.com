import React from "react";

const TestimonialSection = () => {
return (
    <section className="bg-gradient-to-br from-[#0a0a2a] to-[#2e0057] text-white py-20 px-4 md:px-8">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-left mb-12">
            <h2 className="text-2xl md:text-5xl font-normal leading-tight">
                Our Clients Are Our Superheroes. We Prioritize Delivering Excellent
                Products, Thorough Training, And Optimal Execution
            </h2>
        </div>

        {/* Video Testimonials */}
        <div className="flex flex-wrap gap-5 justify-center">
            {[1, 2, 3, 4].map((_, idx) => (
                <div
                    key={idx}
                    className={`relative w-[250px] md:w-[250px] h-[360px] md:h-[380px] rounded-2xl shadow-xl bg-black/30 flex flex-col justify-end overflow-hidden ${
                        idx % 2 === 1 ? "mt-10" : ""
                    }`}
                >
                    <img
                        src="" // replace with actual thumbnails
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
                        <button className="bg-white/80 hover:bg-white text-black p-4 rounded-full transition">
                            ▶
                        </button>
                    </div>
                   
                </div>
                
            ))}
        </div>
            <button className="mt-16 ml-[40vw]  text-white border border-white p-4 rounded-full transition">
                View All Testimonials
            </button>
    </section>
);
};

export default TestimonialSection;
