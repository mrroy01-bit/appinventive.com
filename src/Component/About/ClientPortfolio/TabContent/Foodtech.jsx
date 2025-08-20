import React from "react";
import TabCard from "./TabCard";

const Foodtech = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      <TabCard
        logo="/kfc-logo.png"
        title="Helping the Americana Group’s KFC"
        description="Digitally transformed their business by launching seven innovative mobile apps across global markets."
        stats={[
          { label: "Higher Conversion Rate", value: "22%" },
          { label: "Average Rating on Stores", value: "4.5" },
          { label: "Orders per Day via App", value: "30K+" },
        ]}
        image="/kfc-food.jpg"
      />

      <TabCard
        logo="/pizza-hut-logo.png"
        title="Pizza Hut Mobile App"
        description="A fully-functional mobile app with an extensible and scalable architecture for a glitch-free user experience."
        stats={[
          { label: "Higher Conversion Rate", value: "30%" },
          { label: "Mobile App Downloads", value: "50K+" },
        ]}
        image="/pizza-hut-food.jpg"
      />
    </div>
  );
};

export default Foodtech;
