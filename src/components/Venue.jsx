import React, { useState } from "react";
import Card from "./Card";
import TotalCost from "./TotalCost";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

function Venue() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Auditorium Hall",
      imgUrl:
        "https://5.imimg.com/data5/OI/SY/YY/SELLER-3947012/complete-interior-technical-services-for-auditoriums.jpg",
      capacity: 200,
      price: 5500,
    },
    {
      id: 2,
      name: "Presentation Room",
      imgUrl:
        "https://c8.alamy.com/comp/B3GDPN/modern-auditorium-hall-for-presentation-with-projection-screen-B3GDPN.jpg",
      capacity: 50,
      price: 3500,
    },
    {
      id: 3,
      name: "Conference Room",
      imgUrl:
        "https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_fb.jpg?fit=1200%2C675",
      capacity: 15,
      price: 1500,
    },
    {
      id: 4,
      name: "Large Meeting Room",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuXd1NqkdEsZh52mcem1yYxkpJNnm_raLdg&s",
      capacity: 10,
      price: 1000,
    },
    {
      id: 5,
      name: "Small Meeting Room",
      imgUrl:
        "https://res.cloudinary.com/myhq/image/upload/workspaces/awfis-business-mantri/meeting-room/plans/6-seater/ty5a92.jpg",
      capacity: 5,
      price: 800,
    },
  ]);

  const userRole = useSelector((state) => state.auth.user?.role);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, { ...item, id: Date.now() }]);
  };

  return (
    <>
      <Navbar />
      <div className="bg-blue-500 w-140 mt-2 p-2 rounded-lg mx-auto">
        <h1 className="text-white text-center text-4xl font-bold">
          Venue Room Selection
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
        {items.map((item) => (
          <div key={item.id} className="w-full">
            <Card
              id={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              capacity={item.capacity}
              price={item.price}
              handleDelete={handleDelete}
            />
          </div>
        ))}

        {/*showing empty card admin*/}
        {userRole === "admin" && (
          <div className="w-full">
            <Card isNew handleAddItem={handleAddItem} />
          </div>
        )}
      </div>
      <TotalCost />
    </>
  );
}

export default Venue;
