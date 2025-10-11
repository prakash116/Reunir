import React from 'react';

function Main() {
  return (
    <div className="flex items-center justify-center px-4 py-20 md:py-8">
      <div className="text-center max-w-4xl">
        <div className="flex flex-col gap-10 md:gap-5 text-white text-4xl sm:text-6xl md:text-7xl mb-8">
          <span className="font-extralight text-4xl">TAKE YOUR</span>
          <span className="text-orange-600 font-bold text-5xl">INVESTSTRATEGY</span>
          <span>TO THE NEXT LEVEL</span>
        </div>

        <p className="text-gray-200 text-lg sm:text-xl md:text-2xl mb-10 mx-auto">
          A profitable platform for high-margin SPORT investment
        </p>

        <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-transform duration-300 hover:scale-105 hover:bg-[linear-gradient(90deg,#f97316,#ea580c)]">
          GET STARTED NOW!
        </button>
      </div>
    </div>
  );
}

export default React.memo(Main);
