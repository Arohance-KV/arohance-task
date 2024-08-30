import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className="flex justify-between items-center p-1  bg-yellow-100 ">
        <a href="/" className="m-1">
          <img src="images/title-logo.png" alt="logo" width="150" height="250" />
        </a>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-yellow-100 md:static md:w-auto md:flex md:items-center md:space-x-4 md:mr-14`}
        >
          <NavLink
            to="/community"
            className="block text-gray-800 hover:border-b-2 border-blue-500 font-bold text-center" style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={toggleMenu}
          >
            Community
          </NavLink>
          <NavLink
            to="/services"
            className="block text-gray-800 hover:border-b-2 border-blue-500 font-bold text-center" style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={toggleMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/career"
            className="block text-gray-800 hover:border-b-2 border-blue-500 font-bold text-center" style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={toggleMenu}
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-800 hover:border-b-2 border-blue-500 font-bold text-center" style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
        </nav>
      </header>
  );
};

export default Navbar;
