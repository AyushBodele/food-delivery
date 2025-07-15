import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useParams } from 'react-router-dom';
import RestaurantGrid from './RestaurantGrid';
import useCategoryData from './useCategoryData';


function CategoryHeader() {
  const { type } = useParams();
  const { title, description, text } = useCategoryData(type);

  return (
    <div className="px-6 py-6">
      <div className='ml-30'>
        
      <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-30">{title}</h1>
      <p className="text-lg text-gray-600 mb-6">{description}</p>

      <div className="flex gap-4 flex-wrap">
        <button className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 cursor-pointer">
          <SlidersHorizontal size={16} />
          Filter
        </button>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 cursor-pointer">
          Sort By
          <ChevronDown size={16} />
        </button>
        <button className="border px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 cursor-pointer">
          10 Mins Delivery
        </button>
      </div>

      {text && (
        <h2 className="text-2xl font-bold text-gray-900 mt-6">{text}</h2>
      )}

    
      </div>
      {/* ✅ Pass type as prop */}
      <div className='ml-20 mr-10'>
        <RestaurantGrid type={type} />
      </div>

     
    </div>
  );
}

export default CategoryHeader;
