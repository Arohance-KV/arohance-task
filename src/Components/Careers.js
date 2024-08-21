import React from "react";
import Footer from "./Footer";

export const Careers = () => {
  return (
    <>
    <div className="bg-yellow-100 flex flex-col items-center w-full py-10">
      {/* Image */}
      {/* <div className="relative w-full max-w-screen-lg mb-8">
        <img
          className="w-[217px] h-[134px] absolute top-0 left-0 object-cover"
          alt="Element removebg preview"
          src="1-removebg-preview-3.png"
        />
      </div> */}

      {/* Header */}
      <h1 className="text-6xl font-bold text-left w-full max-w-screen-lg mb-8">
        Careers
      </h1>

      {/* Description */}
      <p className="text-2xl text-left w-full max-w-screen-lg leading-relaxed">
        <span className="text-[#8b3f3f] font-semibold">
          Join The Escape Society!
        </span>
        <br />
        Dive into a dynamic world where brands and creators unite. We seek
        passionate and creative minds here. Be part of our innovative team and
        make impactful connections.
        <br />
        <br />
        <span className="text-[#1c1c31]">
          Apply now at{" "}
          <a
            href="mailto:info@theescapesociety.com"
            className="text-blue-600 underline"
          >
            info@theescapesociety.com
          </a>
        </span>
      </p>
    </div>
      </>
  );
};
