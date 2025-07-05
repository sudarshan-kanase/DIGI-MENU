// src/components/CategoryFilter.jsx
import React from "react";
import "./CategoryFilter.css";

const categories = [
   {
    label: "Starter",
    value: "Starter",
    img: "https://media.istockphoto.com/id/2158965107/photo/catering-buffet-in-hotel-restaurant.jpg?s=1024x1024&w=is&k=20&c=JaJCg-oW5QGlR-qQ3bouEX8D8k_ZtQ3VWFq2Jn8X9Ns="
  },
   {
    label: "Street Food",
    value: "Street Food",
    img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/samosa_chaat_99441_16x9.jpg"
  },
  {
    label: "Drinks",
    value: "Drinks",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
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
    label: "Dessert",
    value: "Dessert",
    img: "https://plus.unsplash.com/premium_photo-1713816698971-34b3bb124294?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function CategoryFilter({ onFilter, selected }) {
  return (
    <div className="category-filter text-center my-4">
      
    <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-700 mb-6 underline underline-offset-8 decoration-orange-400 tracking-wide">
  🔍 Explore by Category
</h2>
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