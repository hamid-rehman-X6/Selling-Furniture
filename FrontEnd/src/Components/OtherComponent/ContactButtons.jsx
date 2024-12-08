import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { openWhatsApp } from "./Whatsapp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactButtons = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 animate-slide-in">
      <div className="flex flex-col space-y-[2px]">
        {/* Phone Button */}
        <a
          href="tel:+971504595483"
          className="bg-[#128BE0] p-3 md:p-4 transition-all duration-300 ease-in-out flex items-center justify-center group relative"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
          <span className="absolute right-full mr-2 bg-[#128BE0] text-white px-2 py-1 rounded text-sm md:text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Call Us
          </span>
        </a>

        {/* Email Button */}
        <a
          href="mailto:sales@designcraft.ae"
          className="bg-[#CC1010] p-3 md:p-4 transition-all duration-300 ease-in-out flex items-center justify-center group relative"
          aria-label="Email us"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
          <span className="absolute right-full mr-2 bg-[#CC1010] text-white px-2 py-1 rounded text-sm md:text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Email Us
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          onClick={openWhatsApp}
          //   href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#13990C] p-3 md:p-4 transition-all duration-300 ease-in-out flex items-center justify-center group relative"
          aria-label="Contact us on WhatsApp"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            color="#ffffff"
            className="w-5 h-5 md:w-6 md:h-6 text-white"
          />
          <span className="absolute right-full mr-2 bg-[#13990C] text-white px-2 py-1 rounded text-sm md:text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactButtons;
