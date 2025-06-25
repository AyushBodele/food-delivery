import React, { useState, useEffect } from 'react';
import { fetchAllRestaurants} from '../utils/restaurantlogic';
import {cityCoordinates} from '../utils/data'; // ✅ FIXED path
import {
  groupRestaurantsByCity,
  getRestaurantsForCity,
  getAllRestaurants,
  filterRestaurants,
} from '../utils/restaurantlogic';
import RestaurantView from "./restaurant/restaurantView"; // ✅ FIXED path

const RestaurantList = () => {
  const [cities, setCities] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCity, setSelectedCity] = useState('');
  const [cardsToShow, setCardsToShow] = useState(8);

  useEffect(() => {
    const getData = async () => {
      const restaurants = await fetchAllRestaurants(cityCoordinates);
      const formatted = groupRestaurantsByCity(restaurants);
      setCities(formatted);
      setSelectedCity(formatted[0]?.cityName || '');
    };
    getData();
  }, []);

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
