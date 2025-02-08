import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCost, removeCost, addCount, removeCount } from '../features/cost/costSlice'

function Card({ id, name, imgUrl, capacity, price }) {
    const dispatch = useDispatch();

    // Get the count directly from Redux
    const countValue = useSelector((state) => 
      state.cost.categoryArr.find(cat => cat.id === id)
    ) || { count: 0 }; // Ensure count is always available

    const handleAdd = () => {
      dispatch(addCost(price));
      dispatch(addCount(id));
    }

    const handleRemove = () => {
      if (countValue.count > 0) { // Prevent negative values
        dispatch(removeCost(price));
        dispatch(removeCount(id));
      }
    }

    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto transform transition duration-300 hover:scale-105">
        <img src={imgUrl} alt={name} className="w-full h-40 object-cover" />
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 text-sm">Capacity: {capacity}</p>
          <p className="text-lg font-bold text-blue-500 mt-2">${price}</p>

          {/* Counter Buttons */}
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-full cursor-pointer transition"
              onClick={handleRemove}
              disabled={countValue.count === 0} // Disable if count is 0
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
          </div>
        </div>
      </div>
    )
}

export default Card;
