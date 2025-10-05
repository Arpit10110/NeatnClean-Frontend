import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Admin = () => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await fetch("/api/v1/user/getuser", {
        method: "GET",
        credentials: "include", // Include cookies if needed
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success && data.user.role === "admin") {
        setAdminData(data.user);
      } else {
        // If not admin, redirect to homepage
        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      const response = await fetch('/api/v1/user/logout', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (data.success) {
        window.location.href = '/';
      } else {
        setError('Logout failed');
      }
    } catch (err) {
      setError('Network error during logout');
      console.error('Error during logout:', err);
    } finally {
      setLoggingOut(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!adminData) {
    return null; // Will redirect in getUser if not admin
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Admin Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Admin Dashboard
          </h1>
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-32">Name:</span>
              <span className="text-gray-600">{adminData.name}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-32">Phone:</span>
              <span className="text-gray-600">{adminData.phone}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-32">Address:</span>
              <span className="text-gray-600">{adminData.address}</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Management Card */}
          <NavLink
            to="/admin/userlist"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                User List
              </h2>
              <p className="text-gray-600 text-sm">
                View and manage all registered users
              </p>
            </div>
          </NavLink>

          {/* Order Management Card */}
          <NavLink
            to="/admin/userorders"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Order Management
              </h2>
              <p className="text-gray-600 text-sm">
                Track and manage customer orders
              </p>
            </div>
          </NavLink>

          {/* Worker List  */}
          <NavLink
            to="/admin/workerlist"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Worker List
              </h2>
              <p className="text-gray-600 text-sm">
                View and manage all registered workers
              </p>
            </div>
          </NavLink>
          {/* Worker Applications Card */}
          <NavLink
            to="/admin/workerapplication"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Worker Applications
              </h2>
              <p className="text-gray-600 text-sm">
                Review and process worker applications
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Admin;
