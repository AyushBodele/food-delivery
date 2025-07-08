/**
 * @typedef {Object} RestaurantInfo
 * @property {string} id - Restaurant ID
 * @property {string} name - Restaurant name
 * @property {string} cloudinaryImageId - Image ID
 * @property {number} avgRating - Average rating
 * @property {string} areaName - Area name
 * @property {string} locality - Locality
 * @property {string[]} cuisines - List of cuisines
 * @property {string} costForTwo - Cost for two
 * @property {Object} sla - Service level agreement
 * @property {string} sla.slaString - Delivery time string
 * @property {Object} aggregatedDiscountInfoV3 - Discount info
 * @property {string} adTrackingId - Ad tracking ID
 */

/**
 * @typedef {Object} Restaurant
 * @property {RestaurantInfo} info - Restaurant information
 * @property {string} cityName - City name
 */

export {};