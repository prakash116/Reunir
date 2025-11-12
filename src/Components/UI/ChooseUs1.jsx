import React, { memo } from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = memo(function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <motion.div 
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-2xl md:text-2xl font-semibold text-black mb-6"
            variants={itemVariants}
          >
            WHY SHOULD CHOOSE US?
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-orange-600"
            variants={itemVariants}
          >
            Athlete Development
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="max-w-3xl mx-auto px-5 text-justify"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            ASGF provides comprehensive athlete development programs that nurture sporting talent, enhance skills, and create pathways for Sikh athletes to excel at national and international levels.
          </p>
        </motion.div>

      </div>
    </div>
  )
})

export default WhyChooseUs