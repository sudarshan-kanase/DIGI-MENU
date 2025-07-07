// UserPage.jsx - read-only version for viewers
import FloatingCartButton from "./components/FloatingCartButton";
// UserPage.jsx - This file contains the main user interface for the menu page
// It includes a menu list, category filter, and search bar for users to explore the menu
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuList from "./components/Card";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";

// import "./App.css";
import './UserPage.css';
// This component renders the user page with a menu list, category filter, and search bar

export default function UserPage() {
  const [menu, setMenu] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getMenu = async () => {
    const res = await axios.get("http://127.0.0.1:3000/menu");
    setMenu(res.data.menu);
  };

  useEffect(() => {
    getMenu();
  }, []);

  const filteredMenu = menu.filter((item) => {
    const matchCategory = filter ? item.fcat.toLowerCase() === filter.toLowerCase() : true;
    const matchSearch =
      item.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fcat.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container mt-5">
  <div className="bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-50 py-12 px-6 rounded-2xl shadow-lg mb-8 max-w-5xl mx-auto transition-transform duration-300 hover:scale-[1.01]">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-orange-700 mb-4 tracking-wide animate-pulse underline decoration-orange-500 underline-offset-8">
    🍽️ Explore Our Menu
  </h2>
  <p className="text-lg md:text-xl text-center text-gray-800 italic leading-relaxed">
    Dive into our delightful range of food categories crafted to satisfy every appetite and occasion.
  </p>
</div>
      <FloatingCartButton />


      <CategoryFilter onFilter={setFilter} selected={filter} />
      <SearchBar onSearch={setSearchTerm} />

      <div className="text-center mb-3">
        <button
    onClick={() => setFilter("")}
    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-5 rounded-lg shadow transition duration-200"
  >
    📋 Show All
  </button>
      </div>

      <div className="text-center mb-3">
        <span className="badge bg-info">{filteredMenu.length} items found</span>
      </div>

      <MenuList data={filteredMenu} role="viewer" />
    </div>
  );
}
// This component renders the user page with a menu list, category filter, and search bar
// It fetches the menu data from the server and allows filtering and searching through the menu items                 