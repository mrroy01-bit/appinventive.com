const InnerFooter = () => {
  return (
    <>
      <div
        className="h-[30rem] w-full flex flex-col items-center justify-center text-center px-6
      bg-gradient-to-b from-black via-[#0b0c2a] to-[#1a0033] text-white relative"
      >
        <p className="text-xl md:text-2xl font-medium max-w-2xl mb-8">
          Our agile solutions have resulted in recurring collaborations with
          leading enterprises like
          <span className="font-bold"> IKEA, Adidas, KPMG</span>, and many more.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">
          Partner With Us →
        </button>
      </div>

     
    </>
  );
};

export default InnerFooter;
