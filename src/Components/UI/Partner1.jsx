import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaUsers, FaTrophy, FaGlobe, FaMonument } from 'react-icons/fa';

const Partner1 = memo(function Partner1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const partnerships = [
    {
      icon: FaTrophy,
      title: "Sikh Games Federation of India (SGFI)",
      description: "National sports governing body",
      color: "from-orange-500 to-red-500",
      iconColor: "text-white"
    },
    {
      icon: FaUsers,
      title: "Regional Sikh sports associations",
      description: "Local community sports networks",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-white"
    },
    {
      icon: FaTrophy,
      title: "Sports academies & training bodies",
      description: "Professional training institutions",
      color: "from-green-500 to-emerald-500",
      iconColor: "text-white"
    },
    {
      icon: FaMonument,
      title: "Community & cultural organizations",
      description: "Cultural heritage promoters",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-white"
    },
    {
      icon: FaGlobe,
      title: "International Sikh networks",
      description: "Global diaspora connections",
      color: "from-indigo-500 to-blue-500",
      iconColor: "text-white"
    },
    {
      icon: FaGlobe,
      title: "International Sikh networks",
      description: "Global diaspora connections",
      color: "from-indigo-500 to-blue-500",
      iconColor: "text-white"
    },
  ];

  return (
    <div className='bg-transparent py-16 px-4'>
      <motion.div 
        className='max-w-6xl mx-auto text-center space-y-8'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants}>
          <div className='inline-flex items-center justify-center gap-3 mb-4'>
            <span className='text-black font-bold text-2xl'>
              Partnerships & Collaborations
            </span>
          </div>
        </motion.div>

        <motion.h1 
          className='text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'
          variants={itemVariants}
        >
          ASGF Collaborates With
        </motion.h1>

        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'
          variants={containerVariants}
        >
          {partnerships.map((partner, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300'
              variants={cardVariants}
              whileHover="hover"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                <partner.icon className={`${partner.iconColor} text-2xl`} />
              </div>
              
              <h3 className='text-xl font-bold text-gray-800 mb-2 text-center'>
                {partner.title}
              </h3>
              
              <p className='text-gray-600 text-sm text-center mb-4'>
                {partner.description}
              </p>
              
              <div className='flex justify-center'>
                <div className='w-8 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full'></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className='bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mt-12 border border-orange-100'
          variants={itemVariants}
        >
          <motion.p 
            className='text-gray-700 text-lg leading-relaxed text-center font-medium'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            "These partnerships ensure competitive platforms, talent support, and community upliftment through shared values and collective growth."
          </motion.p>
        </motion.div>

        <motion.button 
          className='bg-gradient-to-r from-orange-600 to-red-600 border-2 border-orange-700 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 mt-8 shadow-lg hover:shadow-xl'
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(255, 107, 0, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className='flex items-center gap-2'>
            <FaHandshake className='text-lg' />
            Join Our Network
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
});

export default Partner1;