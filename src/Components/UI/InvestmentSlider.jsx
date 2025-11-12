import React, { useState, useEffect, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const InvestmentSlider = memo(function InvestmentSlider() {
  const sports = [
    {
      name: "Athletics",
      img: "https://images.unsplash.com/photo-1550675892-3d18a868b2c5?w=400&h=200&fit=crop",
      icon: "🏃",
      bgColor: "bg-red-500"
    },
    {
      name: "Badminton",
      img: "https://images.unsplash.com/photo-1595436107805-87b7f9aae56c?w=400&h=200&fit=crop",
      icon: "🏸",
      bgColor: "bg-blue-500"
    },
    {
      name: "Bodybuilding",
      img: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=400&h=200&fit=crop",
      icon: "💪",
      bgColor: "bg-orange-500"
    },
    {
      name: "Checkers / Mind Sports",
      img: "https://images.unsplash.com/photo-1586165368501-56c5c3503406?w=400&h=200&fit=crop",
      icon: "♟️",
      bgColor: "bg-purple-500"
    },
    {
      name: "Chess",
      img: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=200&fit=crop",
      icon: "♛",
      bgColor: "bg-gray-600"
    },
    {
      name: "Cricket",
      img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=200&fit=crop",
      icon: "🏏",
      bgColor: "bg-green-500"
    },
    {
      name: "Dastar Competition",
      img: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400&h=200&fit=crop",
      icon: "👳",
      bgColor: "bg-yellow-500"
    },
    {
      name: "Football",
      img: "https://images.unsplash.com/photo-1553778263-73a83babccb5?w=400&h=200&fit=crop",
      icon: "⚽",
      bgColor: "bg-emerald-500"
    },
    {
      name: "Gatka",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      icon: "⚔️",
      bgColor: "bg-amber-600"
    },
    {
      name: "Hockey",
      img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=200&fit=crop",
      icon: "🏑",
      bgColor: "bg-indigo-500"
    },
    {
      name: "Kabaddi",
      img: "https://images.unsplash.com/photo-1546518077-961c681b9b6e?w=400&h=200&fit=crop",
      icon: "🤼",
      bgColor: "bg-rose-500"
    },
    {
      name: "Table Tennis",
      img: "https://images.unsplash.com/photo-1611928328128-1a34196d5AF5?w=400&h=200&fit=crop",
      icon: "🏓",
      bgColor: "bg-cyan-500"
    },
    {
      name: "Volleyball",
      img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431f5?w=400&h=200&fit=crop",
      icon: "🏐",
      bgColor: "bg-lime-500"
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

  const totalSlides = Math.ceil(sports.length / itemsPerView)

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
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  }

  return (
    <div className="py-10 px-4 bg-transparent">
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
                <div className="flex gap-4 md:gap-6 w-full">
                  {sports
                    .slice(
                      currentIndex * itemsPerView,
                      currentIndex * itemsPerView + itemsPerView
                    )
                    .map((sport, index) => (
                      <motion.div
                        key={`${sport.name}-${currentIndex}-${index}`}
                        className="flex-1 min-w-0"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        <div className="bg-gray-50 flex flex-col items-center gap-3 rounded-xl pb-5 shadow-md border border-gray-200 text-center hover:shadow-xl transition-all duration-300 h-full">
                          <div className={`${sport.bgColor} rounded-b-full h-32 w-full overflow-hidden`}>
                            <motion.img 
                              src={sport.img} 
                              alt={sport.name}
                              className="rounded-b-full h-32 w-full object-cover"
                              loading="lazy"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                          <div className="flex bg-white p-3 rounded-full shadow-lg justify-center mb-3 -mt-12 border border-gray-100">
                            <span className="text-3xl">{sport.icon}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 px-4 leading-tight">
                            {sport.name}
                          </h3>
                          <motion.button 
                            className='bg-blue-800 text-white font-semibold px-4 py-2 w-2/3 rounded-full border-2 border-orange-600 transition-colors hover:bg-blue-900'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Learn More
                          </motion.button>
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
            
            <div className="flex space-x-2 hidden md:block">
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

export default InvestmentSlider