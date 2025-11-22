import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const GetInTouch = memo(function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiMessage, setApiMessage] = useState({ type: '', text: '' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }

    // Clear API message when user starts typing
    if (apiMessage.text) {
      setApiMessage({ type: '', text: '' });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    
    if (!formData.number.trim()) newErrors.number = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.number)) newErrors.number = 'Phone must be 10 digits';
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiMessage({ type: '', text: '' });
    
    if (!validateForm()) {
      setApiMessage({ type: 'error', text: 'Please fix the errors above' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for API
      const submitData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        number: formData.number.trim(),
        message: formData.message.trim()
      };

      console.log('Submitting contact data:', submitData);

      const response = await fetch('https://asgf.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (result.success) {
        setApiMessage({ 
          type: 'success', 
          text: result.message || 'Message sent successfully!' 
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          number: '',
          message: ''
        });
      } else {
        setApiMessage({ 
          type: 'error', 
          text: result.error || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setApiMessage({ 
        type: 'error', 
        text: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // API Message component
  const ApiMessage = () => {
    if (!apiMessage.text) return null;

    const styles = {
      success: 'bg-green-50 border border-green-200 text-green-800',
      error: 'bg-red-50 border border-red-200 text-red-800'
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 rounded-lg mb-4 ${styles[apiMessage.type]}`}
      >
        <div className="flex items-center">
          <span className="font-medium">
            {apiMessage.type === 'success' ? 'Success!' : 'Error!'}
          </span>
          <span className="ml-2">{apiMessage.text}</span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.span 
          className="inline-block px-4 py-2 text-black text-2xl font-semibold mb-2"
          variants={itemVariants}
        >
          Contact Us
        </motion.span>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-orange-600 mb-3"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Please feel free to contact us through our support center. Simply choose the appropriate 
          support options to send us your questions, concerns and/or feedback. Our customer service 
          team is ready to overcome any issues that might occur.
        </motion.p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Image Section */}
        <motion.div 
          className="hidden md:block w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={imageVariants}
        >
          <div className="w-full h-full">
            <img 
              src="https://pixner.net/s4i/Reunir/img/contact-us.jpg" 
              alt="Contact Us" 
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
        
        {/* Form Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={formVariants}
        >
          <div className="bg-white border w-full max-w-md rounded-lg border-gray-300 shadow-xl p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* API Message */}
              <ApiMessage />

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="number" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <motion.input
                  type="tel"
                  id="number"
                  value={formData.number}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none ${
                    errors.number ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your 10-digit phone number"
                  maxLength="10"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your inquiry..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className='flex justify-center pt-2'>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-full border-2 border-orange-600 font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <FaPaperPlane className="w-4 h-4"/>
                  {isSubmitting ? 'SENDING...' : 'SUBMIT NOW'}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default GetInTouch;