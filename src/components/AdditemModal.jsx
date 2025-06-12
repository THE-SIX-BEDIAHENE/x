// src/components/AddItemModal.jsx
import React, { useState } from "react";

const AddItemModal = ({ onClose, onAdd, type }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    if (type === "projects") {
      onAdd({ name: value.trim() });
    } else {
      onAdd({ title: value.trim() });
    }
    setValue("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
        <h2 className="font-bold text-xl">Add {type === "projects" ? "Project" : "News"}</h2>

        <input
          type="text"
          placeholder={type === "projects" ? "Project Name" : "News Title"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 rounded bg-red-600 text-white">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
