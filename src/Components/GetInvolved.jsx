import { motion } from 'framer-motion';
import { memo } from 'react';

const GetInvolved = memo(function GetInvolved() {
  const roles = [
    {
      icon: "🏃‍♂️",
      title: "Athlete",
      description: "Compete and represent your community in various sports",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "👨‍🏫",
      title: "Coach",
      description: "Train and mentor the next generation of athletes",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🤝",
      title: "Volunteer",
      description: "Support event organization and community operations",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "💼",
      title: "Partner",
      description: "Collaborate with us to expand our reach and impact",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "💝",
      title: "Donor",
      description: "Help fund our programs and initiatives",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const roleCardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: [-1, 1, -1],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full blur-sm"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full blur-sm"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full blur-sm"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Modern Typography */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl font-black text-orange-600 py-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GET INVOLVED
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Be part of something bigger. Shape the future of Sikh sports.
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        {/* Circular Role Cards */}
        <motion.div 
          className="mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        > 
          <div className="flex flex-wrap justify-center gap-10">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                variants={roleCardVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Main Circular Card */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl flex flex-col items-center justify-center p-4 backdrop-blur-sm">
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10`} />
                  
                  {/* Icon */}
                  <motion.div 
                    className="text-3xl sm:text-4xl lg:text-5xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {role.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-white font-bold text-sm sm:text-base lg:text-lg text-center leading-tight"
                    whileHover={{ color: "#93c5fd" }}
                  >
                    {role.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section with Glass Morphism */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="bg-slate-800/30 backdrop-blur-lg rounded-3xl border border-slate-700/50 p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-white mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Make Impact?</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-lg sm:text-xl mb-5 max-w-2xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Join thousands of community members driving change through sports
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-3 group"
              >
                REGISTER NOW
              </motion.button>
              
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-3"
              >
                COLLABORATE
              </motion.button>
              
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center gap-3"
              >
                SUPPORT US
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default GetInvolved;