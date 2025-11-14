import { motion } from 'framer-motion';
import { memo } from 'react';

const GoalsSection = memo(function GoalsSection() {
  const goals = [
    {
      icon: "🏆",
      title: "Conduct Asian Sikh Games & regional tournaments",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: "🌍",
      title: "Build international-level training and development programs",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      icon: "⭐",
      title: "Identify & support rising athletic talent",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: "🤝",
      title: "Strengthen collaboration between Asian Sikh sports institutions",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: "👩‍🎓",
      title: "Promote women's sports participation",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: "👴👶",
      title: "Encourage senior (Masters) and youth development programs",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: "🎭",
      title: "Showcase Sikh cultural heritage through traditional sports",
      color: "from-amber-500 to-red-600",
      bgColor: "bg-amber-50"
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

  const cardVariants = {
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
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob -z-10"></div>
      <div className="fixed top-10 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>
      <div className="fixed bottom-10 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Goals</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Building a stronger sports community through dedicated initiatives and programs
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Goals Grid - 4 columns on large screens */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${goal.bgColor} opacity-50`} />
              
              {/* Main Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Icon Container */}
                <motion.div 
                  className="mb-4 flex justify-center"
                  variants={iconVariants}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${goal.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {goal.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-gray-800 font-semibold text-center leading-tight mb-4 flex-grow text-sm sm:text-base"
                  whileHover={{ color: "#1f2937" }}
                >
                  {goal.title}
                </motion.h3>

                {/* Progress Bar */}
                <motion.div 
                  className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${goal.color} transition-all duration-1000`}
                    style={{ width: `${Math.random() * 30 + 70}%` }}
                  />
                </motion.div>

                {/* Progress Text */}
                <motion.div 
                  className="flex justify-between items-center text-xs text-gray-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span>Progress</span>
                  <span className="font-semibold">{Math.floor(Math.random() * 30 + 70)}%</span>
                </motion.div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${goal.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                <div className="absolute inset-[2px] rounded-2xl bg-white z-10" />
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl ${goal.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-2xl`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us in achieving these goals and building a stronger sports community
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
});

export default GoalsSection;