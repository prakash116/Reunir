import React from 'react'
import { CiCalculator1 } from "react-icons/ci";

function InvestmentCalculator() {
  return (
    <div className='bg-violet-900 p-6 max-w-full mx-auto'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>

        <div className='flex items-center gap-4 w-full lg:w-2/5'>
          <CiCalculator1 className="text-5xl hidden md:block text-white" />
          <div className='w-full'>
            <h1 className='text-lg flex justify-center md:justify-start items-center font-bold text-white mb-3'>Enter Investment Amount</h1>
            <div className='flex w-full bg-white rounded-full px-3 py-1 border border-gray-400'>
              <input 
                type="text" 
                placeholder="Enter amount"
                className='flex-1 w-1/2 px-4 py-2 bg-transparent outline-none text-gray-800 placeholder-gray-500'
              /> 
              <select 
                className="bg-gradient-to-r w-1/2 from-blue-900 to-orange-400 text-white px-4 py-2 rounded-full border border-orange-400 outline-none hover:from-orange-500 hover:to-orange-500 transition-all duration-300"
              >
                <option>1% Daily For Ever</option>
                <option>2% Daily For Ever</option>
                <option>3% Daily For Ever</option>
              </select>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 w-full lg:w-3/5'>

          <div className='flex-1 rounded-xl p-4 text-center'>
            <h1 className='text-2xl sm:text-3xl font-bold text-orange-400'>212</h1>
            <p className='text-sm text-white mt-1'>Daily Profit</p>
          </div>


          <div className='flex-1 rounded-xl p-4 text-center'>
            <h1 className='text-2xl sm:text-3xl font-bold text-orange-400'>1484</h1>
            <p className='text-sm text-white mt-1'>Weekly Profit</p>
          </div>

          <div className='flex-1 rounded-xl p-4 text-center'>
            <h1 className='text-2xl sm:text-3xl font-bold text-orange-400'>6360</h1>
            <p className='text-sm text-white mt-1'>Monthly Profit</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InvestmentCalculator