import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaMoon, FaSun, FaBell, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Admin logout
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminUser");
    navigate("/admin-login");
  };

  const isAdminPage = pathname.startsWith("/admin");

  // Hide dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* 🍽 Logo and Brand */}
        <Link
          to="/"
          className="text-2xl font-bold flex items-center gap-2 text-orange-600 dark:text-orange-400"
        >
          <img src={logo} alt="Vrindavan Villa Retreat" className="h-10 w-auto rounded-md" />
          <span className="tracking-wide">Vrindavan Villa Retreat</span>
        </Link>

        {/* 🔗 Nav Menu */}
        <div className="flex items-center gap-6 text-sm md:text-base">
          <Link
            to="/"
            className={`hover:text-orange-600 dark:hover:text-orange-400 transition font-medium ${
              pathname === "/" ? "text-orange-600 dark:text-orange-400" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            User View
          </Link>

         

          {/* 🌙 Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition"
            title="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* 🔔 Notifications */}
          <div
            className="relative cursor-pointer text-gray-700 dark:text-gray-300 hover:text-red-500 transition"
            title="Notifications"
          >
            <FaBell className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
              3
            </span>
          </div>

          {/* 👤 User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <FaUserCircle
              className="text-2xl cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
              onClick={() => setShowDropdown(!showDropdown)}
              title="User Menu"
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-20">
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  Settings
                </Link>

                {isAdminPage && (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-red-600 dark:text-red-400"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
