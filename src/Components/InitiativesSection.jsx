import { motion } from 'framer-motion';
import { memo } from 'react';

const InitiativesSection = memo(function InitiativesSection() {
  const initiatives = [
    {
      icon: "🚩",
      title: "Asian Sikh Games (Flagship Event)",
      description: "Premier multi-sport event bringing together Sikh athletes from across Asia",
      color: "from-red-500 to-orange-600",
      bgColor: "bg-red-50",
      stats: "5000+ Athletes"
    },
    {
      icon: "🔍",
      title: "Talent search & athlete development camps",
      description: "Identifying and nurturing promising athletes through specialized training programs",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      stats: "100+ Camps"
    },
    {
      icon: "🌉",
      title: "Cross-border sports cooperation",
      description: "Building bridges between Sikh communities through sports diplomacy",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      stats: "15+ Countries"
    },
    {
      icon: "🥋",
      title: "Traditional Sikh sports promotion",
      description: "Reviving and promoting Gatka, Dastar Competition, and other cultural sports",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      stats: "8+ Traditional Sports"
    },
    {
      icon: "💪",
      title: "Women in sports empowerment",
      description: "Creating equal opportunities and platforms for women athletes",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      stats: "45% Participation"
    },
    {
      icon: "👑",
      title: "Masters (40+) Sikh sports programs",
      description: "Specialized programs for senior athletes to stay active and competitive",
      color: "from-amber-500 to-yellow-600",
      bgColor: "bg-amber-50",
      stats: "40+ Age Group"
    },
    {
      icon: "🌟",
      title: "Youth mentoring and sports awareness",
      description: "Guiding young talent and promoting sports culture in communities",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      stats: "10,000+ Youth"
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
      rotate: [0, -5, 5, 0],
      scale: 1.1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed top-5 left-5 w-60 h-60 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob -z-10"></div>
      <div className="fixed top-5 right-5 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>
      <div className="fixed bottom-5 left-1/4 w-60 h-60 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 -z-10"></div>
      
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Initiatives</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Driving positive change through targeted programs and community engagement
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Initiatives Grid - 4 columns on large screens */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${initiative.bgColor} opacity-50`} />
              
              {/* Main Content */}
              <div className="relative p-6 flex flex-col h-full">
                {/* Icon and Stats Row */}
                <div className="flex justify-between items-start mb-4">
                  <motion.div 
                    className="flex-shrink-0"
                    variants={iconVariants}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${initiative.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                      {initiative.icon}
                    </div>
                  </motion.div>
                  
                  {/* Stats Badge */}
                  <motion.div 
                    className="px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      {initiative.stats}
                    </span>
                  </motion.div>
                </div>

                {/* Title */}
                <motion.h3 
                  className="text-gray-800 font-semibold text-lg leading-tight mb-3 flex-grow"
                  whileHover={{ color: "#1f2937" }}
                >
                  {initiative.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 text-sm leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {initiative.description}
                </motion.p>

                {/* Progress Bar */}
                <div className="mt-auto">
                  <motion.div 
                    className="flex justify-between items-center text-xs text-gray-500 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <span>Initiative Progress</span>
                    <span className="font-semibold">{Math.floor(Math.random() * 30 + 70)}%</span>
                  </motion.div>
                  <motion.div 
                    className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${initiative.color} transition-all duration-1000`}
                      style={{ width: `${Math.random() * 30 + 70}%` }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${initiative.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                <div className="absolute inset-[2px] rounded-2xl bg-white z-10" />
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl ${initiative.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-2xl`} />
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
            Be part of our journey to empower communities through sports
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Initiatives
          </motion.button>
        </motion.div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(15px, -20px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
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

export default InitiativesSection;