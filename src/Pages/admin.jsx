import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkSessionStorage();
  }, []);

  const checkSessionStorage = () => {
    const adminVerified = sessionStorage.getItem("adminVerified");
    
    if (adminVerified === "true") {
      setIsVerified(true);
      setLoading(false);
    } else {
      setShowPrompt(true);
      setLoading(false);
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    
    if (!verificationCode.trim()) {
      alert('Verification code is required');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://localhost:8787/secureCheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: verificationCode.trim() }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.match) {
        sessionStorage.setItem("adminVerified", "true");
        setIsVerified(true);
        setShowPrompt(false);
      } else {
        alert('Invalid verification code!');
        navigate('/');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert('Verification failed. Please try again.');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    alert('Verification cancelled');
    navigate('/');
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminVerified");
    setIsVerified(false);
    navigate('/');
  };

  const navigateToQueryList = () => {
    navigate('/admin/querylist');
  };

  const navigateToMemberList = () => {
    navigate('/admin/memberlist');
  };

  const navigateToAthleteList = () => {
    navigate('/admin/athletelist');
  };

  const navigateToCoachList = () => {
    navigate('/admin/coachlist');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  // Show verification prompt if not verified
  if (showPrompt) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Verification Required</h2>
          <p className="text-gray-600 mb-6">Please enter the secure verification code to access the Admin Dashboard.</p>
          
          <form onSubmit={handleVerification}>
            <div className="mb-6">
              <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-2">
                Verification Code
              </label>
              <input
                type="password"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter secure code"
                autoFocus
              />
            </div>
            
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Only show dashboard if verified
  if (!isVerified) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">Access Denied</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={navigateToQueryList}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-left hover:bg-blue-50 hover:border-blue-300 border-2 border-transparent"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Query List</h2>
            <p className="text-gray-600">View and manage all queries</p>
          </button>
          
          <button 
            onClick={navigateToMemberList}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-left hover:bg-green-50 hover:border-green-300 border-2 border-transparent"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Member List</h2>
            <p className="text-gray-600">Manage member information</p>
          </button>
          
          <button 
            onClick={navigateToAthleteList}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-left hover:bg-purple-50 hover:border-purple-300 border-2 border-transparent"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Athlete List</h2>
            <p className="text-gray-600">View and manage athletes</p>
          </button>
          
          <button 
            onClick={navigateToCoachList}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-left hover:bg-orange-50 hover:border-orange-300 border-2 border-transparent"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Coach List</h2>
            <p className="text-gray-600">Manage coach profiles</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;