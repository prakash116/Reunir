import React, { memo } from "react";
import { motion } from "framer-motion";

const Main = memo(function Main() {
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="flex items-center justify-center px-4 py-20 md:py-8">
      <motion.div 
        className="text-center max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col gap-4 md:gap-5 md:mb-8"
          variants={containerVariants}
        >
          <motion.span 
            className="font-semibold text-orange-500 text-4xl md:text-4xl"
            variants={itemVariants}
          >
            Welcome to <br /> Asian Sikh Games Foundation{" "}
          </motion.span>
          <motion.span 
            className="text-orange-600 font-bold text-2xl md:text-5xl"
            variants={itemVariants}
          />
          <motion.span 
          className="text-white text-2xl md:text-4xl"
          variants={itemVariants}>
            Celebrating Sikh athletic excellence, unity & cultural pride across
            Asia
          </motion.span>
        </motion.div>

        <motion.p 
          className="text-gray-200 text-lg md:text-xl mb-10 mx-auto"
          variants={itemVariants}
        >
          The Asian Sikh Games Foundation is dedicated to empowering Sikh
          athletes, strengthening inter-community bonds, and creating
          cross-border sports opportunities. Our mission is to unite Asian
          nations through the spirit of sports, guided by Sikh values of Seva,
          courage, and equality.
        </motion.p>

        <motion.div 
          className="flex justify-center gap-4 flex-wrap"
          variants={itemVariants}
        >
          {["JOIN THE MOVEMENT", "SUPPORT", "PARTICIPATE"].map((text, index) => (
            <motion.button
              key={text}
              className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              aria-label={text.toLowerCase().replace(/\s+/g, '-')}
            >
              {text}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Main;