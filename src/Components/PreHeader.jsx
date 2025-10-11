import React from 'react'
import { FaHeadset, FaEnvelope, FaGlobe, FaShoppingCart } from 'react-icons/fa'

function PreHeader() {
  return (
    <div className='hidden md:block text-white py-2 px-25 border-b border-gray-500'>
      <div className='max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-2'>
        
        {/* Left Section - Support */}
        <div className='flex flex-col md:flex-row items-center gap-4 text-sm'>
          <div className='flex items-center gap-2'>
            <FaHeadset className="text-blue-400" />
            <span className='text-gray-300'>Support</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaEnvelope className="text-blue-400" />
            <span className='text-gray-300'>info@reunir.com</span>
          </div>
        </div>

        {/* Right Section - Language & Cart */}
        <div className='flex flex-col md:flex-row items-center gap-4 text-sm'>
          <div className='flex items-center gap-2'>
            <FaGlobe className="text-blue-400" />
            <select className='bg-gray-800 text-gray-300 border border-gray-700 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500'>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <div className='flex items-center gap-2'>
            <FaShoppingCart className="text-blue-400" />
            <span className='text-gray-300'>My Cart</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PreHeader