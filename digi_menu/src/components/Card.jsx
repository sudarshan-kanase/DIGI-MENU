import React, { useState } from "react";
import styles from "./Card.module.css"; // Assuming you have a CSS module for styling
export default function MenuList({ data }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item, quantity) => {
    const existing = cart.find((i) => i.fid === item.fid);
    if (existing) {
      setCart(cart.map((i) => (i.fid === item.fid ? { ...i, quantity: i.quantity + quantity } : i)));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    alert(`${item.fname} added to cart`);
  };

  return (
    <div className={styles.cardGrid}>
      {data.map((item) => (
        <div key={item.fid} className={styles.card}>
        
          <div className={styles.body}>
            <h5 className={styles.title}>{item.fname}</h5>
            <p className={styles.category}>Category: {item.fcat}</p>
            <p className={styles.description}>{item.fdec}</p>
            <p className={styles.price}>Price: ₹{item.fprice}</p>
            <div className={styles.actions}>
              <input
                type="number"
                className={styles.quantity}
                min={1}
                defaultValue={1}
                id={`qty-${item.fid}`}
              />
              <button
                className={styles.button}
                onClick={() => {
                  const qty = parseInt(document.getElementById(`qty-${item.fid}`).value);
                  if (qty > 0) handleAddToCart(item, qty);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
