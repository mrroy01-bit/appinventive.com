const Hero = () => {
  return (
    
    <div className="h-[30rem] text-white w-full bg-black flex flex-col items-center justify-center text-center px-4">
      {/* Small Heading */}
      <h3 className="text-xl font-bold mb-4">Case Studies</h3>

      {/* Gradient Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Optimize.{" "}
        </span>
        Innovate. Disrupt
      </h1>

      {/* Subtext */}
      <p className="max-w-2xl text-sm md:text-base">
        Success stories that demonstrate our expertise to deliver technology-led
        business breakthroughs across startups, global brands, and Fortune 500s
      </p>
    </div>
  );
};

export default Hero;
