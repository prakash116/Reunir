import React from "react";
import { FaArrowRight } from "react-icons/fa";

function SignUp() {
  return (
    <div className="bg-[url('https://pixner.net/s4i/Reunir/img/signup-bg.jpg')] bg-cover bg-center bg-no-repeat relative">
      <div className="bg-indigo-900/60">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <span className="inline-block px-2 py-2 text-white text-xl font-semibold">
                CREATE YOUR PERSONAL ACCOUNT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-6 leading-tight">
                Get Started Now
              </h1>
              <p className="text-lg text-white mb-8 leading-relaxed max-w-xl">
                Get Started Now, Create your personal account as a first step to
                become a successful investor. Are you ready to start earning
                with us?
              </p>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <button className="group relative bg-gradient-to-r from-orange-700 to-orange-600 text-white px-8 py-5 border rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl min-w-[200px]">
                <div className="flex items-center justify-center gap-3">
                  <span>SIGN UP NOW</span>
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
