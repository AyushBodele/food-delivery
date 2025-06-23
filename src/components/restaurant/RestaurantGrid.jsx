import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantGrid = ({ restaurants }) => {

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={restaurant?.info?.id}
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
