import React, { memo } from 'react';
import { motion } from 'framer-motion';

const PressMedia = memo(function PressMedia() {
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
    hidden: { opacity: 0, y: 10 },
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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900"
          variants={itemVariants}
        >
          Press & Media
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          For coverage, interviews, or collaboration:
        </motion.p>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 max-w-md mx-auto mt-8"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">📧</span>
            <span className="text-lg font-semibold text-gray-700">Email:</span>
          </div>
          <motion.p 
            className="text-blue-600 font-medium text-lg break-all"
            variants={itemVariants}
          >
            [placeholder]
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default PressMedia;