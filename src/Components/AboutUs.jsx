import React from 'react'
import { FaRocket, FaUserTie, FaShieldAlt, FaEye, FaSync, FaCheckCircle } from 'react-icons/fa'

function AboutUs() {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        <div className="lg:w-1/2">
          <div className="text-center lg:text-left mb-12">
            <h1 className="text-2xl lg:text-2xl font-semibold text-gray-900 mb-4">
              WELCOME TO REUNIR
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-orange-700">
              A FEW WORDS ABOUT US
            </h2>
          </div>
          <div className="mb-12">
            <p className="text-lg lg:text-xl text-gray-700 mb-6 font-medium">
              To meet <span className='text-orange-600'>today's challenges,</span>  we've created a unique fund management system
            </p>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Reunit - a private financial company specializing in sports betting. Our 
              system is risk-free thanks to the development and improvement of semi-
              automatic system of rates. We upgraded our automatic system so that the 
              last step before the rate is now done by our operators.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <FaRocket className="text-5xl rounded-full text-orange-600 mx-auto mb-2 p-1 border-1 border-gray-300" />
                <h3 className="text-lg font-bold text-gray-800">EFFICIENCY</h3>
              </div>
              <div className="text-center">
                <FaUserTie className="text-5xl rounded-full text-orange-600 mx-auto mb-2 p-1 border-1 border-gray-300" />
                <h3 className="text-lg font-bold text-gray-800">EXPERIENCE</h3>
              </div>
              <div className="text-center">
                <FaShieldAlt className="text-5xl rounded-full text-orange-600 mx-auto mb-2 p-1 border-1 border-gray-300" />
                <h3 className="text-lg font-bold text-gray-800">SECURITY</h3>
              </div>
              <div className="text-center">
                <FaEye className="text-5xl rounded-full text-orange-600 mx-auto mb-2 p-1 border-1 border-gray-300" />
                <h3 className="text-lg font-bold text-gray-800">TRANSPARENT</h3>
              </div>
              <div className="text-center">
                <FaSync className="text-5xl rounded-full text-orange-600 mx-auto mb-2 p-1 border-1 border-gray-300" />
                <h3 className="text-lg font-bold text-gray-800">SIMPLE</h3>
              </div>
              <div className="text-center">
              <FaCheckCircle className=" text-5xl text-orange-600 mx-auto mb-2 p-1 border-1 border-gray-300 rounded-full" />
                <h3 className="text-lg font-bold text-gray-800">COMPLIANT</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img 
            src="https://pixner.net/s4i/Reunir/img/about-bg.jpg" 
            alt="About Reunir" 
          />
        </div>

      </div>
    </div>
  )
}

export default AboutUs