// src/components/CartModal.jsx
import React from "react";
import { useCart } from "./CartContext";
import "./CartModal.css";

export default function CartModal({ onClose }) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handlePlaceOrder = () => {
    alert("✅ Order placed!");
    clearCart();
    onClose();
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.fprice * item.quantity,
    0
  );

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <h2 className="cart-title">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.fid} className="cart-item">
                  <div>
                    <h4>{item.fname}</h4>
                    <p className="price">₹{item.fprice}</p>
                  </div>
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.fid, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.fid, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.fid)}>🗑</button>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <p className="total">Total: ₹{totalPrice}</p>
              <div className="cart-actions">
                <button onClick={clearCart} className="btn-clear">Clear Cart</button>
                <button onClick={handlePlaceOrder} className="btn-order">Place Order</button>
              </div>
            </div>
          </>
        )}
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
}