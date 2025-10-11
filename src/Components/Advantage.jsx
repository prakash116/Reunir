import React from 'react'
import { FaUserTie, FaChartLine, FaShieldAlt } from "react-icons/fa"

function Advantage() {
  return (
    <div className="bg-[url('/advantage-bg.jpg')] bg-cover bg-center">
      <div className='bg-indigo-800/70 py-16 px-4'>
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className='text-white text-2xl md:text-3xl font-light mb-2'>Our Biggest</h1>
            <h1 className='text-orange-600 text-4xl md:text-5xl font-bold'>Advantage</h1>
          </div>

          {/* Features Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Professional Team */}
            <div className='flex flex-col items-center text-center p-6'>
              <div className="bg-white/40 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <FaUserTie className="text-orange-600 text-3xl" />
              </div>
              <h1 className='text-white text-xl md:text-2xl font-semibold'>PROFESSIONAL TEAM</h1>
            </div>

            {/* Profitable Plans */}
            <div className='flex flex-col items-center text-center p-6'>
              <div className="bg-white/40 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-orange-600 text-3xl" />
              </div>
              <h1 className='text-white text-xl md:text-2xl font-semibold'>PROFITABLE PLANS</h1>
            </div>

            {/* Secure Control Panel */}
            <div className='flex flex-col items-center text-center p-6'>
              <div className="bg-white/40 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <FaShieldAlt className="text-orange-600 text-3xl" />
              </div>
              <h1 className='text-white text-xl md:text-2xl font-semibold'>SECURE CONTROL PANEL</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantage