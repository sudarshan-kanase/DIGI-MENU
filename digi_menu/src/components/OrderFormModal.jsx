import React, { useState } from "react";
import "./OrderFormModal.css";

export default function OrderFormModal({ onConfirm, onCancel }) {
  const [customerName, setCustomerName] = useState("");
  const [cottageName, setCottageName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerName || !cottageName) return alert("Please fill all fields");

    onConfirm({ customerName, cottageName });
  };

  return (
    <div className="order-form-backdrop">
      <div className="order-form-modal">
        <h3>Enter Order Details</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cottage Name"
            value={cottageName}
            onChange={(e) => setCottageName(e.target.value)}
          />
          <button type="submit">Confirm Order</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
