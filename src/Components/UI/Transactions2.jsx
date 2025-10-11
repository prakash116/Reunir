import React from 'react'
import { FaCreditCard, FaPaypal, FaBitcoin, FaInfinity, FaClock } from 'react-icons/fa'

function Transactions2() {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-2 p-4 '>
      <div className='flex-1'>
        <div>
          <div className='bg-gray-100 rounded-full w-80 h-80 mx-auto grid grid-cols-3 gap-2 items-center p-8 pt-15 justify-center'>
            <div className='flex flex-col bg-gray-300 px-2 py-1 rounded-lg border border-gray-500 items-center'>
              <FaCreditCard className="text-2xl text-blue-600 mb-1" />
              <span className='text-xs font-medium'>Credit Card</span>
            </div>
            <div className='flex flex-col bg-gray-300 px-2 py-1 rounded-lg border border-gray-500 items-center'>
              <FaPaypal className="text-2xl text-blue-500 mb-1" />
              <span className='text-xs font-medium'>Paypal</span>
            </div>
            <div className='flex flex-col bg-gray-300 px-2 py-1 rounded-lg border border-gray-500 items-center'>
              <FaBitcoin className="text-2xl text-orange-500 mb-1" />
              <span className='text-xs font-medium'>Bitcoin</span>
            </div>
            <div className='flex flex-col bg-gray-300 px-2 py-1 rounded-lg border border-gray-500 items-center'>
              <div className="text-2xl text-gray-500 mb-1">LTC</div>
              <span className='text-xs font-medium'>Litecoin</span>
            </div>
            <div className='flex flex-col bg-gray-300 px-2 py-1 rounded-lg border border-gray-500 items-center'>
              <div className="text-2xl text-purple-500 mb-1">ETH</div>
              <span className='text-xs font-medium'>Ethereum</span>
            </div>
            <div className='flex flex-col bg-gray-300 px-2 py-1 rounded-lg border border-gray-500 items-center'>
              <div className="text-2xl text-blue-400 mb-1">XRP</div>
              <span className='text-xs font-medium'>Ripple</span>
            </div>
            <div></div>

            <button className='text-black text-center underline w-30 font-semibold -ml-4 text-sm'>
              VIEW ALL OPTION
            </button>
          </div>
      </div>
      </div>

      <div className='flex-1'>
        <div className='py-8'>
          <div className='space-y-4 w-full md:w-3/4'>
            <div className='flex items-center gap-4 bg-white p-4 py-8 rounded-lg border'>
              <div className='border border-gray-400 p-2 rounded-full'>
                    <FaInfinity className='text-3xl text-blue-500 size-12' />
              </div>
              <div>
                <h1 className='text-xl font-bold'>NO LIMIT</h1>
                <p className='text-gray-600'>Unlimited maximum withdrawal amount</p>
              </div>
            </div>
            
            <div className='flex items-center gap-4 bg-white p-4 py-8 rounded-lg border'>
                  <div className='border border-gray-400 p-2 rounded-full'>
              <FaClock className='text-3xl text-green-500 size-12' />
              </div>
              <div>
                <h1 className='text-xl font-bold'>WITHDRAWAL IN 24 / 7</h1>
                <p className='text-gray-600'>Deposit - instantaneous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions2