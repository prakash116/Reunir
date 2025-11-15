import React, { useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage";
import PressMedia from "./Components/Press&Media";
import ContactUs from "./Pages/ContactUs";
import Gallery from "./Pages/Gallery ";
import DiversityInclusion from "./Components/DiversityInclusion";
import GetInvolved from "./Components/GetInvolved";
import PreHeader from "./Components/PreHeader";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Parttnerships from "./Pages/Parttnerships";
import OurPurpose from "./Pages/OurPurpose";
import Sposorship from "./Pages/Sposorship";
import About from "./Pages/About";
import { HashRouter, Route, Routes } from "react-router-dom";
import OurFounder from "./Components/OurFounder";
import Subscriber from "./Components/Subscriber";
import Footer from "./Components/Footer";
import MemberForm from "./Components/MemberForm";
import AthleteForm from "./Components/AthleteForm";
import CoachForm from "./Components/CoachForm";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HashRouter>
      <PreHeader />
      <div className={isSticky ? "opacity-0" : "opacity-100"}>
        <Header />
      </div>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
          isSticky
            ? "translate-y-0 bg-indigo-950 shadow-lg"
            : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/purpose" element={<OurPurpose />} />
        <Route path="/parttnership" element={<Parttnerships />} />
        <Route path="/sponsor" element={<Sposorship />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/involved" element={<GetInvolved/>} />
        <Route path="/founder" element={<OurFounder/>}/>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Subscriber/>
      <Footer/>
      {/* <PressMedia /> */}
      <MemberForm/>
      <AthleteForm/>
      <CoachForm/>
    </HashRouter>
  );
}

export default App;
