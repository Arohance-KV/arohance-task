import React from "react";
import Info from "./Info";

const HomePage = () => {
  return (
    <>
      <section className="bg-yellow-100 p-8 flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-sm text-gray-600 font-medium">
            CREATIVE WORK, CREATIVE MIND
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 italic">
            A platform
            <br /> empowering creators,
            <br /> elevating brands
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            We serve as the bridge between innovative brands and <br /> talented
            creators, crafting partnerships that inspire and elevate.
          </p>
        </div>
        <div className="mt-8 space-x-0 flex flex-col md:flex-row md:space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded mb-4 md:mb-0">
            I'M A CREATOR
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            WE'RE A BRAND
          </button>
        </div>
      </section>

      <section className="logo-marquee-section bg-yellow-100">
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee mb-12">
            <img
              src="images/animation-logo/adya_1.png"
              alt="Adya"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/parshwa_2.png"
              alt="Parshwa"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/mv_3.png"
              alt="MV"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/daadis_4.png"
              alt="Daadis"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/karats_5.png"
              alt="karats"
              className="logo-image"
            />
            <img
              src="images/animation-logo/adrover_6.png"
              alt="Adrover"
              className="logo-image"
            />

            {/* Duplicate logos for continuous scrolling effect */}

            <img
              src="images/animation-logo/adya_1.png"
              alt="Adya"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/parshwa_2.png"
              alt="Parshwa"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/mv_3.png"
              alt="MV"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/daadis_4.png"
              alt="Daadis"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/karats_5.png"
              alt="karats"
              className="logo-image"
            />
            <img
              src="images/animation-logo/adrover_6.png"
              alt="Adrover"
              className="logo-image"
            />

            {/* Duplicate logos for continuous scrolling effect */}

            <img
              src="images/animation-logo/adya_1.png"
              alt="Adya"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/parshwa_2.png"
              alt="Parshwa"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/mv_3.png"
              alt="MV"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/daadis_4.png"
              alt="Daadis"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="images/animation-logo/karats_5.png"
              alt="karats"
              className="logo-image"
            />
            <img
              src="images/animation-logo/adrover_6.png"
              alt="Adrover"
              className="logo-image"
            />
          </div>
        </div>
      </section>
      <Info />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
