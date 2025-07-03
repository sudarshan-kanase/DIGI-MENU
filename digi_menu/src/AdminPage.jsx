import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuList from "./components/MenuList";
import MenuForm from "./components/MenuForm";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

export default function AdminPage() {
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
      <h2 className="text-center mb-4">🍽️ Food Menu</h2>

      <MenuForm onAdd={handleAdd} onUpdate={handleUpdate} selected={selected} />

      <CategoryFilter onFilter={setFilter} selected={filter} />
      <SearchBar onSearch={setSearchTerm} />

      <div className="text-center mb-3">
        <button className="btn btn-primary me-2" onClick={() => setSelected(null)}>
          Add New Item
        </button>
        <button className="btn btn-secondary" onClick={() => setFilter("")}>
          Show All
        </button>
      </div>

      <div className="text-center mb-3">
        <span className="badge bg-info">{filteredMenu.length} items found</span>
      </div>

      <MenuList data={filteredMenu} onEdit={setSelected} onDelete={handleDelete} />
    </div>
  );
}
