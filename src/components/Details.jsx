import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import TotalCost from './TotalCost'

function Details() {
    const items = useSelector((state) => state.cost.productArr)
    console.log("Detail Items:", items)
    return (
        <>
            <Navbar/>
            <div className=' bg-blue-500 w-100 mt-2 p-2 rounded-lg mx-auto'>
                <h1 className='text-white text-center text-4xl font-bold'>Details</h1>
            </div>
            {items.length == 0 ? <h1 className='text-2xl font-bold underline text-center my-7'>No Items Added Yet</h1> :    
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-4 max-w-7xl mx-auto'>
            {items.map(item =>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-[400px] transform transition duration-300 hover:scale-105">
                    <img src={item.imgUrl} alt={item.name} className="w-full h-48 object-cover" />
                    <div className="p-4 text-center flex flex-col justify-between h-[calc(100%-12rem)]">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                            <p className="text-gray-600 text-sm">Capacity: {item.capacity}</p>
                            <p className="text-lg font-bold text-blue-500 mt-2">$ {item.price}</p>
                        </div>

                        {/* Counter Buttons */}
                        <div className="flex items-center justify-center mt-4 space-x-4">
                            <button
                            className="bg-red-500 text-white px-3 py-1 rounded-full cursor-pointer transition"
                            >
                            -
                            </button>
                            <span className="text-lg font-semibold">{item.count}</span>
                            <button
                            className="bg-green-700 text-white px-3 py-1 rounded-full cursor-pointer transition"
                            >
                            +
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>
            }
            <TotalCost/>
        </>
    )
}

export default Details