import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUsers, FaTrophy, FaMapMarkerAlt } from "react-icons/fa";

const UpcomingEvent = memo(function UpcomingEvent() {
  const events = [
    {
      id: 1,
      name: "Asian Sikh Games 2025",
      avatar: "🏃",
      location: "Multiple Venues Across Asia",
      participants: "5,000+ Athletes",
      status: "Planning Phase",
      category: "Multi-Sport Event",
    },
    {
      id: 2,
      name: "Regional Qualifiers",
      avatar: "🏆",
      location: "Various Host Nations",
      participants: "2,000+ Athletes",
      status: "Scheduled",
      category: "Qualification",
    },
    {
      id: 3,
      name: "Youth Development Camp",
      avatar: "👦",
      location: "New Delhi, India",
      participants: "500+ Young Athletes",
      status: "Confirmed",
      category: "Training",
    },
    {
      id: 4,
      name: "International Sikh Sports Summit",
      avatar: "🤝",
      location: "Virtual & Physical",
      participants: "Sports Officials",
      status: "Planning",
      category: "Conference",
    },
    {
      id: 5,
      name: "Community Sports Festival",
      avatar: "🎪",
      location: "Major Sikh Communities",
      participants: "10,000+ Attendees",
      status: "In Discussion",
      category: "Festival",
    },
  ];

  // Function to get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "Confirmed":
        return <FaCalendarAlt className="text-green-500 text-lg" />;
      case "Scheduled":
        return <FaCalendarAlt className="text-blue-500 text-lg" />;
      case "Planning Phase":
        return <FaCalendarAlt className="text-orange-500 text-lg" />;
      case "Planning":
        return <FaCalendarAlt className="text-yellow-500 text-lg" />;
      case "In Discussion":
        return <FaCalendarAlt className="text-purple-500 text-lg" />;
      default:
        return <FaCalendarAlt className="text-gray-500 text-lg" />;
    }
  };

  // Function to get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Multi-Sport Event":
        return <FaTrophy className="text-orange-500" />;
      case "Qualification":
        return <FaUsers className="text-blue-500" />;
      case "Training":
        return <FaUsers className="text-green-500" />;
      case "Conference":
        return <FaUsers className="text-purple-500" />;
      case "Festival":
        return <FaTrophy className="text-red-500" />;
      default:
        return <FaTrophy className="text-gray-500" />;
    }
  };

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

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <motion.div 
        className="bg-transparent py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.span 
            className="text-black font-medium text-2xl block"
            variants={itemVariants}
          >
            Event Updates
          </motion.span>

          <motion.h1 
            className="text-4xl font-bold text-orange-600"
            variants={itemVariants}
          >
            Upcoming Event
          </motion.h1>

          <motion.p 
            className="text-gray-600 text-base leading-relaxed"
            variants={itemVariants}
          >
            The next edition of the Asian Sikh Games is being planned, with dates yet to be finalized. 
            Updates will be announced soon.
          </motion.p>

          {/* Buttons with Icons */}
          {/* <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4 items-center p-6 rounded-full border-2 border-orange-600 bg-white"
            variants={itemVariants}
          >
            <motion.button 
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt className="text-lg" />
              Event Schedule
            </motion.button>
            <motion.button 
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUsers className="text-lg" />
              Participants
            </motion.button>
            <motion.button 
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTrophy className="text-lg" />
              Sports List
            </motion.button>
          </motion.div> */}
        </div>
      </motion.div>

      {/* Table Section with Horizontal Scroll */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <motion.div 
          className="bg-white shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Event Name</th>
                  <th className="py-4 px-6 text-left font-semibold">Location</th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Participants
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">Status</th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {events.map((event, index) => (
                  <motion.tr
                    key={event.id}
                    className="hover:bg-gray-50 transition-colors"
                    variants={tableRowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                          {event.avatar}
                        </div>
                        <span className="font-medium text-gray-800">
                          {event.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span className="text-gray-700">
                          {event.location}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-blue-600">
                        {event.participants}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(event.status)}
                        <span className="font-medium text-gray-700">
                          {event.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(event.category)}
                        <span className="text-gray-700">
                          {event.category}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Table with Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <tr>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Event Name
                      </th>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Location
                      </th>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Participants
                      </th>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Status
                      </th>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {events.map((event, index) => (
                      <motion.tr
                        key={event.id}
                        className="hover:bg-gray-50 transition-colors"
                        variants={tableRowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                              {event.avatar}
                            </div>
                            <span className="font-medium text-gray-800 text-sm">
                              {event.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-red-500 text-sm" />
                            <span className="text-gray-700 text-sm">
                              {event.location}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="font-semibold text-blue-600 text-sm">
                            {event.participants}
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(event.status)}
                            <span className="font-medium text-gray-700 text-sm">
                              {event.status}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(event.category)}
                            <span className="text-gray-700 text-sm">
                              {event.category}
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scroll Indicator for Mobile */}
            <div className="bg-gray-100 py-2 px-4 text-center">
              <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                <span className="animate-pulse">←</span>
                Scroll horizontally to view more
                <span className="animate-pulse">→</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <motion.div 
        className="flex justify-center items-center pb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.a
          href="#"
          className="group text-white bg-gradient-to-r from-blue-900 to-orange-400 border border-orange-400 font-medium px-10 py-3 rounded-full transition-all duration-300 hover:bg-orange-500 hover:from-orange-500 hover:to-orange-500 hover:border-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW ALL EVENTS
        </motion.a>
      </motion.div> */}
    </div>
  );
});

export default UpcomingEvent;