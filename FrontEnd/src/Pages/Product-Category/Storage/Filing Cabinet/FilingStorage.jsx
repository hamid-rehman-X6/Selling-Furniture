import React, { useEffect } from "react";
import { storageAllImagesFiling } from "./../storageImgSection";
import Navbar from "../../../../Components/MainPageComponent/Navbar";
import NavbarContent from "../../../../Components/MainPageComponent/NavbarContent";
import Footer from "../../../../Components/MainPageComponent/Footer";
import { Link } from "react-router-dom";
import AuthModal from "../../../Login";
import { useModal } from "../../../../Context/ModalProvider";

const FilingStorage = () => {
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
          Filing Storage
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {storageAllImagesFiling.map((storage) => (
            <Link
              to={`/product/storage/filing-cabinet/${storage.id}`}
              key={storage.id}
              className="bg-[#FFFFFF] p-1 text-center"
            >
              <img
                src={storage.img}
                alt={storage.title}
                className="w-full h-64 object-cover"
              />
              <h2 className="my-4 text-lg font-montserrat text-gray-800">
                {storage.title}
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

export default FilingStorage;
