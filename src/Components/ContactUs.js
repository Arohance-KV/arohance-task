import React from "react";

export const ContactUs = () => {
  return (
    <div className="bg-yellow-100 flex flex-col items-center w-full py-10">
      {/* Contact Us Section */}
      <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-medium text-left mb-8" style={{ fontFamily: 'Abhaya Libre, sans-serif' }}>
          Contact Us
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
          <button className="bg-[#061bb0] text-white font-medium text-lg py-3 px-8 rounded-md w-full sm:w-auto">
            Are you a creator?
          </button>
          <button className="bg-[#061bb0] text-white font-medium text-lg py-3 px-8 rounded-md w-full sm:w-auto">
            Are you a brand?
          </button>
        </div>

        {/* Form */}
        <form className="bg-white p-6 sm:p-8 md:p-10 rounded-md shadow-lg w-full">
        <p className="mb-5 text-[#8B3F3F] font-medium text-[25px] leading-[18px] text-center" style={{ fontFamily: 'Abhaya Libre, sans-serif' }}>
  Paint with brands, weave your narrative, and sculpt a masterpiece of creativity.<br/>
  Let's make your dreams take flight and your audience roar with excitement!
</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 mb-8">
        
            <div>
              <label
                htmlFor="name"
                className="block text-lg sm:text-xl font-medium text-gray-700 mb-2"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-400 rounded-md p-3 shadow-lg"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg sm:text-xl font-medium text-gray-700 mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-400 rounded-md p-3 shadow-lg"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-lg sm:text-xl font-medium text-gray-700 mb-2"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-400 rounded-md p-3 shadow-lg"
                placeholder="Subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg sm:text-xl font-medium text-gray-700 mb-2"
              >
                Message*
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-400 rounded-md p-3 h-32 shadow-lg"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#061bb0] text-white font-medium text-lg py-3 px-16 rounded-md"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Footer Info */}
        <div className="mt-12 flex flex-col items-center text-center">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span>📧 info@theescapesociety.com</span>
            <span>📞 +91 70412 66132</span>
          </div>
          <div className="mt-4">
            <span>
              📍 8th Cross Rd, Jarganahalli, JP Nagar Phase 6, J. P. Nagar,
              Bengaluru, Karnataka 560078
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
