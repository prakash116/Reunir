import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AthleteSheet,
  CoachSheet,
  MemberSheet,
  QuerySheet,
} from "../../Components/Download";

const Admin = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
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
      alert("Verification code is required");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:8787/secureCheck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        alert("Invalid verification code!");
        navigate("/");
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Verification failed. Please try again.");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    alert("Verification cancelled");
    navigate("/");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminVerified");
    setIsVerified(false);
    navigate("/");
  };

  const navigateToQueryList = () => {
    navigate("/admin/querylist");
  };

  const navigateToMemberList = () => {
    navigate("/admin/memberlist");
  };

  const navigateToAthleteList = () => {
    navigate("/admin/athletelist");
  };

  const navigateToCoachList = () => {
    navigate("/admin/coachlist");
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Admin Verification Required
          </h2>
          <p className="text-gray-600 mb-6">
            Please enter the secure verification code to access the Admin
            Dashboard.
          </p>

          <form onSubmit={handleVerification}>
            <div className="mb-6">
              <label
                htmlFor="verificationCode"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
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
            onClick={() => navigate("/")}
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
          {/* Query List Card - Compact */}
          <button
            onClick={navigateToQueryList}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-left hover:bg-blue-50 hover:border-blue-300 border-2 border-transparent group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  Query List
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  View and manage all queries
                </p>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>

          {/* Member List Card - Compact */}
          <button
            onClick={navigateToMemberList}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-left hover:bg-green-50 hover:border-green-300 border-2 border-transparent group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  Member List
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Manage member information
                </p>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>

          {/* Athlete List Card - Compact */}
          <button
            onClick={navigateToAthleteList}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-left hover:bg-purple-50 hover:border-purple-300 border-2 border-transparent group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  Athlete List
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  View and manage athletes
                </p>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>

          {/* Coach List Card - Compact */}
          <button
            onClick={navigateToCoachList}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-left hover:bg-orange-50 hover:border-orange-300 border-2 border-transparent group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-200">
                <svg
                  className="w-5 h-5 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  Coach List
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Manage coach profiles
                </p>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transform group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Export Data Sheets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Query Sheet Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg
                    className="w-7 h-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Queries
                </h3>
                <p className="text-xs text-gray-600 mb-4 px-2">
                  User inquiries and contact messages
                </p>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <QuerySheet />
                </div>
              </div>
            </div>

            {/* Member Sheet Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg
                    className="w-7 h-7 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Members
                </h3>
                <p className="text-xs text-gray-600 mb-4 px-2">
                  Complete member database
                </p>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <MemberSheet />
                </div>
              </div>
            </div>

            {/* Athlete Sheet Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg
                    className="w-7 h-7 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Athletes
                </h3>
                <p className="text-xs text-gray-600 mb-4 px-2">
                  Athlete profiles and performance data
                </p>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <AthleteSheet />
                </div>
              </div>
            </div>

            {/* Coach Sheet Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg
                    className="w-7 h-7 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Coaches
                </h3>
                <p className="text-xs text-gray-600 mb-4 px-2">
                  Coach profiles and assignments
                </p>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <CoachSheet />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center bg-gray-50 rounded-lg px-4 py-2">
              <svg
                className="w-4 h-4 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs text-gray-500">
                Files are exported in Excel format with complete records and
                timestamps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
