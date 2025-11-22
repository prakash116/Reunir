import React, { useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage";
import ContactUs from "./Pages/ContactUs";
import Gallery from "./Pages/Gallery ";
import GetInvolved from "./Components/GetInvolved";
import PreHeader from "./Components/PreHeader";
import Header from "./Components/Header";
import Parttnerships from "./Pages/Parttnerships";
import OurPurpose from "./Pages/OurPurpose";
import Sposorship from "./Pages/Sposorship";
import About from "./Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurFounder from "./Components/OurFounder";
import Subscriber from "./Components/Subscriber";
import Footer from "./Components/Footer";
import MemberForm from "./Components/MemberForm";
import AthleteForm from "./Components/AthleteForm";
import CoachForm from "./Components/CoachForm";
import DataTable from "./Pages/ContactList";
import NewRegisterMembers from "./Pages/NewRegisterMembers";
import NewRegisterAthlets from "./Pages/NewRegisterAthletes";
import NewRegisterCoachs from "./Pages/NewRegisterCoachs";
import Admin from "./Pages/admin";
import AdminLayout from "./Pages/Admin/AdminLayout";

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
    <BrowserRouter>
      <PreHeader />
      <div className={isSticky ? "opacity-0" : "opacity-100"}>
        <Header />
      </div>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
          isSticky ? "translate-y-0 shadow-lg" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/purpose" element={<OurPurpose />} />
        <Route path="/parttnership" element={<Parttnerships />} />
        <Route path="/sponsor" element={<Sposorship />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/involved" element={<GetInvolved />} />
        <Route path="/founder" element={<OurFounder />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/memberform" element={<MemberForm />} />
        <Route path="/athleteform" element={<AthleteForm />} />
        <Route path="/coachform" element={<CoachForm />} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Admin />} />
          <Route path="querylist" element={<DataTable />} />
          <Route path="memberlist" element={<NewRegisterMembers />} />
          <Route path="athletelist" element={<NewRegisterAthlets />} />
          <Route path="coachlist" element={<NewRegisterCoachs />} />
        </Route>
      </Routes>
      <Subscriber />
      <Footer />
    </BrowserRouter>
  );
}

export default App;