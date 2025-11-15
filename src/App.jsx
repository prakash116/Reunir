import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
import OurFounder from "./Components/OurFounder";
import Subscriber from "./Components/Subscriber";
import Footer from "./Components/Footer";
import MemberForm from "./Components/MemberForm";
import AthleteForm from "./Components/AthleteForm";
import CoachForm from "./Components/CoachForm";

// Page transition animations
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

// Wrapper component for animated pages
const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    onAnimationStart={() => window.scrollTo(0, 0)}
  >
    {children}
  </motion.div>
);

// Scroll to top component - This needs to be inside Router context
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main App content that uses routing hooks
const AppContent = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PreHeader />
      <ScrollToTop />
      
      {/* Static Header that disappears when sticky header appears */}
      <div className={isSticky ? "opacity-0" : "opacity-100"}>
        <Header />
      </div>
      
      {/* Sticky Header */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
          isSticky
            ? "translate-y-0 bg-indigo-950 shadow-lg"
            : "-translate-y-full"
        }`}
        initial={false}
        animate={{ y: isSticky ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Header />
      </motion.div>

      {/* Animated Routes */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <AnimatedPage>
                <LandingPage />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/home" 
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/purpose" 
            element={
              <AnimatedPage>
                <OurPurpose />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/parttnership" 
            element={
              <AnimatedPage>
                <Parttnerships />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/sponsor" 
            element={
              <AnimatedPage>
                <Sposorship />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/about" 
            element={
              <AnimatedPage>
                <About />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <AnimatedPage>
                <ContactUs />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/involved" 
            element={
              <AnimatedPage>
                <GetInvolved />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/founder" 
            element={
              <AnimatedPage>
                <OurFounder />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <AnimatedPage>
                <Gallery />
              </AnimatedPage>
            } 
          />
        </Routes>
      </AnimatePresence>

      {/* Common components */}
      <Subscriber />
      <Footer />
      
      {/* Form components - consider making these routes if they're separate pages */}
      <MemberForm />
      <AthleteForm />
      <CoachForm />
    </>
  );
};

// Main App wrapper with Router
function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;