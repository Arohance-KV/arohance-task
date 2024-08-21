import React from "react";
import Footer from "./Footer";
import Community from "./Community";

export const ContactUs = () => {
  return (
    <>
    <div className="bg-yellow-100 flex flex-col items-center w-full py-10">
      {/* Contact Us Section */}
      <div className="w-full max-w-screen-lg">
        {/* Header */}
        <h1 className="text-5xl font-bold text-left mb-8">Contact Us</h1>

        {/* Buttons */}
        <div className="flex gap-4 mb-12">
          <button className="bg-[#061bb0] text-white font-medium text-lg py-3 px-8 rounded-md">
            Are you a creator?
          </button>
          <button className="bg-[#061bb0] text-white font-medium text-lg py-3 px-8 rounded-md">
            Are you a brand?
          </button>
        </div>

        {/* Form */}
        <form className="bg-white p-10 rounded-md shadow-lg w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-8">
            <div>
              <label
                htmlFor="name"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-400 rounded-md p-3"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-400 rounded-md p-3"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-400 rounded-md p-3"
                placeholder="Subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Message*
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-400 rounded-md p-3 h-32"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#061bb0] text-white font-medium text-lg py-3 px-12 rounded-md"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Footer Info */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <span>📧 info@theescapesociety.com</span>
            <span>📞 +91 70412 66132</span>
          </div>
          <div className="mt-4 text-center">
            <span>
              📍 8th Cross Rd, Jarganahalli, JP Nagar Phase 6, J. P. Nagar,
              Bengaluru, Karnataka 560078
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* <Community />
    <Footer /> */}
    </>
  );
};
