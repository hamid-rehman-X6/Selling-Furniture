import React from "react";
import { useNavigate } from "react-router-dom";

const furnitureItems = [
  { image: "/images/officeF-1.png", name: "EXECUTIVE DESK" },
  { image: "/images/officeF-2.png", name: "WORKSTATION" },
  { image: "/images/officeF-3.png", name: "RECEPTION DESK" },
  { image: "/images/officeF-4.png", name: "CONFERENCE DESK" },
  { image: "/images/officeF-5.png", name: "CHAIRS" },
  { image: "/images/officeF-6.png", name: "STORAGE" },
];

const FurnitureCard = ({ image, name }) => {
  const navigate = useNavigate();

  const getRouteForName = (name) => {
    switch (name) {
      case "EXECUTIVE DESK":
        return "/product-category/desks/executive-desk";
      case "WORKSTATION":
        return "/product-category/desks/office-desk";
      case "RECEPTION DESK":
        return "/product-category/desks/reception-desk";
      case "CONFERENCE DESK":
        return "/product-category/desks/conference-desk";
      case "CHAIRS":
        return "/product-category/chairs/executive-chair";
      case "STORAGE":
        return "/product-category/storage/filing-cabinet";
      default:
        return "/";
    }
  };

  const handleClick = () => {
    const route = getRouteForName(name);
    navigate(route);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out group cursor-pointer"
    >
      <div className="flex flex-col items-center">
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            width={100}
            height={100}
            className="transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
        <h3 className="text-sm font-thin font-montserrat text-center text-gray-800">
          {name}
        </h3>
      </div>
    </div>
  );
};

// Main component that displays all furniture items
const OfficeFurnitureCard = () => {
  return (
    <div className="container mx-auto px-28 py-8 mt-24">
      <h2 className="text-2xl font-thin font-montserrat text-center mb-8 text-gray-600">
        OFFICE FURNITURE SOLUTIONS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {furnitureItems.map((item, index) => (
          <FurnitureCard key={index} image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default OfficeFurnitureCard;
