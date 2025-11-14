import { motion } from 'framer-motion';
import { memo } from 'react';

const DiversityInclusion = memo(function DiversityInclusion() {
  const categories = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Men & Women",
      description: "Equal participation and opportunities for all genders",
      image: "/api/placeholder/300/200"
    },
    {
      icon: "👦‍👧‍👴",
      title: "Youth & Masters (40+)",
      description: "Programs tailored for all age groups and experience levels",
      image: "/api/placeholder/300/200"
    },
    {
      icon: "🏅",
      title: "Amateur & Professional Athletes",
      description: "Supporting athletes at every stage of their journey",
      image: "/api/placeholder/300/200"
    },
    {
      icon: "♿",
      title: "Para-Athletes",
      description: "Fully accessible facilities and specialized programs",
      image: "/api/placeholder/300/200"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -4,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-orange-600 mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Diversity & Inclusion
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The Foundation welcomes everyone with open arms
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Welcome Categories */}
        <motion.div 
          className="mb-16 sm:mb-20 lg:mb-18"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-2xl font-bold text-gray-800 text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            The Foundation Welcomes
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={cardVariants.hover}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    {category.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg mx-auto mb-4 shadow-md"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-gray-800 mb-2"
                    whileHover={{ color: "#1f2937" }}
                  >
                    {category.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {category.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Commitment Section - Simplified */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our Commitment
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-700 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              ASGF is committed to providing equal access, encouragement, and recognition for all.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default DiversityInclusion;