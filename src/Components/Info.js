import React from "react";
import CountUp from 'react-countup';

const Info = () => {
  return (
    <>
      <div className="bg-yellow-100 p-4 " >
        <p className="text-black font-medium text-center text-4xl font-serif">
          A COMMUNITY BUILT ON CREATIVITY AND COLLABORATION
        </p>
        <div className="flex justify-center items-center my-4">
          {/* <div className="text-green-500">(add image)</div> */}
        </div>
        <div className="flex justify-between items-center px-4">
          <span className="text-black">500k REACH</span>
          <span className="text-black">100+ MICRO & MACRO CREATORS</span>
        </div>

        


      </div>

      <div className="bg-yellow-100 p-10">
        <div className="flex justify-center flex-col bg-slate-100 ml-1 mr-1">
          <h1 className="font-medium text-3xl mt-5 font-serif">TES'S Mission</h1>
          <p className="text-2xl font-extralight p-14">
            Our mission is to transform the way brands and creators interact. By
            fostering a vibrant community where ideas flow freely, we enable
            both parties to glow and thrive. We are dedicated to nurturing these
            relationships, ensuring that every collaboration is impactful and
            mutually beneficial.
          </p>
        </div>

        <div className="flex justify-center flex-col bg-slate-100 ml-1 mr-1 mt-14">
          <h1 className="font-medium text-3xl mt-5 font-serif">For creators</h1>
          <p className="text-2xl font-extralight p-14">
            At the escape society, we empower creators to elevate their craft
            through exclusive brand collaborations, professional development
            workshops, and showcase opportunities. Connect with brands that
            align with your vision and gain exposure through campaigns designed
            to highlight your talent. Join a supportive community of like-minded
            creators, exchange ideas, and collaborate on exciting projects. With
            us, you'll find the creative freedom and support needed to take your
            career to new heights.
          </p>
        </div>

        <div className="flex justify-center flex-col bg-slate-100 ml-1 mr-1 mt-14">
          <h1 className="font-medium text-3xl mt-5 font-serif">For brands</h1>
          <p className="text-2xl p-14 tracking-wide font-light">
            The escape society links brands with talented creators who can
            authentically tell your story. We offer tailored PR packages to
            boost your visibility. Engage your audience through innovative
            content and bespoke events designed to generate excitement around
            your products. Partner with us to gain fresh perspectives and make
            your brand stand out in a competitive market.
          </p>
        </div>

        <div className="flex justify-center flex-col ml-1 mr-1 mt-14">
          <h1 className="font-bold text-3xl mt-5 font-serif">THE ESCAPE SOCIETY</h1>
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
