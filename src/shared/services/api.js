import { getRestaurantsListUrl, getCategoryApiUrl } from '../constants/api';

export const apiService = {
  async fetchRestaurants(lat, lng) {
    const url = getRestaurantsListUrl({ lat, lng });
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch restaurants: ${response.statusText}`);
    }
    return response.json();
  },

  async fetchCategoryRestaurants({ lat, lng, collection, tag, offset = 0, useMobile = false }) {
    const url = getCategoryApiUrl({ lat, lng, collection, tag, offset, useMobile });
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch category restaurants: ${response.statusText}`);
    }
    return response.json();
  },

  async fetchCategoryData({ lat, lng, collection, tag }) {
    const url = getCategoryApiUrl({ lat, lng, collection, tag });
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch category data: ${response.statusText}`);
    }
    return response.json();
  }
};