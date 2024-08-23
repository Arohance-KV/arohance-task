import React from "react";
import CountUp from "react-countup";

const Info = () => {
  return (
    <>
      <div className="bg-yellow-100 ">
        <p className="text-black font-medium text-center text-4xl font-serif mb-5">
          A COMMUNITY BUILT ON
          <br /> CREATIVITY AND COLLABORATION
        </p>
        <br />

        <img className="w-full m-0 p-0 block" src="images/city_list.png" alt="city-signatures" />

       
      </div>

      <div className="bg-yellow-100 p-10 w-full">
        <div className="flex flex-col bg-yellow-100 ml-1 mr-1 justify-left">
          <h1 className="font-medium text-3xl mt-5 font-serif">
            TES'S Mission
          </h1>
          <p className="text-2xl font-normal p-5 text-rose-800">
            Our mission is to transform the way brands and creators interact. By
            fostering a vibrant community where ideas flow freely, we enable
            both parties to glow and thrive. We are dedicated to nurturing these
            relationships, ensuring that every collaboration is impactful and
            mutually beneficial.
          </p>
        </div>

        <div className="flex justify-center mt-14">
          <div className="flex space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold ">
                <CountUp start={1} end={5000000} duration={7} />
                {/* <span>K</span> */}
              </div>
              <p className="text-2lg font-bold text-gray-900 mt-2">
                Total Reach
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">
                <CountUp start={1} end={100} duration={8} />
                <span>+</span>
              </div>
              <p className="text-2lg text-gray-900 mt-2 font-bold">
                MICRO & MACRO
                <br /> CREATORS
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="flex flex-col bg-yellow-100 p-5 w-3/4 items-start	">
            <h1 className="font-medium text-4xl mt-5 font-serif text-left">
              For creators
            </h1>
            <p className="text-2xl font-normal p-1 tracking-wider text-rose-800 text-left">
              At the escape society, we empower creators to elevate their craft
              through exclusive brand collaborations, professional development
              workshops, and showcase opportunities. Connect with brands that
              align with your vision and gain exposure through campaigns
              designed to highlight your talent. Join a supportive community of
              like-minded creators, exchange ideas, and collaborate on exciting
              projects. With us, you'll find the creative freedom and support
              needed to take your career to new heights.
            </p>
          </div>

          <div className="flex flex-col bg-yellow-100 p-4 w-3/4 items-end">
            <h1 className="font-medium text-4xl mt-5 font-serif">For brands</h1>
            <p className="text-2xl font-normal p-1 tracking-wider text-rose-800 text-right">
              The escape society links brands with talented creators who can
              authentically tell your story. We offer tailored PR packages to
              boost your visibility. Engage your audience through innovative
              content and bespoke events designed to generate excitement around
              your products. Partner with us to gain fresh perspectives and make
              your brand stand out in a competitive market.
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col ml-1 mr-1 mt-14">
          <h1 className="font-bold text-3xl mt-5 font-serif">
            THE ESCAPE SOCIETY
          </h1>
          <p className="text-2xl font-normal tracking-normal p-8 text-rose-800">
            The Escape Society is more than just a platform; it's a vibrant
            community of innovators, visionaries and trailblazers. Whether
            you're looking to learn, network or collaborate, there's a place for
            you here.
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
