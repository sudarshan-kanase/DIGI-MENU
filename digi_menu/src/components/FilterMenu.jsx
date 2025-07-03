import React from "react";
import "./FilterMenu.css";

export default function FilterMenu({ onFilter }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        className="filter-input"
        placeholder="🔍 Filter by Category"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
