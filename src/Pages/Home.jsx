import React from "react";
import Main from "../Components/Main.jsx";
import Stats from "../Components/Stats.jsx";

function Home() {
  return (
    <div>
      <div className="min-h-screen bg-[url('/header-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen bg-blue-600/40 flex flex-col pt-[130px] -mt-[130px]">
          <Main />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default Home;
