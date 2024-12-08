import React, { useEffect } from "react";
import { chairAllImagesExecutive } from "./../chairImgSection";
import Navbar from "../../../../Components/MainPageComponent/Navbar";
import NavbarContent from "../../../../Components/MainPageComponent/NavbarContent";
import Footer from "../../../../Components/MainPageComponent/Footer";
import { Link } from "react-router-dom";
import { useModal } from "../../../../Context/ModalProvider";
import AuthModal from "../../../Login";

const ExecutiveChair = () => {
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
          Executive Chair
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {chairAllImagesExecutive.map((exec) => (
            <Link
              to={`/product/chair/executive-chair/${exec.id}`}
              key={exec.id}
              className="bg-[#FFFFFF] p-1 text-center"
            >
              <img
                src={exec.img}
                alt={exec.title}
                className="w-full h-80 object-cover"
              />
              <h2 className="my-4 text-lg font-montserrat text-gray-800">
                {exec.title}
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

export default ExecutiveChair;
