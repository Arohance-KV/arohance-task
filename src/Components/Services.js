import React from 'react'
import Footer from './Footer';

const Services = () => {
  return (
    <>
    <div className="bg-yellow-100 text-black font-sans py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">To the members of the escape society:</h2>
          <ul className="list-disc ml-8 space-y-2">
            <li>Exclusive Brand Collaboration</li>
            <li>PR packages</li>
            <li>Networking Events</li>
            <li>Workshops</li>
            <li>Personalised Support</li>
            <li>Personal Portfolio landing page - NFC Tapover Smart Card</li>
            <li>Launch your own brand with us | <span className="font-bold">#LYOBwithTES</span></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">To the brands:</h2>
          <ul className="list-disc ml-8 space-y-4">
            <li>
              <span className="font-bold">Creator matchmaking:</span>
              <p className="ml-4 text-gray-700">We find the perfect influencers for your brand</p>
            </li>
            <li>
              <span className="font-bold">Campaign Crafts:</span>
              <p className="ml-4 text-gray-700">We create engaging content that resonates</p>
            </li>
            <li>
              <span className="font-bold">Management and Tracking:</span>
              <p className="ml-4 text-gray-700">We see everything, you see results</p>
            </li>
            <li>Pop-ups/Launches</li>
          </ul>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default Services;

