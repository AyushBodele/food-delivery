export const fetchAllRestaurants = async (cityCoordinates) => {
  const allRestaurants = [];

  for (const city of cityCoordinates) {
    const url = `/api/restaurants/list/v5?lat=${city.lat}&lng=${city.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
    try {
      const res = await fetch(url);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} for ${city.name}`);
      }
      
      const json = await res.json();

      const restaurants = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        restaurants.forEach((r) => (r.cityName = city.name));
        allRestaurants.push(...restaurants);
      }
    } catch (error) {
      console.error("Failed to fetch for", city.name, error);
    }
  }

  return allRestaurants;
};

export const groupRestaurantsByCity = (restaurants) => {
  const grouped = {};
  restaurants.forEach((r) => {
    const cityName = r.cityName || "Unknown";
    if (!grouped[cityName]) grouped[cityName] = [];
    grouped[cityName].push(r);
  });

  return Object.entries(grouped).map(([cityName, cityRestaurants]) => ({
    cityName,
    card: {
      card: {
        gridElements: {
          infoWithStyle: {
            restaurants: cityRestaurants,
          },
        },
      },
    },
  }));
};

export const getRestaurantsForCity = (cities, cityName) => {
  const city = cities.find((c) => c.cityName === cityName);
  return (
    city?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((r) => ({
      ...r,
      cityName,
    })) || []
  );
};

export const getAllRestaurants = (cities) => {
  return cities.flatMap((city) => {
    const restaurants =
      city?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    return restaurants.map((r) => ({
      ...r,
      cityName: city.cityName,
    }));
  });
};

export const filterRestaurants = (restaurants, filter) => {
  switch (filter) {
    case "rating":
      return restaurants.filter((r) => parseFloat(r.info?.avgRating) >= 4.0);
    case "fast":
      return restaurants.filter((r) => r.info?.sla?.deliveryTime < 35);
    case "offers":
      return restaurants.filter(
        (r) => parseInt(r.info?.costForTwo?.replace(/\D/g, "")) <= 200
      );
    default:
      return restaurants;
  }
};
