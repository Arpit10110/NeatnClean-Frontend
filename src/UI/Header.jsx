import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {HashLink} from "react-router-hash-link"
const Header = () => {
  const [istoken, setistoken] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=");
      acc[name] = value;
      if (name === "access_token") {
        setistoken(true);
      }
      return acc;
    }, {});
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">neatNclean</h1>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600 font-semibold" : ""
              } font-bold`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600 font-semibold" : ""
              } font-bold`
            }
          >
            Services
          </NavLink>
          <HashLink
            to="/#pricing"
            className="hover:text-blue-600 transition  font-bold">
            Pricing
          </HashLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600 font-semibold" : ""
              } font-bold`
            }
          >
            About
          </NavLink>
          {istoken ? (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 font-semibold" : ""
                } font-bold`
              }
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/user/login"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 font-semibold" : ""
                } font-bold`
              }
            >
              Login
            </NavLink>
          )}
        
        </nav>
        {/* CTA Button (Desktop only) */}
        <NavLink
          to="/book-service"
          className="hidden md:inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
        >
          Book an Appointment
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="text-gray-700 text-2xl absolute top-4 right-4"
        >
          ✕
        </button>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-6 mt-16 px-6 text-gray-700 font-medium">
          <NavLink to="/" onClick={() => setIsSidebarOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={() => setIsSidebarOpen(false)}>
            Services
          </NavLink>
          <HashLink to="/#pricing" onClick={() => setIsSidebarOpen(false)}>
            Pricing
          </HashLink>
          <NavLink to="/about" onClick={() => setIsSidebarOpen(false)}>
            About
          </NavLink>
          {istoken ? (
            <NavLink to="/profile" onClick={() => setIsSidebarOpen(false)}>
              Profile
            </NavLink>
          ) : (
            <NavLink to="/user/login" onClick={() => setIsSidebarOpen(false)}>
              Login
            </NavLink>
          )}
          <NavLink
            to="/book-service"
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            Book an Appointment
          </NavLink>
        </nav>
      </div>

      {/* Overlay (when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
