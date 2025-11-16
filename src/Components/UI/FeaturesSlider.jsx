import React, { useState, useEffect, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaUserGraduate, FaGlobeAmericas, FaAward, FaRoad, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const FeaturesSlider = memo(function FeaturesSlider() {
  const features = [
    {
      icon: <FaSearch className="text-4xl md:text-4xl text-blue-600" />,
      title: "TALENT IDENTIFICATION CAMPS",
      description: "Discover and nurture promising Sikh athletes through specialized scouting programs and regional talent hunts."
    },
    {
      icon: <FaUserGraduate className="text-4xl md:text-4xl text-green-600" />,
      title: "PROFESSIONAL COACHING ACCESS",
      description: "World-class training and mentorship from experienced coaches to enhance technical skills and performance."
    },
    {
      icon: <FaGlobeAmericas className="text-4xl md:text-4xl text-purple-600" />,
      title: "NATIONAL & INTERNATIONAL EXPOSURE",
      description: "Opportunities to compete at prestigious tournaments and gain valuable experience on global platforms."
    },
    {
      icon: <FaAward className="text-4xl md:text-4xl text-red-600" />,
      title: "SCHOLARSHIPS & RECOGNITION",
      description: "Financial support and awards to help athletes focus on training while receiving deserved recognition."
    },
    {
      icon: <FaRoad className="text-4xl md:text-4xl text-orange-600" />,
      title: "CAREER & SPORTS DISCIPLINE GUIDANCE",
      description: "Comprehensive career planning and discipline management for balanced athletic and personal development."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    handleResize()
    const resizeHandler = () => handleResize()
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  const totalSlides = Math.ceil(features.length / itemsPerView)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => 
      prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
    )
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    )
  }, [totalSlides])

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.3 }
      }
    })
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex"
              >
                <div className="flex justify-center gap-4 md:gap-6 w-full">
                  {features
                    .slice(
                      currentIndex * itemsPerView,
                      currentIndex * itemsPerView + itemsPerView
                    )
                    .map((feature, index) => (
                      <motion.div
                        key={`${feature.title}-${currentIndex}-${index}`}
                        className="flex w-full md:w-1/4"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        <div className="bg-gray-50 w-full rounded-xl p-4 md:p-5 py-10 shadow-md border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
                          <motion.div 
                            className="flex justify-center mb-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {feature.icon}
                          </motion.div>
                          <h3 className="text-lg md:text-base font-bold text-gray-800 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  }
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center mt-8 space-y-4">
          <div className="flex justify-center items-center space-x-4">
            <motion.button 
              onClick={prevSlide}
              className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="text-lg" />
            </motion.button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
            
            <motion.button 
              onClick={nextSlide}
              className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="text-lg" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default FeaturesSlider