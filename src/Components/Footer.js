import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 p-8 md:p-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <a href="/">
            <img
              src="/images/arohance-logo.png"
              alt="Company Logo"
              className="mb-4 w-40 md:w-60"
            />
          </a>
        </div>
        
        {/* Links and Subscription Section */}
        <div className="flex flex-col md:flex-row md:space-x-12 w-full md:w-auto text-center md:text-left">
          
          {/* Links Section */}
          <div className="mb-6 md:mb-0">
            <ul className="space-y-2 font-semibold">
              <li>
                <a href="/" className="text-gray-700 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-700 hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:underline">
                  Brands
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-700 hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </div>
          
          {/* Subscription and Social Media Section */}
          <div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-semibold"
              >
                Subscribe
              </label>
              <div className="flex justify-center md:justify-start items-center">
                <input
                  type="email"
                  id="email"
                  className="px-4 py-2 border rounded-l w-full md:w-auto"
                  placeholder="Your Email"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <p className="mb-2">Follow Us</p>
              <a
                href="https://www.linkedin.com/company/arohance-india/"
                className="text-gray-700 hover:text-gray-900"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/arohance/"
                className="text-gray-700 hover:text-gray-900"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.link/sfq1yw"
                className="text-gray-700 hover:text-gray-900"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
