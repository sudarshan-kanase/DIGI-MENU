import React from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search by food name or category..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

/*
  This SearchBar component:
  - Provides a centered search input
  - Calls the `onSearch` function with the user's input value on change
  - Can be reused anywhere to filter menu items, categories, etc.
*/
