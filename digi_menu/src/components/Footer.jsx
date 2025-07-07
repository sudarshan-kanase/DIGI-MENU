import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-8 px-4 sm:px-8 mt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 w-auto rounded-md shadow-md" />
          <div>
            <h3 className="text-lg font-semibold text-orange-400">
              Vrindavan Villa Retreat
            </h3>
            <p className="text-sm text-gray-400">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium text-gray-300">
          <li>
            <Link to="/about" className="hover:text-orange-400 transition-all duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-orange-400 transition-all duration-200">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-400 transition-all duration-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl text-gray-400">
          <a href="#" className="hover:text-orange-400 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
