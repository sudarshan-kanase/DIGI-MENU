import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuList from "./components/MenuList";
import MenuForm from "./components/MenuForm";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import 'react-toastify/dist/ReactToastify.css';
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [menu, setMenu] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getMenu = async () => {
    const res = await axios.get("http://127.0.0.1:3000/menu");
    setMenu(res.data.menu);
  };

  useEffect(() => {
    getMenu();
  }, []);

  const handleAdd = async (item) => {
    await axios.post("http://127.0.0.1:3000/addmenu", item);
    getMenu();
  };

  const handleUpdate = async (item) => {
    await axios.put("http://127.0.0.1:3000/updt_menu", item);
    setSelected(null);
    getMenu();
  };

  const handleDelete = async (fid) => {
    await axios.delete("http://127.0.0.1:3000/delById_menu", { data: { fid } });
    getMenu();
  };

  const filteredMenu = menu.filter((item) => {
    const matchCategory = filter ? item.fcat.toLowerCase() === filter.toLowerCase() : true;
    const matchSearch =
      item.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fcat.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container mt-5">
   <div className="bg-gradient-to-r from-orange-100 to-yellow-100 py-10 px-4 rounded-xl shadow-md mb-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-700 mb-2 animate-pulse underline underline-offset-4">
    🍽️ Explore Our Menu
  </h2>
  <p className="text-base md:text-lg text-center text-gray-700 italic">
    Discover our delicious selection of food categories to satisfy every craving!
  </p>
</div>

     

      <CategoryFilter onFilter={setFilter} selected={filter} />
      <SearchBar onSearch={setSearchTerm} />
       <MenuForm onAdd={handleAdd} onUpdate={handleUpdate} selected={selected} />

      <div className="text-center mb-6 space-x-4">
  <button
    onClick={() => setSelected(null)}
    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-5 rounded-lg shadow transition duration-200"
  >
    ➕ Add New Item
  </button>
  <button
    onClick={() => setFilter("")}
    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-5 rounded-lg shadow transition duration-200"
  >
    📋 Show All
  </button>
</div>

      <div className="text-center mb-3">
        <span className="badge bg-info">{filteredMenu.length} items found</span>
      </div>
    
      <MenuList data={filteredMenu} onEdit={setSelected} onDelete={handleDelete} />
    </div>
  );
}
