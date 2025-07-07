import React, { useState } from "react";
import axios from "axios";
import "./BillingPage.css";

export default function BillingPage() {
  const [name, setName] = useState("");
  const [cottage, setCottage] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!name || !cottage) {
      setError("Please enter both name and cottage.");
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:3000/api/orders/search",
        { name, cottage }
      );

      if (res.data) {
        setOrder(res.data);
        setError("");
      } else {
        setOrder(null);
        setError("No order found.");
      }
    } catch (err) {
      setOrder(null);
      setError("Failed to fetch order.");
    }
  };

  const handleReset = () => {
    setName("");
    setCottage("");
    setOrder(null);
    setError("");
  };

  const handlePrint = () => window.print();

  return (
    <div className="billing-container">
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
        🏨 Vrindavan Villa Retreat – Guest Order Bill
      </h3>
      <h2>🧾 Billing Counter</h2>

      <div className="billing-form no-print">
        <input
          type="text"
          placeholder="Enter User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Cottage Name"
          value={cottage}
          onChange={(e) => setCottage(e.target.value)}
        />
        <button onClick={handleSearch}>🔍 Search Order</button>
        <button onClick={handleReset} className="reset-btn">
          🔄 Reset
        </button>
      </div>

      {error && <p className="error-msg">{error}</p>}

      {order && (
        <div className="bill-display">
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Cottage:</strong> {order.cottage}</p>
          <p><strong>Date:</strong> {new Date(order.time).toLocaleString()}</p>

          <table className="bill-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.items?.length > 0 ? (
                order.items.map((item, i) => (
                  <tr key={i}>
                    <td>{item.fname}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.quantity * item.fprice}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No items found.</td>
                </tr>
              )}
            </tbody>
          </table>

          <h3>Total: ₹{order.total}</h3>

          <button onClick={handlePrint} className="print-btn no-print">
            🖨️ Print Bill
          </button>
        </div>
      )}
    </div>
  );
}
