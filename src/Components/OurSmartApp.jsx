import React from "react";
import { FaCalculator, FaShieldAlt, FaChartLine } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

function OurSmartApp() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12 md:pl-10">
          <div className="max-w-lg mx-auto md:mx-0">
            <span className="text-center md:inline-block px-2  text-black rounded-full text-2xl font-semibold">
              Learn, Plan, Invest in our app
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-6 leading-tight">
              Our Smart App
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our application is a set of tools designed to facilitate making
              money.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-15 h-15 bg-gray-200 shadow rounded-full flex items-center justify-center">
                  <FaCalculator className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    Calculators to plan your investments
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-15 h-15 bg-gray-200 shadow rounded-full flex items-center justify-center">
                  <FaShieldAlt className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    100% paperless process
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-15 h-15 bg-gray-200 shadow rounded-full flex items-center justify-center">
                  <FaChartLine className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    Dashboard to track your progress
                  </h3>
                  <p className="text-gray-600">
                    Monitor your investments and growth with real-time analytics
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <SiGoogleplay className="w-8 h-8 mr-3" />
                <div className="text-left">
                  <p className="text-xs opacity-80">GET IT ON</p>
                  <h3 className="text-lg font-semibold">Google Play</h3>
                </div>
              </button>

              <button className="flex items-center justify-center px-6 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <SiAppstore className="w-8 h-8 mr-3" />
                <div className="text-left">
                  <p className="text-xs opacity-80">Download on the</p>
                  <h3 className="text-lg font-semibold">App Store</h3>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative max-w-md">
            <img
              src="https://pixner.net/s4i/Reunir/img/download-smart-phone.png"
              alt="Smart App Preview"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-8 md:-top-30 size-80 -right-3 md:-right-10 md:size-80 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 size-60 bg-purple-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSmartApp;
