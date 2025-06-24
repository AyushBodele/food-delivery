// utils/restaurantlogic.js

export const fetchAllRestaurants = async (cityCoordinates) => {
  const allRestaurants = [];

  for (let i = 0; i < cityCoordinates.length; i++) {
    const { lat, lng, name } = cityCoordinates[i];
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

    const res = await fetch(url);
    const json = await res.json();

    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurants) {
      restaurants.forEach((r) => {
        r.cityName = name || 'Unknown';
      });
      allRestaurants.push(...restaurants);
    }
  }

  return allRestaurants;
};
