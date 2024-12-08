import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { openWhatsApp } from "../OtherComponent/Whatsapp";

const imageItems = [
  { image: "/images/bestseller1.jpeg", title: "BURL EXECUTIVE DESK" },
  { image: "/images/bestseller2.jpeg", title: "ORION CONFERENCE DESK" },
  { image: "/images/bestseller3.webp", title: "AZURE RECEPTION DESK" },
  { image: "/images/bestseller4.webp", title: "ARCADE CONFERENCE DESK" },
  { image: "/images/bestseller5.jpeg", title: "JEWEL EXECUTIVE DESK" },
  { image: "/images/bestseller6.jpg", title: "BERLIN WORKSTATION" },
  { image: "/images/bestseller7.jpeg", title: "OPUS CONFERENCE DESK" },
  { image: "/images/bestseller8.jpeg", title: "HASH EXECUTIVE DESK" },
  { image: "/images/bestseller9.webp", title: "AMBER EXECUTIVE DESK" },
  { image: "/images/bestseller10.jpg", title: "OZARK WORKSTATION" },
  { image: "/images/bestseller11.jpeg", title: "BECK EXECUTIVE DESK" },
  { image: "/images/bestseller12.jpeg", title: "CRYSTAL CONFERENCE DESK" },
];

const ImageCard = ({ image, title }) => (
  <div className="flex flex-col">
    <img
      src={image}
      alt={title}
      className="w-[400px] h-[220px] object-cover mb-4"
    />
    <h3 className="text-left font-thin font-montserrat text-gray-800 mb-2">
      {title}
    </h3>
    <button
      onClick={openWhatsApp}
      className="w-max flex items-center gap-2 text-[12px] bg-[#267941] text-white font-montserrat font-thin px-4 py-2 rounded-full"
    >
      <FontAwesomeIcon icon={faWhatsapp} /> ENQUIRE PRICE
    </button>
  </div>
);

const BestSeller = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {imageItems.map((item, index) => (
          <ImageCard key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
