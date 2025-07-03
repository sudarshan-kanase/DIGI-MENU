// UserPage.jsx - read-only version for viewers
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuList from "./components/Card";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import "./App.css";

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
      <h2 className="text-center mb-4">🍽️ Explore Our Menu</h2>

      <CategoryFilter onFilter={setFilter} selected={filter} />
      <SearchBar onSearch={setSearchTerm} />

      <div className="text-center mb-3">
        <button className="btn btn-secondary" onClick={() => setFilter("")}>Show All</button>
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