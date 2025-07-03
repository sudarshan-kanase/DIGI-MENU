import React from "react";

export default function SearchBar({ onSearch }) {
  return (
    <div className="text-center mb-4">
      <input
        type="text"
        placeholder="🔍 Search by food name or category..."
        className="form-control w-50 mx-auto"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
// This SearchBar component allows users to search for food items by name or category.
// It takes an `onSearch` prop, which is a function that gets called with the