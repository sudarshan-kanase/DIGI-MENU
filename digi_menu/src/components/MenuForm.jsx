import React, { useState, useEffect } from "react";
import "./MenuForm.css"; // Ensure this file contains your latest .menu-form styles

export default function MenuForm({ onAdd, onUpdate, selected }) {
  const [form, setForm] = useState({ fname: "", fprice: "", fcat: "", fdec: "" });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    selected ? onUpdate(form) : onAdd(form);
    setForm({ fname: "", fprice: "", fcat: "", fdec: "" });
  };

  const handleCancel = () => {
    setForm({ fname: "", fprice: "", fcat: "", fdec: "" });
    if (selected) onUpdate(null);
  };

  return (
    <div className="menu-form">
      <h2>{selected ? "Update Menu Item" : "Add New Menu Item"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="fname"
          placeholder="Food Name"
          value={form.fname}
          onChange={handleChange}
          required
        />
        <input
          name="fprice"
          placeholder="Price"
          value={form.fprice}
          onChange={handleChange}
          required
        />
        <input
          name="fcat"
          placeholder="Category"
          value={form.fcat}
          onChange={handleChange}
          required
        />
        <input
          name="fdec"
          placeholder="Description"
          value={form.fdec}
          onChange={handleChange}
          required
        />
        <div className="button-group">
          <button type="submit" className={`btn ${selected ? "btn-warning" : "btn-success"}`}>
            {selected ? "Update" : "Add"} Item
          </button>
          {selected && (
            <button type="button" className="btn btn-danger" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
// Ensure you have the necessary CSS styles in MenuForm.css
