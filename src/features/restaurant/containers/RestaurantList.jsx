import React, { useState } from 'react';
import { useRestaurants } from '../../../shared/hooks/useRestaurants';
import { getRestaurantsForCity, getAllRestaurants, filterRestaurants } from '../../../shared/services/restaurantService';
import RestaurantView from './RestaurantView';

const RestaurantList = () => {
  const { cities, loading, error } = useRestaurants();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCity, setSelectedCity] = useState('');
  const [cardsToShow, setCardsToShow] = useState(8);

  // Set initial city when cities are loaded
  React.useEffect(() => {
    if (cities.length > 0 && !selectedCity) {
      setSelectedCity(cities[0]?.cityName || '');
    }
  }, [cities, selectedCity]);

  if (loading) {
    return <div className="text-center py-8">Loading restaurants...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  const restaurantsToFilter =
    activeFilter === 'all'
      ? getAllRestaurants(cities)
      : getRestaurantsForCity(cities, selectedCity);

  const filteredRestaurants = filterRestaurants(restaurantsToFilter, activeFilter);
  const visibleRestaurants = filteredRestaurants.slice(0, cardsToShow);

  return (
    <RestaurantView
      cities={cities}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
      selectedCity={selectedCity}
      setSelectedCity={setSelectedCity}
      cardsToShow={cardsToShow}
      setCardsToShow={setCardsToShow}
      filteredRestaurants={filteredRestaurants}
      visibleRestaurants={visibleRestaurants}
    />
  );
};

export default RestaurantList;