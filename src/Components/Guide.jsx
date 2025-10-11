import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Guide() {
  return (
    <div className="bg-[url('/invest-bg.jpg')] bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-black mb-4">
            How You Can Invest Your
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-6">
            Money More Smartly
          </h1>
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto leading-relaxed">
            It's a simple way to start invest. You don't need a deep wallet to start behoof. 
            Pick an amount you can afford, and build your behoof over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-white shadow w-30 h-30 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/sign-up.svg" alt="Sign up" className="w-15 h-15" />
            </div>
            <button className="shadow text-black px-6 py-2 rounded-full font-semibold mb-3 hover:bg-orange-400 transition-colors flex items-center justify-center gap-1 mx-auto">
              First Step <IoIosArrowRoundForward className="text-xl" />
            </button>
            <span className="text-orange-600 text-2xl font-medium block">Sign Up</span>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="shadow bg-white w-30 h-30 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/deposit.svg" alt="Deposit" className="w-15 h-15" />
            </div>
            <button className="shadow bg-white text-black px-6 py-2 rounded-full font-semibold mb-3 hover:bg-blue-600 transition-colors flex items-center justify-center gap-1 mx-auto">
              Second Step <IoIosArrowRoundForward className="text-xl" />
            </button>
            <span className="text-orange-600 text-2xl font-medium block">Deposit</span>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-30 h-30 bg-white shadow rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/withdraw-1.svg" alt="Invest" className="w-15 h-15" />
            </div>
            <button className="shadow bg-white text-black px-6 py-2 rounded-full font-semibold mb-3 hover:bg-green-600 transition-colors flex items-center justify-center gap-1 mx-auto">
              Third Step <IoIosArrowRoundForward className="text-xl" />
            </button>
            <span className="text-orange-600 text-2xl font-medium block">Invest</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Guide