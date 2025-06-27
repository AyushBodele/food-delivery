import { useEffect, useState } from 'react';
import { foodMeta, getCategoryApiUrl } from '../utils/data';

export default function useRestaurantCategory(type) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const meta = foodMeta[type];
    if (!meta) return;

    const apiUrl = getCategoryApiUrl({
      lat: 20.9319821,
      lng: 77.7523039,
      collection: meta.collection,
      tag: meta.tag,
    });

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        const allCards = json?.data?.cards || [];

        const gridBased =
          allCards.find(
            (card) =>
              card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const typeBased = allCards
          .filter(
            (card) =>
              card?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )
          .map((card) => card.card.card);

        const finalRestaurants = gridBased || typeBased || [];

        setRestaurants(finalRestaurants);
      });
  }, [type]);

  return restaurants;
}
