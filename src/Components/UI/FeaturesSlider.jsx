import React, { useState, useEffect } from 'react'
import { FaMoneyBillWave, FaRocket, FaUserFriends, FaShieldAlt, FaHeadset, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function FeaturesSlider() {
  const features = [
    {
      icon: <FaMoneyBillWave className="text-2xl md:text-3xl text-blue-600" />,
      title: "DAILY INCOME",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <FaRocket className="text-2xl md:text-3xl text-green-600" />,
      title: "FASTEST PAYMENTS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <FaUserFriends className="text-2xl md:text-3xl text-purple-600" />,
      title: "EASY TO USE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <FaShieldAlt className="text-2xl md:text-3xl text-red-600" />,
      title: "HIGH SECURITY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <FaHeadset className="text-2xl md:text-3xl text-orange-600" />,
      title: "24/7 SUPPORT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

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

      setCurrentIndex(0)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    const maxIndex = Math.ceil(features.length / itemsPerView) - 1
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    const maxIndex = Math.ceil(features.length / itemsPerView) - 1
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    )
  }

  // Calculate total slides for dots
  const totalSlides = Math.ceil(features.length / itemsPerView)

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div className="flex gap-4 md:gap-6">
                    {features
                      .slice(
                        slideIndex * itemsPerView, 
                        slideIndex * itemsPerView + itemsPerView
                      )
                      .map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex-1 min-w-0"
                        >
                          <div className="bg-gray-50 rounded-xl p-4 md:p-5 shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow h-full">
                            <div className="flex justify-center mb-3">
                              {feature.icon}
                            </div>
                            <h3 className="text-lg md:text-base font-bold text-gray-800 mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center mt-8 space-y-4">
          
          {/* Buttons and Dots */}
          <div className="flex justify-center items-center space-x-4">
            <button 
              onClick={prevSlide}
              className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors shadow-lg"
            >
              <FaChevronLeft className="text-lg" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors shadow-lg"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(FeaturesSlider)