import React from "react";
import { motion } from "framer-motion"

const Community = () => {
  // Array of image file names
  const imageArray = Array.from({ length: 20 }, (_, i) => `pic_${i + 1}.png`);

  return (
    <>
    <div className="bg-yellow-100 ">
      <h1 className="text-start font-bold text-6xl ml-6">Our Community</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {imageArray.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={`/images/community_pic/${image}`}
              alt={`Community ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Community;
