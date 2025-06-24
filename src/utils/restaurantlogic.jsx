// fetchAllRestaurants.js
export const fetchAllRestaurants = async (urls) => {
  const allRestaurants = [];

  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);
    const json = await res.json();

    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // 👇 Assign cityName based on index (e.g., 0 = Pune, 1 = Mumbai)
    const cityNames = ['Nagpur','Amravati','Pune', 'Mumbai', 'Bangalore', 'Delhi']; // customize this to match your `urls` order

    if (restaurants) {
      restaurants.forEach((r) => {
        r.cityName = cityNames[i] || 'Unknown';
      });
      allRestaurants.push(...restaurants);
    }
  }

  return allRestaurants;
};

export const groupRestaurantsByCity = (restaurants) => {
  const grouped = {};
  restaurants.forEach((r) => {
    const cityName = r.cityName || 'Unknown';
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
    case 'rating':
      return restaurants.filter((r) => parseFloat(r.info?.avgRating) >= 4);
    case 'fast':
      return restaurants.filter((r) => r.info.sla?.deliveryTime < 35);
    case 'offers':
      return restaurants.filter((r) => r.info?.costForTwo <= '₹300 for two');
    default:
      return restaurants;
  }
};
