import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function GetInTouch() {
  return (
    <div className="w-screen max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 text-black text-2xl font-semibold mb-2">
          Contact Us
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-3">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Please feel free to contact us through our support center. Simply choose the appropriate 
          support options to send us your questions, concerns and/or feedback. Our customer service 
          team is ready to overcome any issues that might occur.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="hidden md:block w-full h-full">
          <div className="">
            <img 
              src="https://pixner.net/s4i/Reunir/img/contact-us.jpg" 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:w-full flex items-center justify-center">
          <div className="bg-white border w-full max-w-md rounded border-gray-300 shadow-xl p-4">
            <div className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            </div>

            <form className="space-y-1">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <div className='flex justify-center'>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 px-2 rounded-full border-2 border-orange-600 font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <FaPaperPlane className="w-4 h-4"/>
                SUBMIT NOW
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;