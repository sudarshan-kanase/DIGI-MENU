import React from "react";
import { useCart } from "./CartContext";

export default function CartModal({ onClose, onPlaceOrder }) {
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
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl relative p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-orange-600 mb-4">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300 text-center py-6">
            Your cart is empty.
          </p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-80 overflow-y-auto mb-4">
              {cart.map((item) => (
                <li
                  key={item.fid}
                  className="flex justify-between items-center py-4"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.fname}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ₹{item.fprice}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="px-2 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded"
                      onClick={() =>
                        updateQuantity(item.fid, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="text-md font-bold">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded"
                      onClick={() =>
                        updateQuantity(item.fid, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 text-lg"
                      onClick={() => removeFromCart(item.fid)}
                      title="Remove item"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Total: ₹{totalPrice}
              </p>

              <div className="flex justify-between">
                <button
                  onClick={clearCart}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold px-4 py-2 rounded shadow"
                >
                  Clear Cart
                </button>
                <button
                  onClick={onPlaceOrder}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded shadow"
                >
                  🧾 Place Order
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
