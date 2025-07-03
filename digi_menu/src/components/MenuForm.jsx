// src/components/MenuForm.jsx
import React, { useState, useEffect } from "react";

export default function MenuForm({ onAdd, onUpdate, selected }) {
  const [form, setForm] = useState({ fname: "", fprice: "", fcat: "", fdec: "" });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    selected ? onUpdate(form) : onAdd(form);
    setForm({ fname: "", fprice: "", fcat: "", fdec: "" });
  };

  const handleCancel = () => {
    setForm({ fname: "", fprice: "", fcat: "", fdec: "" });
    if (selected) onUpdate(null); // resets the selected item
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input name="fname" className="form-control mb-2" placeholder="Food Name" value={form.fname} onChange={handleChange} required />
      <input name="fprice" className="form-control mb-2" placeholder="Price" value={form.fprice} onChange={handleChange} required />
      <input name="fcat" className="form-control mb-2" placeholder="Category" value={form.fcat} onChange={handleChange} required />
      <input name="fdec" className="form-control mb-2" placeholder="Description" value={form.fdec} onChange={handleChange} required />
      <div className="d-flex gap-2">
        <button type="submit" className={`btn ${selected ? "btn-warning" : "btn-success"}`}>
          {selected ? "Update" : "Add"} Item
        </button>
        {selected && (
          <button type="button" className="btn btn-sm btn-danger" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
// This component renders a form for adding or updating menu items
// It takes `onAdd`, `onUpdate`, and `selected` props 