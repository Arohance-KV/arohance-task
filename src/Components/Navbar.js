import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-yellow-100">
        <a href="/"><img src="images/title-logo.png" alt="logo" width="150" height="250" /></a>

        <nav className="space-x-4 mr-14">
          <NavLink
            to="/community"
            className="text-gray-700 hover:underline font-bold"
          >
            Community
          </NavLink>
          <NavLink
            to="/services"
            className="text-gray-700 hover:underline font-bold"
          >
            Services
          </NavLink>
          <NavLink
            to="/career"
            className="text-gray-700 hover:underline font-bold"
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 hover:underline font-bold"
          >
            Contact Us
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
