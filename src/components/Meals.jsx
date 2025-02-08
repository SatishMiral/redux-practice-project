import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import TotalCost from './TotalCost'

function Meals() {
  const items = [
    {
      id: 13,
      name: 'BreakFast', 
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehobQBbx8nrvfZxWtzLXOneVuPCrdx2YDUg&s",
      capacity: 10,
      price: 2000
    },
    {
      id: 14,
      name: 'Lunch',
      imgUrl: "https://www.subbuskitchen.com/wp-content/uploads/2014/07/NorthIndian-Lunch-Menu1_Final2-1024x686.jpg",
      capacity: 10,
      price: 3500
    },
    {
      id: 15,
      name: 'High Tea',
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4KuWnp0eK0sJnRGsM1crLqTe4hb5fubZzA&s",
      capacity: 10,
      price: 700
    },
    {
      id: 16,
      name: 'Dinner',
      imgUrl: "https://assets.epicurious.com/photos/59a48f237e283157d14a5a6a/16:9/w_2560%2Cc_limit/How-to-Throw-a-Grocery-Store-Dinner-Party-hero-with-hands-15082017.jpg",
      capacity: 10,
      price: 4500
    }
  ]
  return (
    <>
      <Navbar/>
      <div className=' bg-blue-500 w-140 mt-2 p-2 rounded-lg mx-auto'>
        <h1 className='text-white text-center text-4xl font-bold'>Meals Selection</h1>
      </div> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto'>
          {items.map(item => 
            <div className="w-full">
              <Card id={item.id} name={item.name} imgUrl={item.imgUrl} capacity={item.capacity} price={item.price} />
            </div>
          )}
      </div>
      <TotalCost/>
    </>
  )
}

export default Meals