import React, { memo } from "react";
import { motion } from "framer-motion";

const OurPurpose = memo(function OurPurpose() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const missionItems = [
    {
      icon: "🏆",
      text: "Promote Sikh participation in competitive sports across Asia",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "🌐",
      text: "Establish a strong, interconnected network of Sikh athletes",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🚀",
      text: "Encourage youth engagement and leadership through sports",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: "🕊️",
      text: "Preserve Sikh culture through inclusive and diverse sports programs",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "🤝",
      text: "Strengthen peace, unity, and collaboration across Asian regions",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-bold text-orange-500 bg-clip-text">
              Our Purpose
            </h1>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Mission Section */}
          <motion.div
            className="relative flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <div className="relative group w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-8 w-full h-full flex flex-col">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-md">🎯</span>
                  </div>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Mission
                  </h2>
                </motion.div>

                <div className="space-y-3 flex-1">
                  {missionItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 group"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                      >
                        <span className="text-white text-md">{item.icon}</span>
                      </div>
                      <p className="text-gray-700 text-md leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            className="relative flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <div className="relative group w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-2xl p-8 text-white overflow-hidden w-full h-full flex flex-col">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/20 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10 flex flex-col flex-1">
                  <motion.div
                    className="flex items-center gap-4 mb-8"
                    variants={itemVariants}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-2xl">
                      <span className="text-white text-md">👁️</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-black">Vision</h2>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 p-4 backdrop-blur-sm rounded-2xl border border-white/20 flex-1 flex flex-col justify-start gap-4 items-center"
                    variants={itemVariants}
                  >
                    <div className="flex items-start gap-4 w-full">
                      <span className="text-yellow-400 text-lg mt-1 flex-shrink-0">
                        ⭐
                      </span>
                      <p className="text-black text-md leading-relaxed font-medium">
                        To become the leading Sikh sports framework in Asia —
                        inspiring excellence, inclusion, and international
                        recognition — while nurturing generations of Sikh
                        athletes.
                      </p>
                    </div>
                    <div className="flex items-start gap-4 w-full">
                      <span className="text-yellow-400 text-lg mt-1 flex-shrink-0">
                        ⭐
                      </span>
                      <p className="text-black text-md leading-relaxed font-medium">
                        To become the leading Sikh sports framework in Asia —
                        inspiring excellence, inclusion, and international
                        recognition — while nurturing generations of Sikh
                        athletes.
                      </p>
                    </div>
                    <div className="flex items-start gap-4 w-full">
                      <span className="text-yellow-400 text-lg mt-1 flex-shrink-0">
                        ⭐
                      </span>
                      <p className="text-black text-md leading-relaxed font-medium">
                        To become the leading Sikh sports framework in Asia —
                        inspiring excellence, inclusion, and international
                        recognition — while nurturing generations of Sikh
                        athletes.
                      </p>
                    </div>
                  </motion.div>

                  {/* Decorative Footer */}
                  <motion.div
                    className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between"
                    variants={itemVariants}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-sm font-medium">
                        Building Legacy
                      </span>
                    </div>
                    <div className="text-blue-200 text-sm font-medium">
                      Future Focused
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default OurPurpose;
