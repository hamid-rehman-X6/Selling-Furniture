import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-orange-500 ">
    {/* Icon Section */}
    <div className="bg-[#EF9225] rounded-full w-24 h-24 flex items-center justify-center mb-4">
      <img src={icon} alt={title} className="w-18 h-18 rounded-full" />
    </div>

    {/* Title Section */}
    <h3 className="text-md font-thin font-montserrat my-6 text-gray-800 text-left">
      {title}
    </h3>

    {/* Description Section */}
    <p className="text-sm text-gray-600 font-thin tracking-wide font-montserrat text-left">
      {description}
    </p>
  </div>
);

export default function MakesUsDiff() {
  const features = [
    {
      icon: "/images/ergonomous.png",
      title: "ERGONOMIC OFFICE FURNITURE'S",
      description:
        "Creating a workspace with an ergonomically correct desk, chair, and computer monitor position can prevent back, neck, wrist, and shoulder pains also known as work-related musculoskeletal disorders. At Design Craft, we prioritize designing an environment that fits the worker and not the other way.",
    },
    {
      icon: "/images/space.png",
      title: "SPACE MANAGEMENT",
      description:
        "Choosing furniture that fits the available space without making the office feel cramped is very important. Choose modular furniture if you have very little space. Design Craft's multifunctional desks with built-in storage solutions can maximize space utilization while maintaining functionality & aesthetics.",
    },
    {
      icon: "/images/quality.png",
      title: "QUALITY",
      description:
        "Investing in high-quality furniture seems costly but pays off in the long run. Quality furniture is more durable and ensures longevity, reducing the frequency of replacements. Also, well-built furniture comes with a warranty and assurance. But at Design Craft we make high-quality furniture affordable for everyone.",
    },
  ];

  return (
    <div className="container mx-auto mt-16 px-4 py-12">
      <h2 className="text-2xl font-thin font-montserrat text-center mb-12 text-gray-800">
        WHAT MAKES US DIFFERENT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
