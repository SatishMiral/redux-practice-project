import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import TotalCost from './TotalCost'

function AddOns() {
  const items = [
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
    {
      id: 12,
      name: 'Signage',
      imgUrl: "https://5.imimg.com/data5/SELLER/Default/2023/3/294994406/HF/ST/YK/3365461/vertical-root-conference-room-signage.jpg",
      capacity: 'Any',
      price: 80
    }
  ]
  return (
    <>
      <Navbar/>
      <div className=' bg-blue-500 w-140 mt-2 p-2 rounded-lg mx-auto'>
        <h1 className='text-white text-center text-4xl font-bold'>Add Ons</h1>
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

export default AddOns