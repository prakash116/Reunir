
import React from 'react'
import Invesment from './UI/Investment'
import InvestmentSlider from './UI/InvestmentSlider'

function InvestmentPlans() {
  return (
    <div 
      className="bg-[url('https://pixner.net/s4i/Reunir/img/investment-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div>
        <Invesment/>
        <InvestmentSlider/>
      </div>
    </div>
  )
}

export default InvestmentPlans
