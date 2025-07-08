import { useState, useEffect } from 'react';
import { fetchAllRestaurants, groupRestaurantsByCity } from '../services/restaurantService';
import { cityCoordinates } from '../utils/constants';

export function useRestaurants() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);

      try {
        const restaurants = await fetchAllRestaurants(cityCoordinates);
        const formatted = groupRestaurantsByCity(restaurants);
        setCities(formatted);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching restaurants:', err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { cities, loading, error };
}