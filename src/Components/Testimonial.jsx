import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Testimonial1 from "./UI/Testimonial1";

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "This platform completely transformed how we manage our sports events. The experience was seamless and professional from start to finish.",
      name: "SARAH JOHNSON",
      location: "California, USA",
      date: "15 Jan 2024",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      text: "Outstanding service and support! Our tournament was a huge success thanks to the amazing features and reliable platform provided.",
      name: "MIKE CHEN",
      location: "Toronto, Canada",
      date: "22 Feb 2024",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      text: "The best sports management solution we've ever used. It streamlined our operations and enhanced our participants' experience significantly.",
      name: "EMMA DAVIS",
      location: "London, UK",
      date: "08 Mar 2024",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[url('https://pixner.net/s4i/Reunir/img/testimonial-bg.jpg')]">
      <Testimonial1 />
      <div className="md:min-h-screen bg-cover bg-center flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl w-full md:w-2/3 mx-auto relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative mb-16 transform transition-all duration-500 ease-in-out hover:shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-6xl text-gray-300 font-serif leading-0">
                "
              </span>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-light italic leading-relaxed px-4 md:px-8 -mt-8">
                {testimonials[currentIndex].text}
              </p>
              <span className="text-6xl text-gray-300 font-serif leading-0 rotate-180 inline-block -mt-4">
                "
              </span>
            </div>

            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-[#a60045] uppercase tracking-wide mb-2">
                {testimonials[currentIndex].name}
              </h3>
              <div className="text-gray-500 text-sm md:text-base">
                <span>{testimonials[currentIndex].location}</span>
                <span className="mx-2">•</span>
                <span>{testimonials[currentIndex].date}</span>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-white rotate-45 transform origin-center shadow-lg"></div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 relative">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-[#a60045] text-white rounded-full flex items-center justify-center hover:bg-[#8a0038] transition-all duration-300 transform hover:scale-110 shadow-lg z-20"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center space-x-6 md:space-x-8 relative">
              {testimonials.map((testimonial, index) => {
                const position = index - currentIndex;
                const isActive = index === currentIndex;

                return (
                  <div
                    key={testimonial.id}
                    className={`relative transition-all duration-500 ease-in-out ${
                      isActive
                        ? "scale-110 z-10"
                        : "scale-90 opacity-70 transform -translate-y-2"
                    } ${
                      position === -1
                        ? "-translate-x-4"
                        : position === 1
                        ? "translate-x-4"
                        : ""
                    }`}
                  >
                    {isActive && (
                      <div className="absolute -inset-2 border-2 border-dashed border-[#a60045] rounded-full animate-pulse"></div>
                    )}

                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg cursor-pointer transition-all duration-300 ${
                        isActive ? "ring-2 ring-white" : ""
                      }`}
                      onClick={() => goToSlide(index)}
                    />

                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#a60045] rounded-full"></div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-[#a60045] text-white rounded-full flex items-center justify-center hover:bg-[#8a0038] transition-all duration-300 transform hover:scale-110 shadow-lg z-20"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#a60045] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .bg-gradient-to-br {
            background: linear-gradient(135deg, #f0f4ff 0%, #e6e6ff 100%);
          }
          .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          .transition-all {
            transition-property: all;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ClientTestimonials;