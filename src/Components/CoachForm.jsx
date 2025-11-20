import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CoachForm = () => {
  const navigate = useNavigate()
  // Options according to your coach schema
  const salutationOptions = ['Mr', 'Mrs', 'Ms', 'Dr', 'Prof'];
  const genderOptions = ['Male', 'Female', 'Other'];
  const bloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const levelOfSportOptions = ['Beginner', 'Intermediate', 'Advanced', 'Professional', 'Elite'];
  const yesNoOptions = ['Yes', 'No'];

  // Form state
  const [formData, setFormData] = useState({
    aadharnumber: '',
    email: '',
    salutation: '',
    name: '',
    dob: '',
    number: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
    pincode: '',
    profession: '',
    gender: '',
    bloodgroup: '',
    emgname: '',
    emgnumber: '',
    sportperson: '',
    sportDiscipline: '',
    levelOfSport: '',
    sportsTitleEarned: '',
    club: '',
    achievements: '',
    experienceAsCoach: '',
    overallExperience: '',
    lastOrganization: '',
    reference: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiMessage, setApiMessage] = useState({ type: '', text: '' });

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

    // Required fields validation (from your coach schema)
    if (!formData.aadharnumber.trim()) newErrors.aadharnumber = 'Aadhar number is required';
    else if (!/^\d{12}$/.test(formData.aadharnumber)) newErrors.aadharnumber = 'Aadhar must be 12 digits';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.number.trim()) newErrors.number = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.number)) newErrors.number = 'Phone must be 10 digits';

    if (!formData.gender) newErrors.gender = 'Gender is required';

    // Optional field validations
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'PIN code must be 6 digits';
    if (formData.emgnumber && !/^\d{10}$/.test(formData.emgnumber)) newErrors.emgnumber = 'Emergency contact must be 10 digits';

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
      // Prepare data for API according to coach schema
      const submitData = {
        aadharnumber: formData.aadharnumber.trim(),
        email: formData.email.toLowerCase().trim(),
        salutation: formData.salutation || 'Mr',
        name: formData.name.trim(),
        dob: formData.dob || null,
        number: formData.number.trim(),
        address: formData.address?.trim() || '',
        city: formData.city?.trim() || '',
        state: formData.state?.trim() || '',
        country: formData.country?.trim() || 'India',
        pincode: formData.pincode?.trim() || '',
        profession: formData.profession?.trim() || '',
        gender: formData.gender,
        bloodgroup: formData.bloodgroup?.toUpperCase() || '',
        emgname: formData.emgname?.trim() || '',
        emgnumber: formData.emgnumber?.trim() || '',
        sportperson: formData.sportperson === 'Yes',
        sportDiscipline: formData.sportDiscipline?.trim() || '',
        levelOfSport: formData.levelOfSport || '',
        sportsTitleEarned: formData.sportsTitleEarned?.trim() || '',
        club: formData.club?.trim() || '',
        achievements: formData.achievements?.trim() || '',
        experienceAsCoach: formData.experienceAsCoach?.trim() || '',
        overallExperience: formData.overallExperience?.trim() || '',
        lastOrganization: formData.lastOrganization?.trim() || '',
        reference: formData.reference?.trim() || ''
      };

      console.log('Submitting coach data:', submitData);

      const response = await fetch('http://localhost:8585/coach', {
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
          text: result.message || 'Coach registered successfully!' 
        });
        navigate('/')
        // Reset form
        setFormData({
          aadharnumber: '',
          email: '',
          salutation: '',
          name: '',
          dob: '',
          number: '',
          address: '',
          city: '',
          state: '',
          country: 'India',
          pincode: '',
          profession: '',
          gender: '',
          bloodgroup: '',
          emgname: '',
          emgnumber: '',
          sportperson: '',
          sportDiscipline: '',
          levelOfSport: '',
          sportsTitleEarned: '',
          club: '',
          achievements: '',
          experienceAsCoach: '',
          overallExperience: '',
          lastOrganization: '',
          reference: ''
        });
      } else {
        // Handle API errors
        if (result.errors && Array.isArray(result.errors)) {
          setApiMessage({ 
            type: 'error', 
            text: result.errors.join(', ') 
          });
        } else {
          setApiMessage({ 
            type: 'error', 
            text: result.message || 'Failed to register coach. Please try again.' 
          });
        }
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
        className={`p-4 rounded-lg mb-6 ${styles[apiMessage.type]}`}
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Coach Registration
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* API Message */}
            <ApiMessage />

            {/* Personal & Contact Details Section */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Personal & Contact Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Aadhaar */}
                <div className="md:col-span-2">
                  <label htmlFor="aadharnumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhaar Number *
                  </label>
                  <input
                    type="text"
                    id="aadharnumber"
                    value={formData.aadharnumber}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.aadharnumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter 12-digit Aadhaar number"
                    maxLength="12"
                  />
                  {errors.aadharnumber && <p className="text-red-500 text-sm mt-1">{errors.aadharnumber}</p>}
                </div>

                {/* Salutation */}
                <div>
                  <label htmlFor="salutation" className="block text-sm font-medium text-gray-700 mb-1">
                    Salutation
                  </label>
                  <select 
                    id="salutation"
                    value={formData.salutation}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select</option>
                    {salutationOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Contact Mobile Number */}
                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="number"
                    value={formData.number}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.number ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter 10-digit mobile number"
                    maxLength="10"
                  />
                  {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
                </div>

                {/* Gender */}
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select 
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.gender ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select</option>
                    {genderOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>

                {/* Blood Group */}
                <div>
                  <label htmlFor="bloodgroup" className="block text-sm font-medium text-gray-700 mb-1">
                    Blood Group
                  </label>
                  <select 
                    id="bloodgroup"
                    value={formData.bloodgroup}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select</option>
                    {bloodGroupOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Profession */}
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                    Profession
                  </label>
                  <input
                    type="text"
                    id="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your profession"
                  />
                </div>

                {/* Are you a Sports Person? */}
                <div>
                  <label htmlFor="sportperson" className="block text-sm font-medium text-gray-700 mb-1">
                    Are you a Sports Person?
                  </label>
                  <select 
                    id="sportperson"
                    value={formData.sportperson}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select</option>
                    {yesNoOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* House Number & Street Address */}
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    House Number & Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Full address"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="City"
                  />
                </div>

                {/* State */}
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="State"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Country"
                  />
                </div>

                {/* PIN Code */}
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.pincode ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="6-digit PIN code"
                    maxLength="6"
                  />
                  {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                </div>

                {/* Emergency Contact Name */}
                <div>
                  <label htmlFor="emgname" className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    id="emgname"
                    value={formData.emgname}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Emergency contact name"
                  />
                </div>

                {/* Emergency Contact Mobile Number */}
                <div>
                  <label htmlFor="emgnumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Contact Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="emgnumber"
                    value={formData.emgnumber}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.emgnumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="10-digit emergency number"
                    maxLength="10"
                  />
                  {errors.emgnumber && <p className="text-red-500 text-sm mt-1">{errors.emgnumber}</p>}
                </div>
              </div>
            </section>

            {/* Sports & Athlete Details Section */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Sports & Athlete Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sport Discipline */}
                <div>
                  <label htmlFor="sportDiscipline" className="block text-sm font-medium text-gray-700 mb-1">
                    Sport Discipline
                  </label>
                  <input
                    type="text"
                    id="sportDiscipline"
                    value={formData.sportDiscipline}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Athletics, Swimming"
                  />
                </div>

                {/* Level of Sport */}
                <div>
                  <label htmlFor="levelOfSport" className="block text-sm font-medium text-gray-700 mb-1">
                    Level of Sport
                  </label>
                  <select 
                    id="levelOfSport"
                    value={formData.levelOfSport}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select</option>
                    {levelOfSportOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Sports Title Earned */}
                <div>
                  <label htmlFor="sportsTitleEarned" className="block text-sm font-medium text-gray-700 mb-1">
                    Sports Title Earned
                  </label>
                  <input
                    type="text"
                    id="sportsTitleEarned"
                    value={formData.sportsTitleEarned}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., National Champion, Gold Medalist"
                  />
                </div>

                {/* Club */}
                <div>
                  <label htmlFor="club" className="block text-sm font-medium text-gray-700 mb-1">
                    Team/Club/Federation/Association
                  </label>
                  <input
                    type="text"
                    id="club"
                    value={formData.club}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Organization name"
                  />
                </div>

                {/* Sports Achievements */}
                <div className="md:col-span-2">
                  <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-1">
                    Sports Achievements
                  </label>
                  <textarea
                    id="achievements"
                    rows={4}
                    value={formData.achievements}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Medals, awards, accomplishments..."
                  />
                </div>
              </div>
            </section>

            {/* Coach-Specific Details Section */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Coaching Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Experience as Coach */}
                <div>
                  <label htmlFor="experienceAsCoach" className="block text-sm font-medium text-gray-700 mb-1">
                    Experience as Coach
                  </label>
                  <input
                    type="text"
                    id="experienceAsCoach"
                    value={formData.experienceAsCoach}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 5 years, 10 years"
                  />
                </div>

                {/* Overall Experience in Sports Field */}
                <div>
                  <label htmlFor="overallExperience" className="block text-sm font-medium text-gray-700 mb-1">
                    Overall Experience in Sports Field
                  </label>
                  <input
                    type="text"
                    id="overallExperience"
                    value={formData.overallExperience}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 15 years total experience"
                  />
                </div>

                {/* Last Organization */}
                <div>
                  <label htmlFor="lastOrganization" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Organization
                  </label>
                  <input
                    type="text"
                    id="lastOrganization"
                    value={formData.lastOrganization}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Previous organization"
                  />
                </div>

                {/* Reference */}
                <div>
                  <label htmlFor="reference" className="block text-sm font-medium text-gray-700 mb-1">
                    Reference (if any)
                  </label>
                  <input
                    type="text"
                    id="reference"
                    value={formData.reference}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Reference name or details"
                  />
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Registering...' : 'Register Coach'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CoachForm;