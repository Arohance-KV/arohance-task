import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Info = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.3, // Adjust this value to determine when the animation starts (0.3 means 30% of the element should be in view)
  });

  return (
    <>
      <div className="bg-yellow-100  py-8">
        <p className="text-black font-medium text-center text-2xl md:text-4xl font-serif mb-5">
          A COMMUNITY BUILT ON
          <br /> CREATIVITY AND COLLABORATION
        </p>
        <img
          className="w-full"
          src="images/city_list.png"
          alt="city-signatures"
        />
      </div>

      <div className="bg-yellow-100 p-6 md:p-10 w-full">
        <div className="bg-yellow-100 text-left">
          <h1 className="font-medium text-2xl md:text-3xl mt-5 font-serif text-center">
            TES'S Mission
          </h1>
          <p className="text-lg md:text-2xl font-normal p-3 md:p-5 text-rose-800 items-center text-center mb-9">
            Our mission is to transform the way brands and creators interact. By
            fostering a vibrant community where ideas flow freely, we enable
            both parties to glow and thrive. We are dedicated to nurturing these
            relationships, ensuring that every collaboration is impactful and
            mutually beneficial.
          </p>
        </div>

        <div
          className="flex justify-center items-center bg-yellow-100"
          ref={ref}
        >
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {inView && <CountUp start={1} end={5000000} duration={7} />}
              </div>
              <p className="text-lg md:text-2lg font-bold text-gray-900 mt-2">
                Total Reach
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {inView && (
                  <>
                    <CountUp start={1} end={100} duration={8} />
                    <span>+</span>
                  </>
                )}
              </div>
              <p className="text-lg md:text-2lg text-gray-900 mt-2 font-bold">
                MICRO & MACRO
                <br /> CREATORS
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8 mt-10">
          <div className="bg-yellow-100 p-5 w-full flex justify-start">
            <div className="max-w-full md:max-w-3/4">
              <h1 className="font-medium text-2xl md:text-4xl mt-5 font-serif text-left">
                For creators
              </h1>
              <p className="text-lg md:text-2xl font-normal p-1 tracking-wider text-rose-800 text-left">
                At the escape society, we empower creators to elevate their
                craft through exclusive brand collaborations, professional
                development workshops, and showcase opportunities. Connect with
                brands that align with your vision and gain exposure through
                campaigns designed to highlight your talent. Join a supportive
                community of like-minded creators, exchange ideas, and
                collaborate on exciting projects. With us, you'll find the
                creative freedom and support needed to take your career to new
                heights.
              </p>
            </div>
          </div>

          <div className="bg-yellow-100 p-5 w-full flex justify-end">
            <div className="max-w-full md:max-w-3/4">
              <h1 className="font-medium text-2xl md:text-4xl mt-5 font-serif text-right">
                For brands
              </h1>
              <p className="text-lg md:text-2xl font-normal p-1 tracking-wider text-rose-800 text-right">
                The escape society links brands with talented creators who can
                authentically tell your story. We offer tailored PR packages to
                boost your visibility. Engage your audience through innovative
                content and bespoke events designed to generate excitement
                around your products. Partner with us to gain fresh perspectives
                and make your brand stand out in a competitive market.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col text-center mt-10 px-4 md:px-0">
          <h1 className="font-bold text-2xl md:text-3xl mt-5 font-serif">
            THE ESCAPE SOCIETY
          </h1>
          <p className="text-lg md:text-2xl font-normal tracking-normal p-8 text-rose-800">
            The Escape Society is more than just a platform; it's a vibrant
            community of innovators, visionaries, and trailblazers. Whether
            you're looking to learn, network, or collaborate, there's a place
            for you here.
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
