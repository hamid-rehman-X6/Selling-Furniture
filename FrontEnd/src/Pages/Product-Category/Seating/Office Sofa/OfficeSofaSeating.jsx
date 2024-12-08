import React, { useEffect } from "react";
import { seatingAllImagesOfficeSofa } from "./../seatingImgSection";
import Navbar from "../../../../Components/MainPageComponent/Navbar";
import NavbarContent from "../../../../Components/MainPageComponent/NavbarContent";
import Footer from "../../../../Components/MainPageComponent/Footer";
import { Link } from "react-router-dom";
import AuthModal from "../../../Login";
import { useModal } from "../../../../Context/ModalProvider";

const OfficeSofaSeating = () => {
  const { handleCloseModal, isModalOpen } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <NavbarContent />
      <div className="p-6 bg-gray-100 text-center">
        <h1 className="text-3xl font-montserrat font-normal mt-8 mb-6">
          Office Sofa
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {seatingAllImagesOfficeSofa.map((office) => (
            <Link
              to={`/product/seating/office-sofa/${office.id}`}
              key={office.id}
              className="bg-[#FFFFFF] p-1 text-center"
            >
              <img
                src={office.img}
                alt={office.title}
                className="w-full h-64 object-cover"
              />
              <h2 className="my-4 text-lg font-montserrat text-gray-800">
                {office.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
      {isModalOpen && <AuthModal onClose={handleCloseModal} />}
    </>
  );
};

export default OfficeSofaSeating;
