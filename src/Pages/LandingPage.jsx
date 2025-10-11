import React from 'react'
import Home from './Home.jsx'
import InvestmentCalculator from '../Components/InvestmentCalculator.jsx'
import AboutUs from '../Components/AboutUs.jsx'
import ChooseUs from '../Components/ChooseUs.jsx'
import Guide from '../Components/Guide.jsx'
import Advantage from '../Components/Advantage.jsx'
import InvestmentPlans from '../Components/InvestmentPlans.jsx'
import Testimonial from '../Components/Testimonial.jsx'
import Partner from '../Components/Partner.jsx'
import Transactions from '../Components/Transactions.jsx'
import TransactionHistory from '../Components/TransactionHistory.jsx'
import OurSmartApp from '../Components/OurSmartApp.jsx'
import SignUp from '../Components/SignUp.jsx'
import GetInTouch from '../Components/GetInTouch.jsx'
import Footer from '../Components/Footer.jsx'
import Subscriber from '../Components/Subscriber.jsx'
import FAQ from '../Components/FAQ.jsx'

function LandingPage() {
  return (
    <div>
      <Home/>
      <InvestmentCalculator/>
      <AboutUs/>
      <ChooseUs/>
      <Guide/>
      <Advantage/>
      <InvestmentPlans/>
      <InvestmentCalculator/>
      <Partner/>
      <Transactions/>
      <TransactionHistory/>
      <OurSmartApp/>
      <Testimonial/>
      <FAQ/>
      <SignUp/>
      <GetInTouch/>
      <Subscriber/>
      <Footer/>
    </div>
  )
}

export default LandingPage
