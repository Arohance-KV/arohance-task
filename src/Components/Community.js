import React from "react";
import { motion } from "framer-motion";

const Community = () => {
  // Array of image file names
  const imageArray = Array.from({ length: 10 }, (_, i) => `pic_${i + 1}.png`);

  // Helper function to duplicate the image array for seamless looping
  const duplicatedImages = [...imageArray, ...imageArray];

  return (
    <div className="bg-yellow-100 p-6">
      <h1 className="text-start font-bold text-6xl mb-6">Our Community</h1>
      <div className="overflow-hidden">

        {/* Second Row - Moving Right to Left */}
        <motion.div
          className="flex space-x-4 mb-6"
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 40, loop: Infinity, ease: "linear" }}
        >
          {duplicatedImages.map((image, index) => (
            <div key={index} className="w-1/5 flex-shrink-0">
              <img
                src={`/images/community_pic/${image}`}
                alt={`Community ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          ))}
        </motion.div>

        {/* First Row - Moving Left to Right */}
        <motion.div
          className="flex space-x-4 "
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, loop: Infinity, ease: "linear" }}
        >
          {duplicatedImages.map((image, index) => (
            <div key={index} className="w-1/5 flex-shrink-0">
              <img
                src={`/images/community_pic/${image}`}
                alt={`Community ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          ))}
        </motion.div>

      
      </div>
    </div>
  );
};

export default Community;
