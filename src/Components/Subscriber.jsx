import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

function Subscriber() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-700 py-16 sm:py-25 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
          <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
            <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
            <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
            <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        <span className="inline-block text-white text-xl sm:text-2xl font-semibold mb-2">
          Subscribe to ASGF
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
          To Get Exclusive Benefits
        </h1>

        <div className="w-full max-w-2xl mx-auto border-2 border-gray-400 p-1 rounded-full bg-transparent">
          <div className="flex gap-2 sm:gap-0">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 sm:py-3 focus:outline-none text-white placeholder-gray-200 bg-transparent rounded-full sm:rounded-r-none border-0 focus:ring-0 w-full"
            />
            <button className="bg-blue-500 text-white px-4 sm:px-6 py-3 border-2 border-orange-600 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base">
              <FaPaperPlane className="w-4 h-4" />
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriber;