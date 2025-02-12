import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCost, removeCost, addCount, removeCount, addProduct } from "../features/cost/costSlice";

function Card({ id, name, imgUrl, capacity, price, handleDelete, isNew, handleAddItem }) {
  const dispatch = useDispatch();


  const countValue = useSelector((state) => 
    state.cost.categoryArr.find(cat => cat.id === id)
  ) || { count: 0 }; 

  const handleAdd = () => {
    const count = countValue.count + 1;
    dispatch(addCost(price));
    dispatch(addCount(id));
    dispatch(addProduct({ id, name, count, imgUrl, capacity, price }));
  }

  const handleRemove = () => {
    if (countValue.count > 0) { 
      dispatch(removeCost(price));
      dispatch(removeCount(id));
      dispatch(removeProduct(id));
    }
  }

  const userRole = useSelector((state) => state.auth.user?.role);
  console.log("Role of User:", userRole);

  const [newItem, setNewItem] = useState({
    name: "",
    imgUrl: "",
    capacity: "",
    price: "",
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewItem({ ...newItem, imgUrl: imageUrl });
    }
  };

  const handleSubmit = () => {
    if (newItem.name && newItem.imgUrl && newItem.capacity && newItem.price) {
      handleAddItem(newItem);
      setNewItem({ name: "", imgUrl: "", capacity: "", price: "" });
    } else {
      alert("Please fill all fields and upload an image.");
    }
  };

  if (isNew) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto p-4 transform transition duration-300 hover:scale-105 border-2 border-dashed border-gray-400">
        <h2 className="text-center text-gray-500">Add New Item</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter your item name"
          value={newItem.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded mt-2"
        />
        <input
          type="text"
          name="capacity"
          placeholder="Capacity"
          value={newItem.capacity}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded mt-2"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded mt-2"
        />

        <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" />
        {newItem.imgUrl && (
          <img src={newItem.imgUrl} alt="Preview" className="w-full h-40 object-cover mt-2 rounded" />
        )}

        <button
          className="bg-blue-500 text-white px-4 py-2 mt-3 w-full rounded cursor-pointer"
          onClick={handleSubmit}
        >
          Add Item
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto transform transition duration-300 hover:scale-105">
      <img src={imgUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">Capacity: {capacity}</p>
        <p className="text-lg font-bold text-blue-500 mt-2">${price}</p>
        
        <div className="flex items-center justify-center mt-4 space-x-4">
            {userRole == "user" ?
            <>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-full cursor-pointer transition"
                onClick={handleRemove}
              >
                -
              </button>
              <span className="text-lg font-semibold">{countValue.count}</span>
              <button
                className="bg-green-700 text-white px-3 py-1 rounded-full cursor-pointer transition"
                onClick={handleAdd}
              >
                +
              </button> 
            </>
            : null}
            {userRole == "admin" ? 
            <button
              className="bg-red-700 text-white px-3 py-1 rounded-full cursor-pointer transition"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button> : null} 
          </div>
      </div>
    </div>
  );
}

export default Card;
