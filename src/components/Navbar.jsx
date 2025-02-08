import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800">
      {/* Company Name on the Left */}
      <div className="text-2xl font-bold text-white">
        <a href="/">Conference Expense Planner</a>
      </div>

      {/* Navigation Links in the Center */}
      <div className="flex text-lg space-x-36">
        <NavLink to={"/venue"} className={({isActive}) => isActive ? "text-blue-500 font-bold" : "text-white"}>Venue</NavLink>
        <NavLink to={"/add-ons"} className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-white'}>Add-ons</NavLink>
        <NavLink to={"/meals"} className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-white'}>Meals</NavLink>
      </div>

      {/* Special "Show Details" Button on the Right */}
      <div>
        <a
          href="/details"
          className="bg-blue-500 text-white mr-10 px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Show Details
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
