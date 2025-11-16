import React from 'react'
import OurFounder from '../Components/OurFounder'
import OurPurpos from '../Components/OurPurpose'
import GoalsSection from '../Components/GoalsSection'
import InitiativesSection from '../Components/InitiativesSection'

function OurPurpose() {
  return (
    <div>
      <OurPurpos/>
      <GoalsSection/>
      <InitiativesSection/>
      {/* <OurFounder/> */}
    </div>
  )
}

export default OurPurpose
