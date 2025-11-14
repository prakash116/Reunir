import { motion } from 'framer-motion';
import { memo } from 'react';

const WhyAsianSikhGames = memo(function WhyAsianSikhGames() {
  const reasons = [
    {
      icon: "🌍",
      title: "Builds global Sikh sports identity",
      image: "/api/placeholder/300/200",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "💪",
      title: "Encourages youth empowerment & discipline",
      image: "/api/placeholder/300/200",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "🤝",
      title: "Expands cross-border collaboration",
      image: "/api/placeholder/300/200",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: "⚖️",
      title: "Supports gender-inclusive sports development",
      image: "/api/placeholder/300/200",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: "👥",
      title: "Strengthens community relationships",
      image: "/api/placeholder/300/200",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: "🎪",
      title: "Celebrates Sikh cultural & athletic heritage",
      image: "/api/placeholder/300/200",
      color: "from-red-500 to-orange-600"
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
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
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl font-bold text-orange-600 mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About
          </motion.h1>
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Asian Sikh Games ?
          </motion.h1>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardVariants.hover}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Image Placeholder */}
              <div className="h-32 sm:h-40 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-3xl">
                  {reason.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white text-sm shadow-md"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {reason.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-gray-800 leading-relaxed"
                    whileHover={{ color: "#1f2937" }}
                  >
                    {reason.title}
                  </motion.h3>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                <div className="absolute inset-[2px] rounded-xl bg-white z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default WhyAsianSikhGames;