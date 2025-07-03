import React from "react";

export default function MenuList({ data, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto shadow-xl rounded-2xl border border-orange-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-orange-200 dark:divide-gray-700">
       
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-orange-100 dark:divide-gray-700">
          {data.map((item) => (
            <tr
              key={item.fid}
              className="hover:bg-orange-50 dark:hover:bg-gray-800 transition duration-300"
            >
              <td className="px-6 py-3 whitespace-nowrap text-gray-900 dark:text-white font-medium">
                {item.fname}
              </td>
              <td className="px-6 py-3 text-gray-700 dark:text-gray-300">₹{item.fprice}</td>
              <td className="px-6 py-3">
                <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                  item.fcat === "Veg" ? "bg-green-500" :
                  item.fcat === "Non-Veg" ? "bg-red-500" : "bg-yellow-500"
                }`}>
                  {item.fcat}
                </span>
              </td>
              <td className="px-6 py-3 text-gray-600 dark:text-gray-400">{item.fdec}</td>
              <td className="px-6 py-3 text-center">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold mr-2 transition"
                  onClick={() => onEdit(item)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold transition"
                  onClick={() => onDelete(item.fid)}
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
