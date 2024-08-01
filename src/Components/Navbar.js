import React from 'react'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-yellow-100">
          <div className="text-6xl font-bold text-blue-700 ml-14 mt-6">TES</div>
          <nav className="space-x-4 mr-14">
            <a href="#services" className="text-gray-700 hover:underline font-bold">Services</a>
            <a href="#career" className="text-gray-700 hover:underline font-bold">Career</a>
            <a href="#contact" className="text-gray-700 hover:underline font-bold">Contact Us</a>
          </nav>
        </header>
      );
}

export default Navbar