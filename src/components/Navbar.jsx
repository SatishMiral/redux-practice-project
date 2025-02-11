import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800">
      {/* Company Name on the Left */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="text-xl md:text-2xl font-bold text-white">
          <a href="/">Conference Expense Planner</a>
        </div>
        
        {/* Burger Menu Icon */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${
        isOpen ? 'flex' : 'hidden'
      } md:flex flex-col md:flex-row w-full md:w-auto`}>
        {/* Navigation Links in the Center */}
        <div className="flex flex-col items-center lg:mr-65 md:mr-20 md:flex-row text-base md:text-lg space-y-4 md:space-y-0 md:space-x-8 lg:space-x-36 mt-4 md:mt-0">
          <NavLink to={"/venue"} className={({isActive}) => isActive ? "text-blue-500 font-bold" : "text-white"}>Venue</NavLink>
          <NavLink to={"/add-ons"} className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-white'}>Add-ons</NavLink>
          <NavLink to={"/meals"} className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-white'}>Meals</NavLink>
        </div>

        {/* Special "Show Details" Button on the Right */}
        <div className="bg-blue-500 text-white mt-4 md:mt-0 md:mr-10 px-4 md:px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-full md:w-auto text-center">
          <NavLink
            to="/details"
            className={({isActive}) => isActive ? "text-gray-700 font-bold" : "text-white"}
          >
            Show Details
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
