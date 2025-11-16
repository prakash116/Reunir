import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Gallery = memo(function Gallery() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  // Placeholder images array
  const galleryImages = Array(10).fill(null);

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-orange-600 mb-6"
          variants={itemVariants}
        >
          Gallery
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
          variants={itemVariants}
        >
          Relive the spirited moments showcasing teamwork, heritage, and dedication.
        </motion.p>

        {/* Image Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
          variants={containerVariants}
        >
          {galleryImages.map((_, index) => (
            <motion.div
              key={index}
              className="aspect-square bg-gray-200 rounded-lg shadow-md overflow-hidden"
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                <span className="text-gray-500 text-4xl">📷</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.button
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          View All
        </motion.button>
      </motion.div>
    </div>
  );
});

export default Gallery;