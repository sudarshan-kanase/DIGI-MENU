import React, { useState } from "react";
import { useCart } from "./CartContext";
import axios from "axios";
import "./PlaceOrderModal.css";

export default function PlaceOrderModal({ isOpen, onClose }) {
  const { cart, clearCart, removeFromCart } = useCart();
  const [name, setName] = useState("");
  const [cottage, setCottage] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.fprice * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !cottage || cart.length === 0) {
      return alert("Please fill all fields and add items to cart.");
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/api/orders", {
        name,
        cottage,
        items: cart,
        total,
      });
      alert("✅ Order placed successfully!");
      clearCart();
      onClose();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">📦 Place Order</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Cottage Name"
            value={cottage}
            onChange={(e) => setCottage(e.target.value)}
            required
          />

          <ul className="cart-preview">
            {cart.map((item) => (
              <li key={item.fid}>
                <span>{item.fname} × {item.quantity}</span>
                <span>₹{item.fprice * item.quantity}</span>
              </li>
            ))}
          </ul>

          <p className="modal-total">Total: ₹{total}</p>

          <button type="submit" disabled={loading}>
            {loading ? "Placing..." : "Place Order"}
          </button>
        </form>

        <button onClick={onClose} className="close-btn">Cancel</button>
      </div>
    </div>
  );
}
import "./PlaceOrderModal.css";