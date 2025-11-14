import React, { memo } from 'react';
import { motion } from 'framer-motion';

const OurFounder = memo(function OurFounder() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl md:text-4xl font-bold text-orange-600 mb-4"
          variants={itemVariants}
        >
          Our Founder
        </motion.h1>
      </motion.div>

      <motion.div 
        className="flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Founder Image */}
        <motion.div 
          className="w-full lg:w-2/5 flex justify-center"
          variants={itemVariants}
        >
          <div className="w-60 h-60 bg-gray-200 rounded-full shadow-lg flex items-center justify-center">
            <span className="text-gray-400 text-6xl">👤</span>
          </div>
        </motion.div>

        {/* Founder Content */}
        <motion.div 
          className="w-full lg:w-3/5 text-center lg:text-left"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-2xl md:text-2xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Founder & Visionary
          </motion.h2>
          
          <motion.h3 
            className="text-xl md:text-xl font-semibold text-orange-600 mb-6"
            variants={itemVariants}
          >
            S. Satnam Singh Matharu
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Driven by a lifelong commitment to Sikh sports, S. Satnam Singh Matharu founded the 
            Asian Sikh Games Foundation to inspire unity, talent development, and greater global 
            recognition of Sikh athletes.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default OurFounder;