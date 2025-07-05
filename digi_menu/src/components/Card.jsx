import React from "react";
import { useCart } from "./CartContext";
import "./Card.css";

export default function MenuList({ data }) {
  const { cart, addToCart, updateQuantity } = useCart();

  const handleAdd = (item) => {
    const exists = cart.find((c) => c.fid === item.fid);
    if (!exists) {
      addToCart(item);
    }
  };

  const handleIncrease = (fid) => {
    const item = cart.find((i) => i.fid === fid);
    if (item) {
      updateQuantity(fid, item.quantity + 1);
    }
  };

  const handleDecrease = (fid) => {
    const item = cart.find((i) => i.fid === fid);
    if (item.quantity > 1) {
      updateQuantity(fid, item.quantity - 1);
    }
  };

  return (
    <div className="menu-grid">
      {data.map((item) => {
        const inCart = cart.find((c) => c.fid === item.fid);
        return (
          <div className="menu-card" key={item.fid}>
            {/* <img src={item.fimg} alt={item.fname} className="menu-image" /> */}
            <div className="menu-content">
              <h3 className="menu-title">{item.fname}</h3>
              <p className="menu-category">{item.fcat}</p>
              <p className="menu-desc">{item.fdec}</p>
              <p className="menu-price">₹{item.fprice}</p>

              {!inCart ? (
                <button onClick={() => handleAdd(item)} className="menu-btn">
                  Add to Cart 🛒
                </button>
              ) : (
                <div className="quantity-control">
                  <button onClick={() => handleDecrease(item.fid)} className="qty-btn">−</button>
                  <span className="qty-number">{inCart.quantity}</span>
                  <button onClick={() => handleIncrease(item.fid)} className="qty-btn">+</button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
import "./Card.css"; // Ensure you have the CSS file for styling