import React, { useState } from "react";
import { conferenceGallery } from "./galleryimages";
import Navbar from "../../Components/MainPageComponent/Navbar";
import NavbarContent from "../../Components/MainPageComponent/NavbarContent";
import Footer from "../../Components/MainPageComponent/Footer";
import { useModal } from "../../Context/ModalProvider";
import AuthModal from "../Login";

const ConferenceGallery = () => {
  const { handleCloseModal, isModalOpen } = useModal();

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModelOpen(true);
  };

  const closeModal = () => {
    setIsModelOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % conferenceGallery.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + conferenceGallery.length) % conferenceGallery.length
    );
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F3F3F3]">
        <NavbarContent />

        <div className="mt-2">
          <h1 className="text-center text-4xl font-bold font-montserrat mb-24">
            GALLERY
          </h1>

          <h1 className="text-4xl font-montserrat font-extralight px-4 text-gray-800">
            CONFERENCE DESK - PROJECT IMAGES
          </h1>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {conferenceGallery.map(({ id, img }, index) => (
              <div
                key={id}
                className="cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={img}
                  alt={`Conference Desk ${id}`}
                  className="w-[200px] h-[160px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for full image view with slider */}
      {isModelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          <div className="relative flex items-center">
            {/* Previous Button */}
            <button onClick={prevImage} className="text-white text-3xl p-4">
              &#8592;
            </button>

            {/* Display current image */}
            <img
              src={conferenceGallery[currentImageIndex].img}
              alt={`Conference Desk ${conferenceGallery[currentImageIndex].id}`}
              className="max-w-[90%] max-h-[80vh] object-contain"
            />

            {/* Next Button */}
            <button onClick={nextImage} className="text-white text-3xl p-4">
              &#8594;
            </button>
          </div>
        </div>
      )}

      <Footer />
      {isModalOpen && <AuthModal onClose={handleCloseModal} />}
    </>
  );
};

export default ConferenceGallery;
