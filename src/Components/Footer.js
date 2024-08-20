import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 p-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img
            src="/images/arohance-white-logo.png"
            alt="Company Logo"
            className="mb-4"
          />
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-gray-800">Arohance</div>
            <p className="text-sm text-gray-600 font-medium">
              TECH & MARKETING
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="mb-4 md:mb-0">
            <ul className="space-y-2 text-center md:text-left text-balance font-semibold mr-20">
              <li>
                <a href="#about" className="text-gray-700 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#brands" className="text-gray-700 hover:underline">
                  Brands
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-semibold"
              >
                Subscribe
              </label>
              <div className="flex items-center">
                <input
                  type="email"
                  id="email"
                  className="px-4 py-2 border rounded-l"
                  placeholder="Your Email"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="space-x-4 ">
              <p className="mb-2">Follow Us</p>
              <a
                href="https://www.facebook.com"
                className="text-gray-700 hover:text-gray-900"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-700 hover:text-gray-900"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-700 hover:text-gray-900"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
