import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Cleanify</h1>

        {/* Nav Links */}
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
          <NavLink
            to="/subscription"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600 font-semibold" : ""
              } font-bold`
            }
          >
            Subscription
          </NavLink>
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
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600 font-semibold" : ""
              } font-bold`
            }
          >
            How It Works
          </NavLink>
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
          <NavLink
            to="/worker/login"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600 font-semibold" : ""
              } font-bold`
            }
          >
            Worker Login
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600 font-semibold" : ""
              } font-bold`
            }
          >
          Contacts
          </NavLink>
        </nav>

        {/* CTA Button */}
        <NavLink
          to="/book-service"
          className="hidden md:inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
        >
          Book an Appointment
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 text-2xl">☰</button>
      </div>
    </header>
  );
};

export default Header;
