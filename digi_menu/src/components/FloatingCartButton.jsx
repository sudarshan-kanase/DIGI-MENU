// src/components/FloatingCartButton.jsx
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";
import CartModal from "./CartModal";
import "./FloatingCartButton.css";

export default function FloatingCartButton() {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="floating-cart" onClick={() => setOpen(true)}>
        <FaShoppingCart className="cart-icon" />
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>

      {open && <CartModal onClose={() => setOpen(false)} />}
    </>
  );
}
// FloatingCartButton.css