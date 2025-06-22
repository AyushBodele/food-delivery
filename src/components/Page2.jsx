import { foodItems } from "../utils/data";
import RestaurantList from './RestaurantsList';
import AppBanner from './AppBanner';
import Grocery from "./Grocery";

export default function FoodGrid() {
  return (
    <main className="bg-white min-h-screen">
        <div className="p-8 pt-25">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {foodItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                    src={item.image}
                    className="w-full h-full object-cover"
                />
                </div>
                
            </div>
            ))}
        </div>
        </div>
        <Grocery />
        <AppBanner />
        <RestaurantList />
    </main>
  );
}
