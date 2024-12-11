import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Design Ideas",
    path: "/",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-[#7A7A7A] text-white py-8 font-montserrat">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
            {/* Showroom Timings and Address */}
            <div>
              <h3 className="font-bold mb-4 uppercase">Showroom Timings :</h3>
              <p className="mb-2">Monday to Saturday</p>
              <p>9:00 AM - 7:00 PM</p>
              <h3 className="font-bold mt-4 mb-4 uppercase">Address:</h3>
              <p>Abdul Razzaq Mohiddin</p>
              <p>Abdulla Warehouse Shed No-1</p>
              <p>Opp. Pedal Art Al Quoz</p>
              <p>Industrial Area - 1</p>
              <p>Dubai</p>
            </div>
            {/* Contact Information */}
            <div>
              <h3 className="font-bold mb-4 uppercase">Call Us:</h3>
              <p className="mb-2 hover:text-[#FF9149] transition-colors duration-300 cursor-pointer">
                Ph: 971556961430
              </p>
              <p className="mb-2 hover:text-[#FF9149] transition-colors duration-300 cursor-pointer">
                T: +971 55 696 1430
              </p>
              <p className="hover:text-[#FF9149] transition-colors duration-300 cursor-pointer">
                T: +971 55 696 1430
              </p>
              <h3 className="font-bold mt-4 mb-4 uppercase">Email:</h3>
              <Link to="mailto:info@designcraft.ae">
                <p className="mb-2 cursor-pointer hover:text-[#FF9149] text-sm transition-colors duration-300">
                  Sweetbrotherjarwar@gmail.com
                </p>
              </Link>
              <Link to="mailto:sales@designcraft.ae">
                <p className="hover:text-[#FF9149] transition-colors text-sm duration-300 cursor-pointer">
                  Sweetbrotherjarwar@gmail.com
                </p>
              </Link>
            </div>
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/footer-logo.png"
                  alt="Design Craft Logo"
                  className="w-[250px] h-[80px]"
                />
              </div>
              <p className="text-center mb-4">
                Design Craft is a state-of-the-art furniture manufacturer and
                interior designer adept at offering contemporary designs for
                your workplace. Our office furniture in Dubai has aided in
                overhauling companies with a dream work area by understanding
                the significance of furniture in workplaces.
              </p>
              <div className="flex justify-center items-center space-x-4">
                <Link
                  to="#"
                  className="bg-[#AEAEAE] rounded-full p-2 w-8 h-8 flex justify-center items-center  hover:bg-[#FF9149] transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
                </Link>
                <Link
                  to="#"
                  className="bg-[#AEAEAE] rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-[#FF9149] transition-all duration-300 "
                >
                  <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
                </Link>
                <Link
                  to="#"
                  className="bg-[#AEAEAE] rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-[#FF9149] transition-all duration-300 "
                >
                  <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Quick Links */}
            <div className="hidden lg:block">
              {" "}
              {/* Hide on smaller screens */}
              <h3 className="font-bold mb-4 uppercase">Quick Links</h3>
              <ul className="flex flex-col gap-2">
                {footerLinks?.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="hover:text-[#FF9149] transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Copyright */}
      <div className="text-center p-5 text-sm bg-[#5D5D5D]">
        <p className="text-white font-montserrat pb-2">
          © 2022-2023 Designcraft. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
