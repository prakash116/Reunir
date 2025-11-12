import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaEnvelope, FaUser, FaImages } from 'react-icons/fa';

const PreHeader = memo(function PreHeader() {
  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hover: {
      color: "#ffffff",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className='hidden md:block text-white py-2 px-4 sm:px-8 lg:px-14 border-b border-gray-500 bg-gray-900'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-2'>
        
        {/* Left Section - Support */}
        <motion.div 
          className='flex flex-col md:flex-row items-center gap-4 text-sm'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.div 
            className='flex items-center gap-2 cursor-pointer'
            whileHover="hover"
          >
            <motion.div variants={iconVariants}>
              <FaHeadset className="text-blue-400" />
            </motion.div>
            <motion.span 
              className='text-gray-300'
              variants={textVariants}
            >
              Support
            </motion.span>
          </motion.div>
          <motion.div 
            className='flex items-center gap-2 cursor-pointer'
            whileHover="hover"
          >
            <motion.div variants={iconVariants}>
              <FaEnvelope className="text-blue-400" />
            </motion.div>
            <motion.span 
              className='text-gray-300'
              variants={textVariants}
            >
              info@abc.com
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Right Section - Founder & Gallery */}
        <motion.div 
          className='flex flex-col md:flex-row items-center gap-4 text-sm'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.div 
            className='flex items-center gap-2 cursor-pointer'
            whileHover="hover"
          >
            <motion.div variants={iconVariants}>
              <FaUser className="text-blue-400" />
            </motion.div>
            <motion.span 
              className='text-gray-300'
              variants={textVariants}
            >
              Our Founder
            </motion.span>
          </motion.div>
          <motion.div 
            className='flex items-center gap-2 cursor-pointer'
            whileHover="hover"
          >
            <motion.div variants={iconVariants}>
              <FaImages className="text-blue-400" />
            </motion.div>
            <motion.span 
              className='text-gray-300'
              variants={textVariants}
            >
              Gallery
            </motion.span>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
});

export default PreHeader;