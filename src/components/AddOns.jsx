import React, { useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import TotalCost from './TotalCost'
import { useSelector } from 'react-redux'

function AddOns() {
  const [items, setItems] = useState([
    {
      id: 7,
      name: 'Speakers', 
      imgUrl: "https://s.alicdn.com/@sc04/kf/H867040dc436643ca84de3023845f5f4b1.jpg_300x300.jpg",
      capacity: 'Any',
      price: 35
    },
    {
      id: 8,
      name: 'Microphones',
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_7vOedUOLSWjYXXkJ3moqpr_K4VRIsFZJw&s",
      capacity: 'Any',
      price: 45
    },
    {
      id: 9,
      name: 'WhiteBoards',
      imgUrl: "https://www.novus-dahle.com/en/wp-content/uploads/MicrosoftTeams-image-135-scaled.jpg",
      capacity: 'Any',
      price: 80
    },
    {
      id: 10,
      name: 'Projectors',
      imgUrl: "https://cdn.mos.cms.futurecdn.net/zHiLLzAJqkscm3jQb4wC5m.png",
      capacity: 'Any',
      price: 200
    },
    {
      id: 11,
      name: 'Screens',
      imgUrl: "https://cdn.prod.website-files.com/636bbf9c519296f08f480299/644c13549a691b116be85363_blog%20-%20hero%20-%20Conference%20Room%20Display%20Solutions%20to%20Bring%20Your%20Meetings%20to%20the%20Next%20Level.jpg",
      capacity: 'Any',
      price: 500
    },
  ]);

  const userRole = useSelector((state) => state.auth.user?.role)

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, { ...item, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar/>
      <div className=' bg-blue-500 w-140 mt-2 p-2 rounded-lg mx-auto'>
        <h1 className='text-white text-center text-4xl font-bold'>Add Ons</h1>
      </div> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto'>
          {items.map(item => 
            <div className="w-full">
              <Card 
                id={item.id} 
                name={item.name} 
                imgUrl={item.imgUrl} 
                capacity={item.capacity} 
                price={item.price} 
                handleDelete={handleDelete} 
              />
            </div>
          )}

          {/*empty card for admin*/}
          {userRole === "admin" && (
            <div className="w-full">
              <Card isNew handleAddItem={handleAddItem} />
            </div>
          )}
      </div>
      {userRole === "user" ? <TotalCost /> : null }
    </>
    
  )
}

export default AddOns