import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-20 transform transition-all duration-300 ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="absolute inset-0 " onClick={onClose}></div>
      <aside className="fixed top-0 left-0 w-72 h-full bg-[#DDDDDD] shadow-lg z-30 p-4 overflow-y-auto">
        <button
          className="text-gray-600 hover:text-gray-900 mb-4 float-end"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center justify-center max-h-max mt-16">
          <div className="space-y-3 text-center py-4 w-full max-w-xs">
            <Link
              to="/product-category/desks/executive-desk"
              className="block text-md text-black font-montserrat bg-[#f0f0f0] hover:bg-white hover:text-black p-2 transition duration-300"
            >
              Desk
            </Link>
            <Link
              to="/product-category/chairs/executive-chair"
              className="block text-md text-black font-montserrat bg-[#f0f0f0] hover:bg-white hover:text-black p-2 transition duration-300"
            >
              Chair
            </Link>
            <Link
              to="/product-category/storage/filing-cabinet"
              className="block text-md text-black font-montserrat bg-[#f0f0f0] hover:bg-white hover:text-black p-2 transition duration-300"
            >
              Storage
            </Link>
            <Link
              to="/product-category/seating/sofa"
              className="block text-md text-black font-montserrat bg-[#f0f0f0] hover:bg-white hover:text-black p-2 transition duration-300"
            >
              Seating
            </Link>
            <Link
              to="/product-category/flooring/carpet"
              className="block text-md text-black font-montserrat bg-[#f0f0f0] hover:bg-white hover:text-black p-2 transition duration-300"
            >
              Flooring
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
