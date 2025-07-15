import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Restaurant({ restaurantId = "53419" }) {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await fetch(
          `/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=${restaurantId}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`
        );
        const data = await res.json();

        const info = data?.data?.cards?.find(
          (card) => card?.card?.card?.info?.name
        )?.card?.card?.info;

        if (info) {
          setRestaurant({
            name: info.name,
            area: info.areaName,
            cuisines: info.cuisines.join(", "),
            avgRating: info.avgRating,
            totalRatings: info.totalRatingsString,
            costForTwo: info.costForTwoMessage,
            deliveryTime: info.sla?.slaString,
          });
        }
      } catch (err) {
        console.error("Failed to fetch restaurant data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, []);

  if (loading || !restaurant) {
    return <div className="text-center p-4 text-gray-400">Loading...</div>;
  }

  return (
    <div className="mx-auto p-4 space-y-3">
      <div className="text-sm text-gray-500 pl-85">
        Home / Nagpur / <span className="text-black font-medium">{restaurant.name}</span>
        <svg aria-hidden="true" height="24" width="67" className="inline ml-2 align-middle">
          <use xlinkHref="/food/sprite-CiiAtHUR.svg#gourmet24"></use>
        </svg>
      </div>

      <div className="text-3xl font-bold text-gray-800 mb-5 pl-85">{restaurant.name}</div>

      <div className="relative w-200 mx-auto p-4">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-transparent rounded-3xl pointer-events-none"></div>

        <div className="relative bg-white rounded-2xl shadow-md p-2 z-10 space-y-4 border-lg">
          <div className="items-center flex">
            <div className="flex items-center space-x-2 text-green-black font-semibold">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="9" fill="url(#grad)" />
                <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white" />
                <defs>
                  <linearGradient id="grad" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#21973B" />
                    <stop offset="1" stopColor="#128540" />
                  </linearGradient>
                </defs>
              </svg>
              <span>{restaurant.avgRating}</span>
              <span className="text-black font-bold">({restaurant.totalRatings})</span>
            </div>

            <div className="text-gray-500 text-2xl mx-2">•</div>

            <div className="font-bold">{restaurant.costForTwo}</div>
          </div>

          <div className="text-orange-600 font-semibold underline">
            {restaurant.cuisines}
          </div>

          <div className="flex items-start mt-2">
            <div className="flex flex-col items-center mr-4 mt-2">
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-px h-6 bg-gray-300"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-black">Outlet</span>
                <span className="text-gray-500 font-medium">{restaurant.area}</span>
                <span className="text-orange-500 text-sm">▼</span>
              </div>
              <div className="mt-2 text-black font-bold">{restaurant.deliveryTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
