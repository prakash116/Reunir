import React from 'react'
import { FaUsers, FaGlobe, FaMoneyBillWave, FaChartLine } from 'react-icons/fa'

function Stats() {
  return (
    <div className="pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          
          <div className="text-center space-y-3 p-6">
            <FaUsers className="text-5xl text-orange-500 mx-auto" />
            <div className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-white">36,967,030</div>
            <div className="text-xs sm:text-sm text-orange-500 uppercase tracking-wider">REGISTERED USERS</div>
          </div>

          <div className="text-center space-y-3 p-6 md:border-l md:border-r border-white">
            <FaGlobe className="text-5xl text-orange-500 mx-auto" />
            <div className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-white">178</div>
            <div className="text-xs sm:text-sm text-orange-500 uppercase tracking-wider">COUNTRIES SUPPORTED</div>
          </div>

          <div className="text-center space-y-3 p-6 md:border-r border-white">
            <FaMoneyBillWave className="text-5xl text-orange-500 mx-auto" />
            <div className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-white">$10,800,000</div>
            <div className="text-xs sm:text-sm text-orange-500 uppercase tracking-wider">WITHDRAWN EACH MONTH</div>
          </div>

          <div className="text-center space-y-3 p-6">
            <FaChartLine className="text-5xl text-orange-500 mx-auto" />
            <div className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-white">$1,800,000</div>
            <div className="text-xs sm:text-sm text-orange-500 uppercase tracking-wider">ACTIVE INVESTORS DAILY</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Stats