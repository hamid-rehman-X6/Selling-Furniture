import React, { useEffect } from "react";
import Navbar from "../Components/MainPageComponent/Navbar";
import NavbarContent from "../Components/MainPageComponent/NavbarContent";
import Footer from "../Components/MainPageComponent/Footer";
import { Link } from "react-router-dom";
import { useModal } from "../Context/ModalProvider";
import AuthModal from "./Login";

const images = [
  {
    src: "/GalleryImages/G-img1.jpeg",
    title: "Executive Desk Project Images",
    path: "/gallery/executive-desk-gallery",
  },
  {
    src: "/GalleryImages/G-img2.jpeg",
    title: "Workstation Project Images",
    path: "/gallery/workstation-gallery",
  },
  {
    src: "/GalleryImages/G-img3.webp",
    title: "Conference Desk Project Images",
    path: "/gallery/conference-gallery",
  },
  {
    src: "/GalleryImages/G-img4.jpeg",
    title: "Reception Desk Project Images",
    path: "/gallery/reception-desk-gallery",
  },
  {
    src: "/GalleryImages/G-img5.webp",
    title: "Storage Project Images",
    path: "/gallery/storage-gallery",
  },
];

const Gallery = () => {
  const { handleCloseModal, isModalOpen } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <NavbarContent />

      <div className="bg-[#F3F3F3]">
        <div className=" max-w-5xl mx-auto px-4 pt-4 pb-20">
          <h1 className="text-center text-4xl font-bold font-montserrat mb-32">
            GALLERY
          </h1>

          {/* Grid layout for images */}
          <div className="grid grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-2">
            {/* First two rows with two images each */}
            {images.slice(0, 4).map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <Link to={image.path}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="rounded-[50px] w-[450px] h-64 object-cover mb-4 transition-transform duration-300 ease-out transform hover:scale-105 cursor-pointer"
                  />
                  <h2 className="text-4xl font-thin">{image.title}</h2>
                </Link>
              </div>
            ))}
          </div>

          {/* Third row with one image centered */}
          <div className="mt-32 flex">
            <div className="flex flex-col items-center">
              <Link to={images[4].path}>
                <img
                  src={images[4].src}
                  alt={images[4].title}
                  className="rounded-[50px] w-[450px] h-64 object-cover mb-4 transition-transform duration-300 ease-out transform hover:scale-105 cursor-pointer"
                />
                <h2 className="text-4xl font-thin">{images[4].title}</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {isModalOpen && <AuthModal onClose={handleCloseModal} />}
    </>
  );
};

export default Gallery;
