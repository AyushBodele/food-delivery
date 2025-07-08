export const API_ENDPOINTS = {
  RESTAURANTS_LIST: '/dapi/restaurants/list/v5',
  CATEGORY_RESTAURANTS: '/dapi/restaurants/list/v5'
};

export const getCategoryApiUrl = ({ lat, lng, collection, tag, offset = 0, useMobile = false }) => {
  const baseUrl = useMobile 
    ? `/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=${collection}&tags=${tag || ''}&sortBy=&filters=&type=rcv2&offset=${offset}&page_type=MOBILE_WEB_LISTING`
    : `/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=${collection}&tags=${tag || ''}&sortBy=&filters=&type=rcv2&offset=${offset}&page_type=null`;
  
  return baseUrl;
};

export const getRestaurantsListUrl = ({ lat, lng }) => {
  return `${API_ENDPOINTS.RESTAURANTS_LIST}?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
};