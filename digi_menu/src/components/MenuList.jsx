import React from "react";

export default function MenuList({ data, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-orange-200 dark:border-gray-700 shadow-lg">
      <table className="min-w-full divide-y divide-orange-200 dark:divide-gray-700">
        <thead className="bg-orange-100 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Item</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Price</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Category</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Description</th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
          </tr>
        </thead>

        <tbody className="bg-white dark:bg-gray-900 divide-y divide-orange-100 dark:divide-gray-700">
          {data.map((item) => (
            <tr
              key={item.fid}
              className="hover:bg-orange-50 dark:hover:bg-gray-800 transition duration-200"
            >
              <td className="px-6 py-3 text-gray-900 dark:text-white font-medium">{item.fname}</td>
              <td className="px-6 py-3 text-gray-800 dark:text-gray-200">₹{item.fprice}</td>
              <td className="px-6 py-3">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                    item.fcat === "Veg"
                      ? "bg-green-500"
                      : item.fcat === "Non-Veg"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {item.fcat}
                </span>
              </td>
              <td className="px-6 py-3 text-gray-600 dark:text-gray-400 text-sm">{item.fdec}</td>
              <td className="px-6 py-3 flex items-center justify-center gap-3">
                <button
                  aria-label="Edit item"
                  onClick={() => onEdit(item)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold transition"
                >
                  ✏️ Edit
                </button>
                <button
                  aria-label="Delete item"
                  onClick={() => onDelete(item.fid)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold transition"
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
