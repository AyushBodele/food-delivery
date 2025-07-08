import React from "react";
import { Button } from '../../components/common';
import CitySelector from './CitySelector';
import RestaurantGrid from './RestaurantGrid';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'rating', label: 'Rating 4.0+' },
  { key: 'fast', label: 'Fast Delivery' },
  { key: 'offers', label: 'Great Offers' },
];

const FilterBar = ({ filters, activeFilter, setActiveFilter }) => (
  <div className="hidden md:flex space-x-4">
    {filters.map((filter) => (
      <Button
        key={filter.key}
        onClick={() => setActiveFilter(filter.key)}
        variant={activeFilter === filter.key ? 'active' : 'filter'}
      >
        {filter.label}
      </Button>
    ))}
  </div>
);

const RestaurantView = ({
  cities,
  activeFilter,
  setActiveFilter,
  selectedCity,
  setSelectedCity,
  cardsToShow,
  setCardsToShow,
  filteredRestaurants,
  visibleRestaurants,
}) => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <h2 className="text-3xl font-bold text-gray-900">
            {activeFilter === 'all'
              ? 'All Restaurants'
              : `${(filters.find((f) => f.key === activeFilter) || {}).label || activeFilter} in ${selectedCity}`}
          </h2>

          {activeFilter !== 'all' && (
            <CitySelector
              cities={cities}
              selectedCity={selectedCity}
              onChange={(cityName) => {
                setSelectedCity(cityName);
                setCardsToShow(8);
              }}
            />
          )}

          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={(filterKey) => {
              setActiveFilter(filterKey);
              setCardsToShow(8);
            }}
          />
        </div>

        <RestaurantGrid restaurants={visibleRestaurants} />

        {cardsToShow < filteredRestaurants.length && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setCardsToShow((prev) => prev + 4)}
              variant="default"
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantView;