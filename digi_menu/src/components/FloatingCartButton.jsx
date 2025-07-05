// src/components/FloatingCartButton.jsx
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";
import CartModal from "./CartModal";
import PlaceOrderModal from "./PlaceOrderModal";
import "./FloatingCartButton.css";

export default function FloatingCartButton() {
  const { cartCount } = useCart();
  const [openCart, setOpenCart] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);

  return (
    <>
      {/* Floating Cart Icon */}
      <div className="floating-cart" onClick={() => setOpenCart(true)}>
        <FaShoppingCart className="cart-icon" />
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>

      {/* Cart Modal */}
      {openCart && (
        <CartModal
          onClose={() => setOpenCart(false)}
          onPlaceOrder={() => {
            setOpenCart(false); // Close cart
            setOpenOrderModal(true); // Open order form
          }}
        />
      )}

      {/* Place Order Modal */}
      <PlaceOrderModal
        isOpen={openOrderModal}
        onClose={() => setOpenOrderModal(false)}
      />
    </>
  );
}
