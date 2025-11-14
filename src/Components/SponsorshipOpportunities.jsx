import React, { memo } from 'react';
import { motion } from 'framer-motion';

const SponsorshipOpportunities = memo(function SponsorshipOpportunities() {
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

  const benefits = [
    "Branding & promotional visibility",
    "Event participation privileges", 
    "Athlete engagement opportunities",
    "Community outreach recognition"
  ];

  return (
    <div className="w-full bg-zinc-200 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-10">
      <motion.div 
        className="flex flex-col lg:flex-row gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Left Side - Content */}
        <motion.div 
          className="w-full lg:w-1/2"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-2xl md:text-4xl font-bold text-orange-600 mb-6"
            variants={itemVariants}
          >
            Sponsorship Opportunities
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed mb-8"
            variants={itemVariants}
          >
            ASGF invites individuals, corporates, and institutions to partner with us as sponsors for the upcoming 2026–2027 Asian Sikh Games events.
          </motion.p>

          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Benefits for Sponsors:
          </motion.h2>
          
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 text-gray-700"
                variants={itemVariants}
              >
                <span className="text-orange-600 text-xl flex-shrink-0">●</span>
                <span className="text-lg leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <div className="w-full">
            <img 
              src="/Reunir/Sponsorship Opportunities.png" 
              alt="Sponsorship Opportunities" 
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default SponsorshipOpportunities;