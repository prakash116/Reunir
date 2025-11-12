import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaUserTie, FaShieldAlt, FaEye, FaSync, FaCheckCircle } from 'react-icons/fa'

const AboutUs = memo(function AboutUs() {
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const icons = [
    { Icon: FaRocket, text: "EFFICIENCY" },
    { Icon: FaUserTie, text: "EXPERIENCE" },
    { Icon: FaShieldAlt, text: "SECURITY" },
    { Icon: FaEye, text: "TRANSPARENT" },
    { Icon: FaSync, text: "SIMPLE" },
    { Icon: FaCheckCircle, text: "COMPLIANT" }
  ]

  return (
    <div className="bg-gray-red py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center lg:text-left mb-4"
            variants={itemVariants}
          >
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              WELCOME TO ASGF
            </h1>
            <h2 className="text-2xl lg:text-4xl font-bold text-orange-700">
              Who We Are
            </h2>
          </motion.div>
          
          <motion.div 
            className="mb-12"
            variants={containerVariants}
          >
            <motion.p 
              className="text-lg lg:text-xl text-gray-700 mb-6 font-medium"
              variants={itemVariants}
            >
              The<span className='text-orange-600'> Asian Sikh Games Foundation (ASGF) </span> unites Sikh athletes across Asia through tournaments and development programs, promoting excellence while preserving Sikh identity.
            </motion.p>
            <motion.p 
              className="text-base lg:text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Headquartered in New Delhi, India, ASGF collaborates with national and international Sikh sports bodies to provide platforms for participation, professional training, and global sports exposure.
            </motion.p>
            <motion.p 
              className="text-base lg:text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              ASGF works closely with the Sikh Games Federation of India (SGFI) to build pathways for international Sikh sporting excellence.
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              variants={itemVariants}
            >
              {icons.map(({ Icon, text }, index) => (
                <motion.div
                  key={text}
                  className="text-center"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="text-5xl text-orange-600 mx-auto mb-2 p-1" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800">{text}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img 
            src="https://pixner.net/s4i/Reunir/img/about-bg.jpg" 
            alt="About ASGF" 
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  )
})

export default AboutUs