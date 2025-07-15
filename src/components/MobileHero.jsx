import { logo } from '../utils/imagesURL';
import { HiOutlineMapPin, HiChevronDown } from 'react-icons/hi2';
import { FiSearch } from 'react-icons/fi';
import Card from './HeroCard';
import { cardData } from '../utils/data';

export default function MobileHero() {
  return (
    <main className="bg-[#ff5200] min-h-screen relative overflow-hidden text-white font-sans">
      <nav className="flex justify-between items-center px-4 py-4">
        <img src={logo} alt="Swiggy Logo" className="h-10" />
        <button className="text-white font-bold border border-white px-4 py-2 rounded-xl">
          Sign Up
        </button>
      </nav>

      <section className="relative z-10 px-4 flex flex-col items-center text-center mt-6 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
          Order food & groceries.<br />
          Discover best restaurants.<br />
          Swiggy it!
        </h1>

        <div className="w-full bg-white flex items-center rounded-xl px-4 py-3 shadow">
          <HiOutlineMapPin className="text-orange-600 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Enter your delivery location"
            className="flex-1 outline-none text-gray-700 placeholder-gray-500 font-medium"
          />
          <HiChevronDown className="text-black w-5 h-5 ml-2" />
        </div>

        <div className="w-full bg-white flex items-center rounded-xl px-4 py-3 shadow">
          <input
            type="text"
            placeholder="Search for restaurant, item or more"
            className="flex-1 outline-none text-gray-700 placeholder-gray-500 bg-transparent font-medium"
          />
          <FiSearch className="text-gray-500 w-5 h-5" />
        </div>
      </section>

      <section className="mt-8 px-4">
        <div className="flex flex-col items-center space-y-6 sm:flex-row sm:flex-wrap sm:space-y-0 sm:space-x-6 justify-center">
          {cardData.map((card, index) => {
            let cardClass = '';
            if (index === cardData.length - 1) {
              cardClass = 'mb-10';
            }

            return (
              <div key={index} className={cardClass}>
                <Card
                  title={card.title}
                  subtitle={card.subtitle}
                  discount={card.discount}
                  image={card.image}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
