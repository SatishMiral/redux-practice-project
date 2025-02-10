import React from 'react'
import { NavLink } from 'react-router-dom'

function Landing() {
  return (
    <div className="relative w-screen h-screen">
      {/* Blurred background layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ 
          backgroundImage: "url(https://media.licdn.com/dms/image/v2/D4D12AQFxuo8CWk6qIg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681980612057?e=2147483647&v=beta&t=f9M7hoyYpXFYlLmwfvzCWg4qyzF6ixX36j3jIOnCfa0)",
          zIndex: 0 
        }}
      />
      
      {/* Content layer */}
      <div className="relative z-10">
        <div>
          <h1 className="text-white text-6xl font-bold text-center pt-10 pb-4">
            Conference Expense <br/>
            <span className="block">Planner</span>
          </h1>
          <p className="text-green-400 text-xl text-center">
            Plan your next major event with us
          </p>
          <NavLink to='/venue' activeStyle={{ textColor: 'red', fontWeight: 'bold' }} >
            <button 
              className="bg-yellow-500 text-white rounded-lg cursor-pointer px-4 py-2 mx-auto block mt-4"
            >
              Get Started
            </button>
          </NavLink>
        </div>
        
        <div className="text-white text-xl font-bold text-center mt-10 max-w-4xl mx-auto px-4">
          <p className="mb-5">
            Take the guesswork out of budgeting with our Conference Expense Planner. Easily select rooms, add-ons, and meals while getting real-time pricing updates, ensuring a smooth and stress-free planning experience.
          </p>
          <p className="mb-5">
            Our intuitive interface provides a clear breakdown of costs, helping you make informed decisions. The interactive pop-up summary gives a detailed expense table, so you always stay within budget.
          </p>
          <p className="mb-5">
            Whether you're organizing a small team meeting or a large corporate conference, our platform adapts to your needs. Customize your selections, compare pricing, and finalize plans with confidence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landing