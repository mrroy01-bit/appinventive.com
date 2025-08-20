import TabCard from "./TabCard";

const Ecommerce = () => {
  const eCommerceContent = [
    {
      logo: "/logos/6thstreet.png",
      title: "6thStreet",
      description:
        "A next-gen fashion e-commerce platform offering shoes, bags, and accessories from global brands.",
      stats: [
        { label: "iOS App Downloads", value: "3M+" },
        { label: "Android App Downloads", value: "1M+" },
      ],
      image: "/images/fashion.jpg",
    },
    {
      logo: "/logos/edamama.png",
      title: "Edamama",
      description:
        "A parenting-focused e-commerce platform simplifying shopping for moms with curated products and services.",
      stats: [
        { label: "Mothers Served", value: "100K+" },
        { label: "Funding Raised", value: "$5M" },
      ],
      image: "/images/mom-kid.jpg",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {eCommerceContent.map((card, idx) => (
        <TabCard key={idx} {...card} />
      ))}
    </div>
  );
};

export default Ecommerce;
