import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import FAQ from "../Components/FAQ";

const ContactUs = memo(function ContactUs() {
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
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
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
    <>
      <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold text-orange-500 bg-clip-text pb-15">
            Contact
          </h1>{" "}
        </div>
        <motion.div
          className="flex flex-col lg:flex-row gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Left Side - Contact Information */}
          <motion.div className="w-full lg:w-1/2 flex" variants={itemVariants}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg border border-blue-200 p-8 w-full relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500 rounded-full opacity-10"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500 rounded-full opacity-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-500 rounded-full opacity-5"></div>

              <div className="relative z-10">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left"
                  variants={itemVariants}
                >
                  Contact Information
                </motion.h2>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">🏢</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800">
                      Asian Sikh Games Foundation (ASGF)
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800">
                      Headquarters: New Delhi, India
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">📧</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800">
                      Email: abc@gmail.com
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">📞</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800">
                      Phone: 0000000000
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-3 bg-white/80 rounded-lg border border-blue-100 shadow-sm"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">🌐</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800">
                      Website: www.abc.org
                    </span>
                  </motion.div>
                </div>

                {/* Additional creative element */}
                <motion.div
                  className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-200"
                  variants={itemVariants}
                >
                  <p className="text-blue-700 text-center font-medium">
                    🕒 Available 24/7 for your queries and support
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div className="w-full lg:w-1/2 flex" variants={itemVariants}>
            <div className="bg-white border border-gray-300 shadow-xl rounded-lg p-6 w-full">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* API Message */}
                <ApiMessage />

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.1 }}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.1 }}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <motion.input
                    type="tel"
                    id="number"
                    value={formData.number}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none ${
                      errors.number ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your 10-digit phone number"
                    maxLength="10"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.1 }}
                  />
                  {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your inquiry..."
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.1 }}
                  ></motion.textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex justify-center pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white py-3 px-4 rounded-full border-2 border-orange-600 font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={isSubmitting ? {} : { scale: 1.02 }}
                    whileTap={isSubmitting ? {} : { scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {isSubmitting ? 'SENDING...' : 'SUBMIT NOW'}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <FAQ />
    </>
  );
});

export default ContactUs;