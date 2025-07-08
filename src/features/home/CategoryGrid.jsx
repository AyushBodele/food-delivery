import { foodItems } from "../../utils/constants";
import { Link } from 'react-router-dom';
import { RestaurantsList } from '../restaurants';
import AppBanner from './AppBanner';
import { Grocery } from '../grocery';

export default function CategoryGrid() {
  return (
    <main className="bg-white min-h-screen">
      <div className="p-8 pt-25">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {foodItems.map((item, index) => (
            <Link
              to={`/category/${item.name.toLowerCase()}`}
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-32 h-32 md:w-36 md:h-36 mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.name}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Grocery />
      <AppBanner />
      <RestaurantsList />
    </main>
  );
}