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
    <div>
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
      <LandingPage /> {}
      <Home /> {}
      <OurPurpose /> {}
      <Parttnerships /> {}
      <Sposorship /> {}
      <About /> {}
      <ContactUs /> {}
      <Gallery /> {}
      <PressMedia />
      <DiversityInclusion />
      <GetInvolved />
    </div>
  );
}

export default App;
