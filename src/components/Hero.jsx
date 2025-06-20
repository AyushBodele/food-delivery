import React from 'react'
import { HiOutlineMapPin, HiChevronDown } from 'react-icons/hi2';
import { FiSearch } from 'react-icons/fi';
function Hero() {
  return (
    <>
      <main className='bg-[#ff5200] h-screen'>
        <img 
          className='absolute h-127 top-25'
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        />
        <img 
          className='absolute h-127 top-25 right-0'
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        />
        <div className='text-center pt-50 text-white font-bold text-5xl'>
          <h1>Order food & groceries. Discover<br></br>best restaurants. Swiggy it!</h1>
        </div>

        <div className="flex items-center bg-white rounded-xl px-5 py-4 shadow-md w-[300px] absolute left-90 mt-10">
          <HiOutlineMapPin className="text-orange-600 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Enter your delivery location"
            className="flex-1 outline-none text-gray-500 text-base placeholder-gray-400 font-bold"
          />
          <HiChevronDown className="text-black w-5 h-5 ml-2" />
        </div>

        <div className="flex items-center bg-white rounded-2xl px-4 py-4 w-[500px] max-w-xl shadow-sm ml-170 mt-10">
          <input
            type="text"
            placeholder="Search for restaurant, item or more"
            className="flex-1 outline-none text-gray-500 placeholder-gray-400 bg-transparent font-bold"
          />
          <FiSearch className="text-gray-500 w-5 h-5" />
      </div>
      </main>
    </>
  )
}

export default Hero