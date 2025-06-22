import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantGrid = ({ restaurants }) => {
  if (!restaurants || restaurants.length === 0) {
    return <p className="text-center text-gray-500">No restaurants available.</p>;
  }

  return (
    <div>
      <p className="text-gray-700 text-sm mb-4">
        Showing {restaurants.length} restaurants
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={restaurant?.info?.id || index}
            className="transition-transform transform hover:scale-95 cursor-pointer"
          >
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantGrid;
