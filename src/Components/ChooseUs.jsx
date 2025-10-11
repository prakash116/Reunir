import React from 'react'
import WhyChooseUs from './UI/ChooseUs1.jsx'
import FeaturesSlider from './UI/FeaturesSlider.jsx'

function ChooseUs() {
  return (
    <div className="bg-[url('/choose-bg.jpg')] bg-cover bg-center bg-no-repeat py-10">
        <WhyChooseUs/>
        <FeaturesSlider/>
    </div>
  )
}

export default ChooseUs