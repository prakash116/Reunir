import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Investment = memo(function Investment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className='w-full flex flex-col justify-center items-center gap-3 bg-transparent py-4'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.h1 
        className='text-lg md:text-2xl font-semibold'
        variants={itemVariants}
      >
        SPORTS WE PROMOTE
      </motion.h1>
      
      <motion.span 
        className='text-2xl md:text-5xl font-bold text-orange-600'
        variants={itemVariants}
      >
        Investment Offer
      </motion.span>
      
      <motion.p 
        className='w-full px-1 md:w-1/2 text-center md:text-lg'
        variants={itemVariants}
      >
        ASGF provides a straightforward and transparent mechanism to attract investments and grow sporting excellence across Asia.
      </motion.p>
    </motion.div>
  );
});

export default Investment;