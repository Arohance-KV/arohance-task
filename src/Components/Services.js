import React from 'react';

const Services = () => {
  return (
      <div className="bg-yellow-100 text-black font-serif py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>

          
          <div className="mb-12 text-left">
            <h2 className="text-xl font-bold mb-4">To the members of the escape society:</h2>
            <ul className="list-disc space-y-2 ml-6">
              <li>Exclusive Brand Collaboration</li>
              <li>PR packages</li>
              <li>Networking Events</li>
              <li>Workshops</li>
              <li>Personalised Support</li>
              <li>Personal Portfolio landing page - NFC Tapover Smart Card</li>
              <li>Launch your own brand with us | <span className="font-bold">#LYOBwithTES</span></li>
            </ul>
          </div>
          
          <div className="text-left">
            <h2 className="text-xl font-bold mb-4">To the brands:</h2>
            <ul className="list-disc space-y-4 ml-6">
              <li>
                <span className="font-bold">Creator matchmaking:</span>
                <p className="ml-6 text-gray-700">We find the perfect influencers for your brand</p>
              </li>
              <li>
                <span className="font-bold">Campaign Crafts:</span>
                <p className="ml-6 text-gray-700">We create engaging content that resonates</p>
              </li>
              <li>
                <span className="font-bold">Management and Tracking:</span>
                <p className="ml-6 text-gray-700">We see everything, you see results</p>
              </li>
              <li className="font-bold">Pop-ups/Launches</li>
            </ul>
          </div>
        </div>
      </div>
    
  );
};

export default Services;
