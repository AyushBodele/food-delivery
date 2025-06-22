import Card from './Card';
import { heroImg1, heroImg2} from '../utils/imagesURL';
import { HiOutlineMapPin, HiChevronDown } from 'react-icons/hi2';
import { FiSearch } from 'react-icons/fi';
import foodImage1 from '../assets/foodImage1.png';
import foodImage2 from '../assets/foodImage2.png';
import foodImage3 from '../assets/foodImage3.png';

function Hero() {
  return (
    <>
      <main className='bg-[#ff5200] h-120vh'>
        <img 
          className='absolute h-127 top-25'
          src={heroImg1}
        />
        <img 
          className='absolute h-127 top-25 right-0'
          src={heroImg2}
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


        <div className='flex justify-center mt-7 '>
          <Card image={foodImage1}/>
          <Card image={foodImage2}/>
          <Card image={foodImage3}/>
        </div>

        <div className="bg-[#ff5200] py-1 px- pb-5">
        <div className="bg-white flex items-center justify-between w-full max-w-screen-xl mx-auto h-3"></div>

     </div>
      </main>
    </>
  )
}

export default Hero