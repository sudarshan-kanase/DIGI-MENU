// src/components/CategoryFilter.jsx
import React from "react";
import "./CategoryFilter.css";

const categories = [
  {
    label: "Veg",
    value: "Veg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqfiaF4yZ4a8MBSXSiTe6B2wZv-hTUFFDvQ&s"
  },
  {
    label: "Non-Veg",
    value: "Non-Veg",
    img: "https://storage.googleapis.com/shy-pub/242851/1659631728030_SKU-0011_0.jpg"
  },
  {
    label: "South Indian",
    value: "South Indian",
    img: "https://traditionallymodernfood.com/wp-content/uploads/2022/01/south-indian-lunch-combo-cooking-for-guest-scaled.jpeg"
  },
  {
    label: "Chinese",
    value: "Chinese",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/singapore-noodles_with_prawns-f8f4113.jpg?quality=90&resize=500,454"
  },
  {
    label: "Street Food",
    value: "Street Food",
    img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/samosa_chaat_99441_16x9.jpg"
  }
];

export default function CategoryFilter({ onFilter, selected }) {
  return (
    <div className="category-filter text-center my-4">
      <h3>🍽️ Our Categories</h3>
      <div className="category-container">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category-item ${selected === cat.value ? "active" : ""}`}
            onClick={() => onFilter(cat.value)}
          >
            <img src={cat.img} alt={cat.label} />
            <p>{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
// This component renders a category filter with clickable items
// Each category has an image and label, and clicking it calls the onFilter function with the category value
// The selected category is highlighted with a different style    