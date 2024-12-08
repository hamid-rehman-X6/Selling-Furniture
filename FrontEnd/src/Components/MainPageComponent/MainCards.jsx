import React from "react";

const FeatureCard = ({ image, title, description }) => (
  <div className="bg-[#EDEDED] flex flex-col rounded-[50px] items-center text-center shadow-lg relative">
    {/* Image */}
    <div className="flex justify-center items-center">
      <img src={image} alt={title} className="w-[250px] object-contain" />
    </div>
    {/* Title and Description */}
    <div className="bg-white p-4 h-[140px] rounded-2xl w-full">
      <h3 className="text-md font-bold mb-2 font-montserrat hover:text-blue-500">
        {title}
      </h3>
      <p className="text-sm font-montserrat text-gray-600">{description}</p>
    </div>
  </div>
);

const CardImagesLink = [
  {
    id: 1,
    img: "/images/SB-img.png",
  },
  {
    id: 2,
    img: "/images/UAE-img.png",
  },
  {
    id: 3,
    img: "/images/Delivery-img.png",
  },
];

export default function MainCards() {
  const features = [
    {
      image: CardImagesLink[0].img,
      title: "SPACE & BUDGET",
      description:
        "Our office furniture's are tailor made according to your space and budget. We provide a free design consultation and 3D design before starting any project.",
    },
    {
      image: CardImagesLink[1].img,
      title: "MANUFACTURED IN UAE",
      description:
        "All of our products are carefully handcrafted at our factory in UAE. We offer supply and installation allover UAE and MENA region.",
    },
    {
      image: CardImagesLink[2].img,
      title: "DELIVERY",
      description:
        "We provide free delivery and installation. After the approval of 3D design we will deliver products within 5 Days.",
    },
  ];

  return (
    <div className="container mt-16 mx-auto w-full max-w-[1200px] max-h-max px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}
