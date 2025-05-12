import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to navigate to a section
  const navigateToSection = (hash) => {
    closeMenu();

    if (location.pathname === "/") {
      // If already on the main page, scroll to the section
      scrollToSection(hash);
    } else {
      // Navigate to the main page with the hash
      navigate(`/${hash}`);
      // Wait for navigation to complete and then scroll to the section
      setTimeout(() => {
        scrollToSection(hash);
      }, 100); // Delay to ensure the page has loaded
    }
  };

  // Function to scroll to a section
  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 lg:px-20 py-4 w-full bg-white bg-opacity-95 shadow-md">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/images/logo_landscape.png"
              alt="MediKidz Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-base lg:text-lg text-gray-800">
          <a
            onClick={() => navigateToSection("#service")}
            className="hover:text-gray-600 font-bold cursor-pointer"
          >
            Service
          </a>
          <a
            onClick={() => navigateToSection("#doctor")}
            className="hover:text-gray-600 font-bold cursor-pointer"
          >
            Doctor
          </a>
          <a
            onClick={() => navigateToSection("#")}
            className="hover:text-gray-600 font-bold cursor-pointer"
          >
            Live Antrian
          </a>
          <button className="px-6 py-2 bg-[#465445] text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 border-2 border-[#465445] text-gray-800 font-regular rounded-full hover:bg-gray-100 transition-colors">
            Register
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-800 menu-button focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out mobile-menu ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
            <img
              src="/images/logo.png"
              alt="MediKidz Logo"
              className="h-10 w-auto"
            />
            <button
              onClick={closeMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            <a
              onClick={() => navigateToSection("#service")}
              className="text-lg font-bold text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Service
            </a>
            <a
              onClick={() => navigateToSection("#doctor")}
              className="text-lg font-bold text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Doctor
            </a>
            <a
              onClick={() => navigateToSection("#")}
              className="text-lg font-bold text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Live Antrian
            </a>

            <div className="pt-4 space-y-4">
              <button className="w-full px-6 py-2 bg-[#465445] text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                Login
              </button>
              <button className="w-full px-6 py-2 border-2 border-[#465445] text-gray-800 font-regular rounded-full hover:bg-gray-100 transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;