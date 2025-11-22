import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemberForm = () => {
  const navigate = useNavigate()
  // Options according to your schema
  const salutationOptions = ['Mr', 'Mrs', 'Ms', 'Dr', 'Prof'];
  const genderOptions = ['Male', 'Female', 'Other'];
  const bloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
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
    sportperson: ''
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

    // Required fields validation
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
      // Prepare data for API
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
        sportperson: formData.sportperson === 'Yes'
      };

      console.log('Submitting data:', submitData);

      const response = await fetch('https://asgf.onrender.com/member', {
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
          text: result.message || 'Member registered successfully!' 
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
          sportperson: ''
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
            text: result.message || 'Failed to register member. Please try again.' 
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Member Registration</h1>
          <p className="text-gray-600">Please fill in all the required details below</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          {/* API Message */}
          <ApiMessage />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aadhaar Number */}
            <div className="md:col-span-2">
              <label htmlFor="aadharnumber" className="block text-sm font-medium text-gray-700 mb-1">
                Aadhaar Number *
              </label>
              <input
                type="text"
                id="aadharnumber"
                value={formData.aadharnumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.aadharnumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter 12-digit Aadhaar number"
                maxLength="12"
              />
              {errors.aadharnumber && <p className="text-red-500 text-sm mt-1">{errors.aadharnumber}</p>}
            </div>

            {/* Email Address */}
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Salutation</option>
                {salutationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.number ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter mobile number"
                maxLength="10"
              />
              {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                House Number & Street Address
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter complete address"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter city"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter state"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter country"
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
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.pincode ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter PIN code"
                maxLength="6"
              />
              {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter profession"
              />
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
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.gender ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Gender</option>
                {genderOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Blood Group</option>
                {bloodGroupOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter emergency contact name"
              />
            </div>

            {/* Emergency Contact Mobile */}
            <div>
              <label htmlFor="emgnumber" className="block text-sm font-medium text-gray-700 mb-1">
                Emergency Contact Mobile Number
              </label>
              <input
                type="tel"
                id="emgnumber"
                value={formData.emgnumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.emgnumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter emergency mobile number"
                maxLength="10"
              />
              {errors.emgnumber && <p className="text-red-500 text-sm mt-1">{errors.emgnumber}</p>}
            </div>

            {/* Sports Person */}
            <div className="md:col-span-2">
              <label htmlFor="sportperson" className="block text-sm font-medium text-gray-700 mb-1">
                Are you a Sports Person?
              </label>
              <select
                id="sportperson"
                value={formData.sportperson}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Option</option>
                {yesNoOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default MemberForm;