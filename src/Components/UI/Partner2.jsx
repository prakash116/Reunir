import React from 'react'
import { FaUser, FaUserPlus, FaUsers } from 'react-icons/fa'

function Partner2() {
  return (
    <div className='bg-transparent py-8 px-4'>
      <div className='max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl px-10 pb-4'>
        <div className='flex flex-col md:flex-row items-start gap-12'>

          <div className='hidden md:block flex-shrink-0'>
            <img 
              src="https://pixner.net/s4i/Reunir/img/referral-img.png" 
              alt="Commission" 
              className='w-30'
            />
          </div>

          <div className='flex-1 py-10'>
            <div className='mb-8'>
              <p className='text-orange-600 text-2xl'>Referral commission and</p>
              <h1 className='text-2xl md:text-4xl font-bold text-gray-900 mt-1'>Membership Level</h1>
              <span className='text-gray-600 text-lg'>Referral Commission and Membership Levels are of 3 levels as below</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-400'>
                <FaUser className='text-2xl text-blue-500 size-12' />
                <div>
                  <h1 className='text-3xl font-bold text-orange-600'>8%</h1>
                  <p className='text-gray-900 font-semibold'>Direct Referral</p>
                </div>
              </div>

              <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-400'>
                <FaUserPlus className='text-2xl text-green-500 size-13' />
                <div>
                  <h1 className='text-3xl font-bold text-orange-600'>4%</h1>
                  <p className='text-gray-900 font-semibold'>Second Level</p>
                </div>
              </div>

              <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-400'>
                <FaUsers className='text-2xl text-purple-500 size-13' />
                <div>
                  <h1 className='text-3xl font-bold text-orange-600'>2%</h1>
                  <p className='text-gray-900 font-semibold'>Third Level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner2