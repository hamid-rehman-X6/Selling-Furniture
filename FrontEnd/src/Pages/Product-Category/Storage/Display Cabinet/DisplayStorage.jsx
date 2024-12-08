import React, { useEffect } from "react";
import { storageAllImagesDisplay } from "./../storageImgSection";
import Navbar from "../../../../Components/MainPageComponent/Navbar";
import NavbarContent from "../../../../Components/MainPageComponent/NavbarContent";
import Footer from "../../../../Components/MainPageComponent/Footer";
import { Link } from "react-router-dom";
import { useModal } from "../../../../Context/ModalProvider";
import AuthModal from "../../../Login";

const DisplayStorage = () => {
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
          Display Storage
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {storageAllImagesDisplay.map((display) => (
            <Link
              to={`/product/storage/display-cabinet/${display.id}`}
              key={display.id}
              className="bg-[#FFFFFF] p-1 text-center"
            >
              <img
                src={display.img}
                alt={display.title}
                className="w-full h-72 object-cover"
              />
              <h2 className="my-4 text-lg font-montserrat text-gray-800">
                {display.title}
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

export default DisplayStorage;
