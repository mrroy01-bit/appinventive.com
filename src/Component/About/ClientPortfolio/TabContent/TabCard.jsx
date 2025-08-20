const TabCard = ({ logo, title, description, stats, image }) => {
  return (
    <div
      className={
        "rounded-2xl p-6 flex flex-col justify-between transition-all ease-in-out duration-300 bg-black hover:bg-neutral-900"
      }
    >
      {/* Top Content */}
      <div>
        <img src={logo} alt="logo" className="h-10 mb-4" />
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-neutral-400 text-sm mt-2">{description}</p>

        {/* Stats */}
        <div className="flex gap-6 mt-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-white font-semibold">{stat.value}</span>
              <span className="text-neutral-400 text-xs">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Image */}
      <div className="mt-6">
        <img
          src={image}
          alt="food"
          className="rounded-xl w-full object-cover"
        />
      </div>
    </div>
  );
};

export default TabCard;
