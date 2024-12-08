import React, { useState, useEffect } from "react";
import Navbar from "../Components/MainPageComponent/Navbar";
import NavbarContent from "../Components/MainPageComponent/NavbarContent";
import Footer from "../Components/MainPageComponent/Footer";
import ContactInfo from "../Components/OtherComponent/ContactInfo";
import { useModal } from "../Context/ModalProvider";
import AuthModal from "./Login";

const ContactUs = () => {
  const { handleCloseModal, isModalOpen } = useModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Check for empty fields
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.phone) validationErrors.phone = "Phone is required";
    if (!formData.message) validationErrors.message = "Message is required";

    setErrors(validationErrors);

    // If no errors, show success message
    if (Object.keys(validationErrors).length === 0) {
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000); // Hide success message after 5 seconds

      // Clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Navbar />
      <NavbarContent />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="w-full md:w-[40%] text-center">
            <h1 className="text-3xl sm:text-5xl font-medium text-gray-800 mb-4 font-montserrat">
              CONTACT US
            </h1>
            <p className="text-gray-600 ">
              Connect with our in-house specialists, share your office designing
              needs, and get an estimated quote right away!
            </p>
          </div>

          <div className="w-full md:w-[60%]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-gray-900 py-2 focus:border-gray-800 focus:outline-none"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-gray-900 py-2 focus:border-gray-800 focus:outline-none"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-gray-900 py-2 focus:border-gray-800 focus:outline-none"
                    placeholder="Phone"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-900 focus:border-gray-800 focus:outline-none resize-none"
                  placeholder="Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition duration-300"
              >
                Send
              </button>
            </form>
            {submitSuccess && (
              <p className="text-orange-500 text-center mt-4 font-montserrat">
                Your response was submitted successfully! We will reach you
                shortly.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7]">
        <ContactInfo />

        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62823.52120898486!2d55.17083535336362!3d25.138971493852196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d42772bc79d%3A0x205976ceee17c31!2sDESIGNCRAFT%20OFFICE%20FURNITURE!5e1!3m2!1sen!2s!4v1729933267103!5m2!1sen!2s"
            className="w-full h-[200px] sm:h-[300px] lg:h-[400px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />

      {isModalOpen && <AuthModal onClose={handleCloseModal} />}
    </>
  );
};

export default ContactUs;
