import React from "react";

export default function MenuList({ data, onEdit, onDelete }) {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.fid}>
            <td>{item.fname}</td>
            <td>₹{item.fprice}</td>
            <td>{item.fcat}</td>
            <td>{item.fdec}</td>
            <td>
              <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(item)}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(item.fid)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// This component renders the menu list with edit and delete actions
// It receives the menu data, edit handler, and delete handler as props 