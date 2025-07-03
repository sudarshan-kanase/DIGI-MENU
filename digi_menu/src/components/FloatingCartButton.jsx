import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function FloatingCartButton({ itemCount, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 relative"
    >
      <FaShoppingCart className="text-xl" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
          {itemCount}
        </span>
      )}
    </button>
  );
}
