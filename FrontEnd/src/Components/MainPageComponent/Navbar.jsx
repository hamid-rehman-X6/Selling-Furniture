import { Mail, Phone, Smartphone, User } from "lucide-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useModal } from "../../Context/ModalProvider";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { handleLoginClick } = useModal();
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));

  // Check token presence on component mount and when cookies change
  useEffect(() => {
    const handleTokenChange = () => setIsLoggedIn(!!Cookies.get("token"));
    handleTokenChange();

    window.addEventListener("storage", handleTokenChange);
    return () => window.removeEventListener("storage", handleTokenChange);
  }, []);

  return (
    <nav className="bg-white">
      <div className="container py-[2px] flex items-center justify-between min-w-full">
        {/* Logo */}
        <div className="ml-1">
          <Link to="/" className="flex items-center">
            <img
              src="/images/new-logo.png"
              alt="Design Craft Logo"
              className="w-[350px]"
            />
          </Link>
        </div>

        {/* Right Container */}
        <div className="right-container flex-wrap hidden lg:flex items-center justify-end space-x-2 ml-auto mr-8 lg:flex-row md:flex-col">
          {/* Contact Links */}
          <div className="flex gap-6">
            <Link
              to="mailto:sales@designcraft.ae"
              className="flex items-center text-black font-medium text-lg hover:text-[#FF9149] transition-colors duration-300"
            >
              <Mail className="h-6 w-6 mr-1 transition-transform duration-300 hover:scale-110" />
              sales@designcraft.ae
            </Link>
            <Link
              to="tel:043373446"
              className="flex items-center text-black font-medium text-lg hover:text-[#FF9149] transition-colors duration-300"
            >
              <Phone className="h-6 w-6 mr-1 transition-transform duration-300 hover:scale-110" />
              0433 734 46
            </Link>
            <Link
              to="tel:+971557349696"
              className="flex items-center text-black font-medium text-lg hover:text-[#FF9149] transition-colors duration-300"
            >
              <Smartphone className="h-6 w-6 mr-1 transition-transform duration-300 hover:scale-110" />
              +971 55 734 9696
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-2 mt-2">
            <Link
              to="https://www.facebook.com/people/Designcraftae/61551538633956/?mibextid=ZbWKwL"
              className="bg-[#7A7A7A] rounded-full flex items-center justify-center p-[6px] hover:bg-[#FF9149] transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#ffffff" }}
                className="h-4 w-4"
              />
            </Link>
            <Link
              to="https://www.instagram.com/design_craft_official?igshid=MzRlODBiNWFlZA%3D%3D"
              className="bg-[#7A7A7A] rounded-full flex items-center justify-center p-[6px] hover:bg-[#FF9149] transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ffffff" }}
                className="h-4 w-4"
              />
            </Link>
          </div>
        </div>

        {/* Login Icon */}
        {!isLoggedIn && (
          <div className="ml-auto flex md:justify-end md:mr-8">
            <button
              onClick={handleLoginClick}
              className="bg-[#F7F7F7] hover:bg-[#E3E3E3] rounded-full p-2 transition-all duration-300"
            >
              <img
                src="/images/authImg.png"
                alt="authImg"
                className="h-8 w-8 rounded-full transition-transform duration-300 hover:scale-110"
              />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
