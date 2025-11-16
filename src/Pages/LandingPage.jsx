import React from 'react'
import InvestmentCalculator from '../Components/InvestmentCalculator.jsx'
import AboutUs from '../Components/AboutUs.jsx'
import ChooseUs from '../Components/ChooseUs.jsx'
import Guide from '../Components/Guide.jsx'
import Advantage from '../Components/Advantage.jsx'
import InvestmentPlans from '../Components/InvestmentPlans.jsx'
import Testimonial from '../Components/Testimonial.jsx'
import Transactions from '../Components/Transactions.jsx'
import TransactionHistory from '../Components/TransactionHistory.jsx'
import OurSmartApp from '../Components/OurSmartApp.jsx'
import SignUp from '../Components/SignUp.jsx'
import GetInTouch from '../Components/GetInTouch.jsx'
import Footer from '../Components/Footer.jsx'
import Subscriber from '../Components/Subscriber.jsx'
import FAQ from '../Components/FAQ.jsx'
import Home from './Home.jsx'

function LandingPage() {
  return (
    <div>
      <Home/>
      {/* <InvestmentCalculator/> */}
      <AboutUs/>
      <ChooseUs/>
      {/* <Guide/> */}
      <Advantage/>
      <InvestmentPlans/>
      {/* <InvestmentCalculator/> */}
      {/* <Transactions/> */}
      <TransactionHistory/>
      {/* <OurSmartApp/> */}
      <Testimonial/>
      {/* <FAQ/> */}
      {/* <SignUp/> */}
      <GetInTouch/>
    </div>
  )
}

export default LandingPage
