import React from "react";

export const Careers = () => {
  return (
    <>
      <div className="bg-yellow-100 flex flex-col items-center w-full py-8 sm:py-10 px-4 sm:px-6">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-left w-full max-w-screen-lg mb-6 sm:mb-8" style={{ fontFamily: 'Abhaya Libre, sans-serif' }}>
          Careers
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-left w-full max-w-screen-lg leading-relaxed">
          <span className="text-[#8B3F3F] font-semibold" style={{ fontFamily: 'Abhaya Libre, sans-serif' }}>
            Join The Escape Society!
          </span>
          <br />
          <span className="font-semibold flex mt-6" style={{ fontFamily: 'Abhaya Libre, sans-serif' }}>
          Dive into a dynamic world where brands and creators unite.<br/> We seek
          passionate and creative minds here. Be part of our innovative team and
          make<br/> impactful connections.
          </span>
        
          <br />
          <br />
          <span className="text-[#000000] font-semibold" style={{ fontFamily: 'Abhaya Libre, sans-serif' }}>
            Apply now at{" "}
            <a
              href="mailto:info@theescapesociety.com"
              className="text-[#000000] underline"
            >
              info@theescapesociety.com
            </a>
          </span>
        </p>
      </div>
    </>
  );
};
