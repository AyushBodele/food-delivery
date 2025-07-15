import { Link } from 'react-router-dom';
import { imageBaseURL } from '../../utils/imagesURL';

const getImageUrl = (imageId) => {
  return `${imageBaseURL}${imageId}`;
};

const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    areaName,
    locality,
    cuisines = [],
    costForTwo,
    sla,
    aggregatedDiscountInfoV3,
    adTrackingId,
  } = restaurant.info;

  return (
    <Link 
      to={`/restaurant/${restaurant.info.id}/${name.toLowerCase().replace(/\s+/g, '-')}`}
      className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 max-w-sm"
    >
      
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden inset-shadow-2xs">
        <img
          src={getImageUrl(cloudinaryImageId)}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2">
        </div>
      </div>

      {/* Info Section */}
      <div className="p-3 space-y-1">
        
        {/* Ad label and Title */}
        <div className="flex items-center gap-2 text-xs">
          {adTrackingId && (
            <span className="border border-gray-300 text-gray-500 px-1 rounded">Ad</span>
          )}
          <h3 className="font-semibold text-sm text-gray-800 truncate">
            {name}
          </h3>
        </div>

        {/* Rating and delivery time */}
        <div className="flex items-center text-sm text-gray-700 space-x-2">
          <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-semibold">
            ★ <span className="ml-1">{avgRating}</span>
          </div>
          <span>· {sla?.slaString || '15–20 mins'}</span>
        </div>

        {/* Cuisines */}
        <div className="text-sm text-gray-600 truncate">
          {cuisines.join(', ')}
        </div>

        {/* Location */}
        <div className="text-sm text-gray-500">
          {locality || ''}{locality && areaName ? ', ' : ''}{areaName}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
