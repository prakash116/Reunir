import React, { useState, useEffect } from "react";
import Header from "../Components/Header.jsx";
import Main from "../Components/Main.jsx";
import Stats from "../Components/Stats.jsx";
import PreHeader from "../Components/PreHeader.jsx";

function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      
      <div className="min-h-screen bg-[url('/header-bg.jpg')] bg-cover bg-center bg-no-repeat">
        
        <div className="min-h-screen bg-blue-600/40 flex flex-col">
        <PreHeader/>
          <div className={isSticky ? 'opacity-0' : 'opacity-100'}>
            <Header />
          </div>
          
          <div className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
            isSticky ? 'translate-y-0 bg-indigo-950 shadow-lg' : '-translate-y-full'
          }`}>
            <Header />
          </div>
          
          <Main />
          <Stats/>
        </div>
      </div>
    </div>
  );
}

export default Home;