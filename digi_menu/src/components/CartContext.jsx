import React, { createContext, useContext, useState, useEffect } from "react";

// Create the cart context
const CartContext = createContext();

const updateQuantity = (fid, newQty) => {
  setCart(
    cart.map((item) =>
      item.fid === fid ? { ...item, quantity: newQty } : item
    )
  );
};

// Hook to use the cart context
export const useCart = () => useContext(CartContext);

// Provider to wrap your App
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add new item (prevent duplicates)
  const addToCart = (item) => {
    const exists = cart.find((i) => i.fid === item.fid);
    if (!exists) {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Remove item by fid
  const removeFromCart = (fid) => {
    setCart(cart.filter((item) => item.fid !== fid));
  };

  // Update quantity of an item
  const updateQuantity = (fid, newQty) => {
    setCart(
      cart.map((item) =>
        item.fid === fid ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => setCart([]);

  // Derived values
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.fprice * item.quantity,
    0
  );
  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// Export the CartContext for use in other components
export default CartContext; 