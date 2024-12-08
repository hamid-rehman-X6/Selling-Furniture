import React, { useEffect } from "react";
import Navbar from "../Components/MainPageComponent/Navbar";
import NavbarContent from "../Components/MainPageComponent/NavbarContent";
import Footer from "../Components/MainPageComponent/Footer";
import AboutAccordian from "../Components/OtherComponent/AboutAccordian";
import { useModal } from "../Context/ModalProvider";
import AuthModal from "./Login";

const AboutUs = () => {
  const { handleCloseModal, isModalOpen } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <NavbarContent />

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-4 my-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-medium font-montserrat">
            ABOUT US
          </h1>
          <div className="mt-6">
            <img
              src="/images/D&C-IMG.jpg"
              alt="About Us"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 font-montserrat">
          <h1 className="text-lg font-medium text-center md:text-left">
            MAKING INTERIOR TENANT SPACES EFFICIENT
          </h1>
          <p className="mt-2 text-gray-700 text-justify">
            Our services range from early concept visioning and programming
            analysis, to construction documents, to construction administration.
            Fluent has the knowledge, experience, and network of industry
            professionals to deliver full-service products. We work with
            architects, design-build contractors, furniture dealers, structural
            engineers, local artists, and makers.
          </p>
        </div>
      </div>

      <AboutAccordian />

      <Footer />

      {isModalOpen && <AuthModal onClose={handleCloseModal} />}
    </>
  );
};

export default AboutUs;
