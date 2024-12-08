import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import SideBar from "../OtherComponent/SideBar";

const NavItem = ({ label, options = [], isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        className={`flex items-center justify-between w-full ${
          isMobile ? "py-2 px-4 bg-gray-200" : "space-x-1"
        } text-gray-700 hover:text-orange-400 hover:underline hover:underline-offset-8 hover:decoration-orange-400 transition duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        {options.length > 0 && <ChevronDown className="w-4 h-4" />}
      </button>

      {options.length > 0 && isOpen && (
        <div
          className={`absolute left-0 mt-1 w-max shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
            isMobile ? "relative mt-0 max-h-48 overflow-y-auto" : ""
          }`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map(({ label: optionLabel, path }) => (
              <Link
                key={optionLabel}
                to={path}
                className="block px-4 py-3 text-md text-black font-montserrat hover:bg-orange-400"
                role="menuitem"
              >
                {optionLabel}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function NavbarContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [originalPosition, setOriginalPosition] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Set original position of the navbar
    setOriginalPosition(navbarRef.current?.getBoundingClientRect().top);

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > originalPosition) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [originalPosition]);

  return (
    <nav
      ref={navbarRef}
      id="main-navbar"
      className={`bg-gray-100 shadow-md z-10  transition-all duration-300 ${
        isFixed ? "fixed top-0 left-0 w-full" : "relative"
      }`}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="flex justify-between items-center h-12">
          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-wrap space-x-14  mx-auto font-normal tracking-wide text-lg">
            <NavItem
              label="Desk"
              options={[
                {
                  label: "Executive Desk",
                  path: "/product-category/desks/executive-desk",
                },
                {
                  label: "Economic Desk",
                  path: "/product-category/desks/economic-desk",
                },
                {
                  label: "Reception Desk",
                  path: "/product-category/desks/reception-desk",
                },
                {
                  label: "Office Desk",
                  path: "/product-category/desks/office-desk",
                },
                {
                  label: "Conference Desk",
                  path: "/product-category/desks/conference-desk",
                },
                {
                  label: "Coffee Table",
                  path: "/product-category/desks/coffeetable-desk",
                },
              ]}
            />
            <NavItem
              label="Chair"
              options={[
                {
                  label: "Executive Chair",
                  path: "/product-category/chairs/executive-chair",
                },
                {
                  label: "Manager Chair",
                  path: "/product-category/chairs/manager-chair",
                },
                {
                  label: "Operator Chair",
                  path: "/product-category/chairs/operator-chair",
                },
                {
                  label: "Meeting Chair",
                  path: "/product-category/chairs/meeting-chair",
                },
              ]}
            />
            <NavItem
              label="Storage"
              options={[
                {
                  label: "Filing Cabinet",
                  path: "/product-category/storage/filing-cabinet",
                },
                {
                  label: "Pedestal",
                  path: "/product-category/storage/pedestal",
                },
                {
                  label: "Display Cabinet",
                  path: "/product-category/storage/display-cabinet",
                },
              ]}
            />
            <NavItem
              label="Seating"
              options={[
                {
                  label: "Office Sofa",
                  path: "/product-category/seating/sofa",
                },
                {
                  label: "Lounge",
                  path: "/product-category/seating/lounge",
                },
              ]}
            />
            <NavItem
              label="Flooring"
              options={[
                {
                  label: "Carpet",
                  path: "/product-category/flooring/carpet",
                },
                {
                  label: "Laminate",
                  path: "/product-category/flooring/laminate",
                },
              ]}
            />
            <Link to={"/gallery"}>
              <NavItem label="Gallery" />
            </Link>
            <Link to={"/blogs"}>
              <NavItem label="Blogs" />
            </Link>
            <Link to={"/about"}>
              <NavItem label="About Us" />
            </Link>
            <Link to={"/contact"}>
              <NavItem label="Contact Us" />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsSearchSidebarOpen(true)}
            >
              <Search className="w-8 h-8 text-orange-400" />
            </button>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Search Icon */}
          <div className="hidden lg:block">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsSearchSidebarOpen(true)}
            >
              <Search className="w-8 h-8 text-orange-400" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavItem
                label="Desk"
                options={[
                  {
                    label: "Executive Desk",
                    path: "/product-category/desks/executive-desk",
                  },
                  {
                    label: "Economic Desk",
                    path: "/product-category/desks/economic-desk",
                  },
                  {
                    label: "Reception Desk",
                    path: "/product-category/desks/reception-desk",
                  },
                  {
                    label: "Office Desk",
                    path: "/product-category/desks/office-desk",
                  },
                  {
                    label: "Conference Desk",
                    path: "/product-category/desks/conference-desk",
                  },
                  {
                    label: "Coffee Table",
                    path: "/product-category/desks/coffeetable-desk",
                  },
                ]}
                isMobile={true}
              />
              <NavItem
                label="Chair"
                options={[
                  {
                    label: "Executive Chair",
                    path: "/product-category/chairs/executive-chair",
                  },
                  {
                    label: "Manager Chair",
                    path: "/product-category/chairs/manager-chair",
                  },
                  {
                    label: "Operator Chair",
                    path: "/product-category/chairs/operator-chair",
                  },
                  {
                    label: "Meeting Chair",
                    path: "/product-category/chairs/meeting-chair",
                  },
                ]}
                isMobile={true}
              />
              <NavItem
                label="Storage"
                options={[
                  {
                    label: "Filing Cabinet",
                    path: "/product-category/storage/filing-cabinet",
                  },
                  {
                    label: "Pedestal",
                    path: "/product-category/storage/pedestal",
                  },
                  {
                    label: "Display Cabinet",
                    path: "/product-category/storage/display-cabinet",
                  },
                ]}
                isMobile={true}
              />
              <NavItem
                label="Seating"
                options={[
                  {
                    label: "Office Sofa",
                    path: "/product-category/seating/sofa",
                  },
                  {
                    label: "Lounge",
                    path: "/product-category/seating/lounge",
                  },
                ]}
                isMobile={true}
              />
              <NavItem
                label="Flooring"
                options={[
                  {
                    label: "Carpet",
                    path: "/product-category/flooring/carpet",
                  },
                  {
                    label: "Laminate",
                    path: "/product-category/flooring/laminate",
                  },
                ]}
                isMobile={true}
              />
              <Link to={"/gallery"}>
                <NavItem label="Gallery" isMobile={true} />
              </Link>

              <Link to={"/blogs"}>
                <NavItem label="Blogs" isMobile={true} />
              </Link>

              <Link to={"/about"}>
                <NavItem label="About Us" isMobile={true} />
              </Link>

              <Link to={"/contact"}>
                <NavItem label="Contact Us" isMobile={true} />
              </Link>
            </div>
          </div>
        )}
      </div>
      <SideBar
        isOpen={isSearchSidebarOpen}
        onClose={() => setIsSearchSidebarOpen(false)}
      />
    </nav>
  );
}
