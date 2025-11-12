import React, { memo } from 'react';
import { motion } from 'framer-motion';
import FAQ from '../Components/FAQ';

const ContactUs = memo(function ContactUs() {
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
    <>
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="flex flex-col lg:flex-row gap-8 items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Left Side - Contact Information */}
        <motion.div 
          className="w-full lg:w-1/2 flex"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg border border-blue-200 p-8 w-full relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500 rounded-full opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-500 rounded-full opacity-5"></div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left"
                variants={itemVariants}
              >
                Contact Information
              </motion.h2>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🏢</span>
                  </div>
                  <span className="text-lg font-medium text-gray-800">Asian Sikh Games Foundation (ASGF)</span>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <span className="text-lg font-medium text-gray-800">Headquarters: New Delhi, India</span>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">📧</span>
                  </div>
                  <span className="text-lg font-medium text-gray-800">Email: abc@gmail.com</span>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <span className="text-lg font-medium text-gray-800">Phone: 0000000000</span>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🌐</span>
                  </div>
                  <span className="text-lg font-medium text-gray-800">Website: www.abc.org</span>
                </motion.div>
              </div>

              {/* Additional creative element */}
              <motion.div 
                className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-200"
                variants={itemVariants}
              >
                <p className="text-blue-700 text-center font-medium">
                  🕒 Available 24/7 for your queries and support
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div 
          className="w-full lg:w-1/2 flex"
          variants={itemVariants}
        >
          <div className="bg-white border border-gray-300 shadow-xl rounded-lg p-6 w-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
                  placeholder="Enter your full name"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
                  placeholder="Enter your email address"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none resize-none"
                  placeholder="Tell us about your inquiry..."
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.1 }}
                ></motion.textarea>
              </div>

              <div className='flex justify-center pt-2'>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-4 rounded-full border-2 border-orange-600 font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  SUBMIT NOW
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
    <FAQ/>
    </>
  );
});

export default ContactUs;