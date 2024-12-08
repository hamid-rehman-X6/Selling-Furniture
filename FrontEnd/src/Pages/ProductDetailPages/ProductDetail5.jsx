import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Star, Facebook, Twitter, Linkedin, Send, Pen } from "lucide-react";
import Navbar from "../../Components/MainPageComponent/Navbar";
import NavbarContent from "../../Components/MainPageComponent/NavbarContent";
import Footer from "../../Components/MainPageComponent/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  flooringAllImagesCarpet,
  flooringAllImagesLaminate,
} from "../Product-Category/Flooring/flooringImgSection";
import AuthModal from "../Login";
import { useModal } from "../../Context/ModalProvider";

const ProductDetailPage5 = () => {
  const { handleCloseModal, isModalOpen } = useModal();
  const { category, productId } = useParams();
  const productIdInt = parseInt(productId, 10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Select the correct product array based on the category
  let productData;
  if (category === "laminate") {
    productData = flooringAllImagesLaminate;
  } else if (category === "carpet") {
    productData = flooringAllImagesCarpet;
  }

  const product = productData.find((item) => item.id === productIdInt);

  if (!product) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Navbar />
      <NavbarContent />
      <div className="max-w-8xl px-4 pt-16 pb-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[68%_32%] gap-8">
          {/* Left side - Product Image */}
          <div className="relative order-1 lg:order-none">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Product Details */}
          <div className="order-2 lg:order-none">
            <div className="mb-4">
              <h1 className="text-2xl font-montserrat font-medium text-gray-900 mb-2">
                {product.title}
              </h1>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-black font-montserrat font-medium">
                  Share On:
                </span>
                <div className="flex space-x-3">
                  <button className="text-gray-600 hover:text-blue-600">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-blue-400">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-green-600">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-blue-500">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Specifications */}
            <div className="space-y-4">
              {product.specifications &&
                product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1 h-1 mt-2 bg-black rounded-full"></div>
                    <div className="ml-4">
                      <span className="text-black font-montserrat font-medium">
                        {spec.label}:
                      </span>
                      <span className="text-black font-montserrat font-medium ml-2">
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
            </div>

            {/* Product Category */}
            <div className="mt-8">
              <p className="text-md text-black font-semibold font-montserrat">
                Category:{" "}
                <span className="text-black font-thin ml-4 font-montserrat">
                  {product.sub_title}
                </span>
              </p>
            </div>
          </div>

          {/* Enquire Now Button  */}
          <div className="order-3 lg:order-none mt-4 lg:mt-0">
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center justify-center">
              <Pen className="w-4 h-4 mr-2" />
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
      {isModalOpen && <AuthModal onClose={handleCloseModal} />}
    </>
  );
};

export default ProductDetailPage5;
