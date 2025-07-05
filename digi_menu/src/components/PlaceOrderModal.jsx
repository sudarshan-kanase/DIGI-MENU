import React, { useState, useEffect, useRef } from "react";
import { useCart } from "./CartContext";
import axios from "axios";

export default function PlaceOrderModal({ isOpen, onClose }) {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [cottage, setCottage] = useState("");
  const [loading, setLoading] = useState(false);
  const nameInputRef = useRef(null);

  const total = cart.reduce((sum, item) => sum + item.fprice * item.quantity, 0);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => nameInputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !cottage.trim() || cart.length === 0) {
      return alert("Please fill in all fields and add items to your cart.");
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/api/orders", {
        name: name.trim(),
        cottage: cottage.trim(),
        items: cart,
        total,
      });
      alert("✅ Order placed successfully!");
      clearCart();
      setName("");
      setCottage("");
      onClose();
    } catch (err) {
      console.error("Order error:", err);
      alert("❌ Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-xl shadow-xl p-6 relative animate-fadeIn">
        {/* Title */}
        <h2 className="text-3xl font-bold text-orange-600 mb-5 text-center">
          🧾 Confirm Your Order
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            ref={nameInputRef}
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border shadow-sm focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            placeholder="Cottage Name"
            value={cottage}
            onChange={(e) => setCottage(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border shadow-sm focus:ring-2 focus:ring-orange-400"
            required
          />

          {/* Cart Preview */}
          <div className="bg-orange-50 dark:bg-gray-800 rounded-lg max-h-52 overflow-y-auto p-3 divide-y divide-orange-100 dark:divide-gray-700">
            {cart.map((item) => (
              <div key={item.fid} className="flex justify-between py-2 text-sm">
                <span className="font-medium text-gray-800 dark:text-gray-100">
                  {item.fname} × {item.quantity}
                </span>
                <span className="text-gray-700 dark:text-gray-200">
                  ₹{item.fprice * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <p className="text-lg font-semibold text-right text-gray-900 dark:text-white mt-2">
            Total: ₹{total}
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
          >
            {loading ? "Placing Order..." : "✅ Place Order"}
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 text-2xl"
          title="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
// CSS for animation (add to your CSS file)
