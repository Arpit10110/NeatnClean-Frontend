import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 via-white to-purple-100 py-10">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 drop-shadow-md">
        Admin Dashboard
      </h1>

      {/* Navigation */}
      <div className="flex space-x-8 bg-white shadow-xl rounded-2xl px-10 py-5 border border-gray-200">
        <NavLink
          to="/admin/user"
          className={({ isActive }) =>
            `px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/admin/worker"
          className={({ isActive }) =>
            `px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`
          }
        >
          Workers
        </NavLink>
      </div>
    </div>
  );
};

export default Admin;