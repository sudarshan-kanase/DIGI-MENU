// src/pages/AdminRegister.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AdminRegister() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:3000/api/register", form);
      alert(res.data.message || "Registered successfully");
      navigate("/admin-login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-orange-600 text-center">Admin Register</h2>
        <input
          name="name"
          placeholder="Name"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder="Mobile"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Register
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/admin-login" className="text-orange-500 hover:underline">Login here</Link>
        </p>
      </form>
    </div>
  );
}
// This code defines a React component for an admin registration page.
// It includes a form for entering name, email, mobile, and password.   