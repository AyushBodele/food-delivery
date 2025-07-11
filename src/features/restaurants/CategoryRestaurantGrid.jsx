import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { foodMeta } from '../../utils/constants';
import { swiggyApi } from '../../services/swiggyApi';

const CategoryRestaurantGrid = ({ type }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWithApi = async (meta, useMobile = false) => {
    try {
      const json = await swiggyApi.fetchCategoryRestaurants({
        lat: 21.1458004,
        lng: 79.0881546,
        collection: meta.collection,
        tag: meta.tag || undefined,
        offset: 0,
        useMobile,
      });

      const allCards = json?.data?.cards || [];

      const typeBased = allCards
        .filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        .map((card) => card.card.card);

      const gridBased =
        allCards.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      const combined = [...typeBased, ...gridBased];
      const unique = Array.from(new Map(combined.map(r => [r.info.id, r])).values());

      return unique;
    } catch (err) {
      console.error('Error fetching category restaurants:', err);
      return [];
    }
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      const meta = foodMeta[type];
      if (!meta) return;

      setIsLoading(true);
      setRestaurants([]);

      let result = await fetchWithApi(meta, false);
      if (result.length === 0) {
        result = await fetchWithApi(meta, true);
      }

      setRestaurants(result);
      setIsLoading(false);
    };

    fetchRestaurants();
  }, [type]);

  return (
    <div className="px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <div className="col-span-full text-center text-gray-500">Loading restaurants...</div>
        ) : restaurants.length === 0 ? (
          <div className="col-span-full text-center text-red-500">No restaurants found.</div>
        ) : (
          restaurants.map((restaurant) => (
            <div
              key={restaurant.info.id}
              className="transition-transform transform hover:scale-95 cursor-pointer"
            >
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryRestaurantGrid;