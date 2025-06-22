import React, { useState } from 'react';
import { restaurantData } from '../utils/data';
import FilterBar from '../components/restaurant/FilterBar';
import CitySelector from '../components/restaurant/CitySelector';
import RestaurantGrid from '../components/restaurant/RestaurantGrid';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'rating', label: 'Rating 4.0+' },
  { key: 'fast', label: 'Fast Delivery' },
  { key: 'offers', label: 'Great Offers' },
];

const RestaurantList = () => {
  const cities = restaurantData[0]?.cities || [];

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCity, setSelectedCity] = useState(cities[0]?.cityName || '');
  const [cardsToShow, setCardsToShow] = useState(8); // pagination

  const getRestaurantsForCity = (cityName) => {
    const city = cities.find((c) => c.cityName === cityName);
    return (
      city?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((r) => ({
        ...r,
        cityName,
      })) || []
    );
  };

  const getAllRestaurantsFromAllCities = () => {
    return cities.flatMap((city) => {
      const restaurants =
        city?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      return restaurants.map((r) => ({
        ...r,
        cityName: city.cityName,
      }));
    });
  };

  const filterRestaurants = () => {
  const restaurantsToFilter =
    activeFilter === 'all'
      ? getAllRestaurantsFromAllCities()
      : getRestaurantsForCity(selectedCity);

  switch (activeFilter) {
    case 'rating':
      return restaurantsToFilter.filter(
        (r) => parseFloat(r.info?.avgRating) >= 4.0
      );
    case 'fast':
      return restaurantsToFilter.filter(
        (r) => r.info?.fastDelivery === true
      );
    case 'offers':
      return restaurantsToFilter.filter(
        (r) => r.info?.hasOffer === true
      );
    default:
      return restaurantsToFilter;
  }
};

  const filteredRestaurants = filterRestaurants();
  const visibleRestaurants = filteredRestaurants.slice(0, cardsToShow);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <h2 className="text-3xl font-bold text-gray-900">
            {activeFilter === 'all'
              ? 'All Restaurants'
              : `${filters.find((f) => f.key === activeFilter)?.label} in ${selectedCity}`}
          </h2>

          {activeFilter !== 'all' && (
            <CitySelector
              cities={cities}
              selectedCity={selectedCity}
              onChange={(cityName) => {
                setSelectedCity(cityName);
                setCardsToShow(8); // reset pagination
              }}
            />
          )}

          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={(filterKey) => {
              setActiveFilter(filterKey);
              setCardsToShow(8); // reset pagination
            }}
          />
        </div>

        <RestaurantGrid restaurants={visibleRestaurants} />

        {/* Show More Button */}
        {cardsToShow < filteredRestaurants.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setCardsToShow((prev) => prev + 4)}
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
