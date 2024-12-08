import React, { useEffect } from "react";
import Navbar from "../Components/MainPageComponent/Navbar";
import NavbarContent from "../Components/MainPageComponent/NavbarContent";
import Footer from "../Components/MainPageComponent/Footer";
import AuthModal from "./Login";
import { useModal } from "../Context/ModalProvider";

const Blog = () => {
  const { handleCloseModal, isModalOpen } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <NavbarContent />

      <div className="bg-[#F3F3F3]">
        {" "}
        <br />
      </div>

      {/* for 1 */}
      <div className="bg-[#F3F3F3]">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-[40%]">
              <img
                src="/BlogImages/B-img1.jpeg" // Replace with actual image path
                alt="Luxury office interior"
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            {/* Text Content Section */}
            <div className="p-4 md:w-[60%]">
              <h2 className="text-xl md:text-2xl font-medium font-montserrat text-gray-800 mb-2">
                Luxury Office Furniture for High-end Spaces
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                September 30, 2024
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                When we talk about luxury office furniture, we imagine beautiful
                and expensive items that make an office look fancy and...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for 2 */}
      <div className="bg-[#F3F3F3]">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-[40%]">
              <img
                src="/BlogImages/B-img2.jpg" // Replace with actual image path
                alt="What is the Difference Between Open Desk and Closed Desk?"
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            {/* Text Content Section */}
            <div className="p-4 md:w-[60%]">
              <h2 className="text-xl md:text-2xl font-medium font-montserrat text-gray-800 mb-2">
                What is the Difference Between Open Desk and Closed Desk?
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                September 30, 2024
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Choosing the right type of desk for your workspace can be
                tricky. Should you go for an open desk, which...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for 3 */}
      <div className="bg-[#F3F3F3]">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-[40%]">
              <img
                src="/BlogImages/B-img3.jpeg" // Replace with actual image path
                alt="Luxury office interior"
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            {/* Text Content Section */}
            <div className="p-4 md:w-[60%]">
              <h2 className="text-xl md:text-2xl font-medium font-montserrat text-gray-800 mb-2">
                How to Choose Office Furniture for a Minimalist Work Environment
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                September 30, 2024
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Creating a minimalist office environment is all about keeping
                things simple and clean. Minimalism helps you focus, stay
                organized, and…
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for 4 */}
      <div className="bg-[#F3F3F3]">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-[40%]">
              <img
                src="/BlogImages/B-img4.jpeg" // Replace with actual image path
                alt="AI Integration in Office Furniture Design: The Future of Smart Workspaces"
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            {/* Text Content Section */}
            <div className="p-4 md:w-[60%]">
              <h2 className="text-xl md:text-2xl font-medium font-montserrat text-gray-800 mb-2">
                AI Integration in Office Furniture Design: The Future of Smart
                Workspaces
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                September 30, 2024
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Office furniture has come a long way. Once, a desk and a chair
                were just simple objects made from wood…
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for 5 */}
      <div className="bg-[#F3F3F3]">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-[40%]">
              <img
                src="/BlogImages/B-img5.jpeg" // Replace with actual image path
                alt="Customizable Office Tables for Dynamic Workspaces"
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            {/* Text Content Section */}
            <div className="p-4 md:w-[60%]">
              <h2 className="text-xl md:text-2xl font-medium font-montserrat text-gray-800 mb-2">
                Customizable Office Tables for Dynamic Workspaces
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                September 30, 2024
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Have you ever been in a room where everything felt stuck in
                place? Imagine trying to do a puzzle, but…
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for 6 */}
      <div className="bg-[#F3F3F3]">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-[40%]">
              <img
                src="/BlogImages/B-img6.jpeg" // Replace with actual image path
                alt="The Future of Smart Office Tables – 2024"
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            {/* Text Content Section */}
            <div className="p-4 md:w-[60%]">
              <h2 className="text-xl md:text-2xl font-medium font-montserrat text-gray-800 mb-2">
                The Future of Smart Office Tables – 2024
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                September 30, 2024
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Imagine a world where your office table not only holds your
                computer and papers but also knows when you’re tired…
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for 7 */}
      <div className="bg-[#F3F3F3]">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-[40%]">
              <img
                src="/BlogImages/B-img7.jpeg" // Replace with actual image path
                alt="The Future of Office Desk Design"
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            {/* Text Content Section */}
            <div className="p-4 md:w-[60%]">
              <h2 className="text-xl md:text-2xl font-medium font-montserrat text-gray-800 mb-2">
                The Future of Office Desk Design
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                September 30, 2024
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                In the past, office desks were simple wooden tables where people
                sat to work. But today, office desks have become…
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for 8 */}
      <div className="bg-[#F3F3F3]">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-[40%]">
              <img
                src="/BlogImages/B-img8.jpeg" // Replace with actual image path
                alt="Office Desk Trends in 2024"
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            {/* Text Content Section */}
            <div className="p-4 md:w-[60%]">
              <h2 className="text-xl md:text-2xl font-medium font-montserrat text-gray-800 mb-2">
                Office Desk Trends in 2024
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                September 30, 2024
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                In 2024, the world of office desks is changing in exciting ways!
                Whether you’re working from home or in an…
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {isModalOpen && <AuthModal onClose={handleCloseModal} />}
    </>
  );
};

export default Blog;
