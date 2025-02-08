import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

function Details() {
    const items = useSelector((state) => state.cost.productArr)
    console.log("Detail Items:", items)
    return (
        <>
            <Navbar/>  
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto'>
            {items.map(item =>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto transform transition duration-300 hover:scale-105">
                    <img src={item.imgUrl} alt={item.name} className="w-full h-40 object-cover" />
                    <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600 text-sm">Capacity: {item.capacity}</p>
                    <p className="text-lg font-bold text-blue-500 mt-2">$ {item.price}</p>

                    {/* Counter Buttons */}
                    <div className="flex items-center justify-center mt-4 space-x-4">
                        <button
                        className="bg-red-500 text-white px-3 py-1 rounded-full cursor-pointer transition"
                        //   onClick={handleRemove}
                        //   disabled={countValue.count === 0} // Disable if count is 0
                        >
                        -
                        </button>
                        <span className="text-lg font-semibold">{item.count}</span>
                        <button
                        className="bg-green-700 text-white px-3 py-1 rounded-full cursor-pointer transition"
                        //   onClick={handleAdd}
                        >
                        +
                        </button>
                    </div>
                    </div>
                </div>
            )}
            </div>
        </>
    )
}

export default Details