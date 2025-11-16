import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const GetInTouch = memo(function GetInTouch() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

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
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.span 
          className="inline-block px-4 py-2 text-black text-2xl font-semibold mb-2"
          variants={itemVariants}
        >
          Contact Us
        </motion.span>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-orange-600 mb-3"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Please feel free to contact us through our support center. Simply choose the appropriate 
          support options to send us your questions, concerns and/or feedback. Our customer service 
          team is ready to overcome any issues that might occur.
        </motion.p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Image Section - Fixed horizontal scroll issue by removing overflow */}
        <motion.div 
          className="hidden md:block w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={imageVariants}
        >
          <div className="w-full h-full">
            <img 
              src="https://pixner.net/s4i/Reunir/img/contact-us.jpg" 
              alt="Contact Us" 
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
        
        {/* Form Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={formVariants}
        >
          <div className="bg-white border w-full max-w-md rounded-lg border-gray-300 shadow-xl p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                  placeholder="Enter your full name"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                  placeholder="Enter your email address"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your inquiry..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </div>

              <div className='flex justify-center pt-2'>
                <motion.button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-full border-2 border-orange-600 font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane className="w-4 h-4"/>
                  SUBMIT NOW
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default GetInTouch;