import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-400">🍽️ Foodie Menu</h4>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 text-sm font-medium">
          <a href="#about" className="hover:text-orange-500 transition">About</a>
          <a href="#menu" className="hover:text-orange-500 transition">Menu</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
// This Footer component provides a clean and modern footer section for the Foodie Menu application.
// It includes a title, copyright notice, navigation links, and social media icons.