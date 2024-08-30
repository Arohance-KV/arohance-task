import { motion } from "framer-motion";

const Community = () => {
  // Array of image file names
  const imageArray = Array.from({ length: 10 }, (_, i) => `pic_${i + 1}.png`);

  // Split the image array into two halves
  const firstRowImages = imageArray.slice(0, Math.ceil(imageArray.length / 2));
  const secondRowImages = imageArray.slice(Math.ceil(imageArray.length / 2));

  // Duplicate the arrays for seamless looping
  const duplicatedFirstRowImages = [...firstRowImages, ...firstRowImages];
  const duplicatedSecondRowImages = [...secondRowImages, ...secondRowImages];

  return (
    <div className="bg-yellow-100 p-4 sm:p-6">
      <h1 className="text-start font-medium text-4xl sm:text-7xl mb-4 sm:mb-6" style={{ fontFamily: 'Abhaya Libre, sans-serif' }}>Our Community</h1>
      <div className="overflow-hidden">
        {/* First Row - Moving Left to Right */}
        <motion.div
          className="flex space-x-6 mb-4 sm:mb-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, loop: Infinity, ease: "linear" }}
        >
          {duplicatedFirstRowImages.map((image, index) => (
            <div key={index} className="w-1/3 sm:w-1/5 flex-shrink-0">
              <img
                src={`/images/community_pic/${image}`}
                alt={`Community ${index + 1}`}
                className="w-full h-40 sm:h-72 object-cover rounded-lg"
              />
            </div>
          ))}
        </motion.div>

        {/* Second Row - Moving Right to Left */}
        <motion.div
          className="flex space-x-6 sm:space-x-6"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 30, loop: Infinity, ease: "linear" }}
        >
          {duplicatedSecondRowImages.map((image, index) => (
            <div key={index} className="w-1/3 sm:w-1/5 flex-shrink-0">
              <img
                src={`/images/community_pic/${image}`}
                alt={`Community ${index + 1}`}
                className="w-full h-40 sm:h-72 object-cover rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
