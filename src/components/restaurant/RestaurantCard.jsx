import React from 'react';
import PropTypes from 'prop-types';
import { imageBaseURL } from '../../utils/imagesURL';

const getSwiggyImageUrl = (imageId) => {
  return `${imageBaseURL}${imageId}`;
};

const RestaurantCard = ({ restaurant }) => {
  if (!restaurant?.info) return null;

  const {
    name,
    imageUrl,
    avgRating,
    areaName,
    locality,
    cuisines = [],
    costForTwo,
  } = restaurant.info;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={getSwiggyImageUrl(imageUrl)}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

   
      <div className="p-4">
      
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-gray-900 text-lg truncate flex-1">
            {name}
          </h3>
        </div>

      
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">★</span>
            </div>
            <span className="font-medium">{avgRating}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span>{costForTwo}</span>
        </div>

      
        <div className="text-sm text-gray-600 mb-1 line-clamp-1">
          {cuisines.join(', ')}
        </div>

        <div className="text-sm text-gray-500">
          {locality}, {areaName}
        </div>
      </div>
    </div>
  );
};


RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    info: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      avgRating: PropTypes.number.isRequired,
      areaName: PropTypes.string.isRequired,
      locality: PropTypes.string.isRequired,
      costForTwo: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  }).isRequired,
};

export default RestaurantCard;
