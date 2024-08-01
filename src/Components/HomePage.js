import React from 'react'

const HomePage = () => {
    return (
        <section className="bg-yellow-100 p-8 flex justify-between items-center">
          <div>
            <h2 className="text-sm text-gray-600 font-medium">CREATIVE WORK, CREATIVE MIND</h2>
            <h1 className="text-5xl font-bold text-gray-800 mt-2 italic">A platform empowering creators, elevating brands</h1>
            <p className="text-lg text-gray-700 mt-4 ">We serve as the bridge between innovative brands and talented creators, crafting partnerships that inspire and elevate.</p>
            <div className="mt-8 space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded">I'M A CREATOR</button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded">WE'RE A BRAND</button>
            </div>
          </div>
          <div className="w-1/3 bg-gray-200 flex justify-center items-center">
            {/* <p className="text-gray-500">add image</p> */}
          </div>
        </section>
      );
}

export default HomePage