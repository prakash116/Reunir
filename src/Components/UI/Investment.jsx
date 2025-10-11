import React from 'react';

function Investment() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4 bg-transparent py-4'>
      <h1 className='text-lg md:text-2xl font-semibold'>INVESTMENT OFFER</h1>
      <span className='text-2xl md:text-4xl font-bold text-orange-600'>OUR INVESTMENT PLANS</span>
      <p className='w-full px-1 md:w-1/2 text-center md:text-lg'>Reunir provides a straightforward and transparent mechanism to attract investments and make more profits.</p>
    </div>
  );
}

export default React.memo(Investment);