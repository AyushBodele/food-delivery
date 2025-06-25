import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function CategoryHeader() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/mapi/restaurants/list/v5?lat=21.1463&lng=79.0849&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1'
      );
      const json = await data.json();

      console.log(json); // Debugging purpose

      setTitle(json?.data?.cards?.[0]?.card?.card?.title || '');
      setDescription(json?.data?.cards?.[0]?.card?.card?.description || '');
      setText(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.text || '');
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div className="ml-33 px-6 py-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-30">{title}</h1>
      <p className="text-lg text-gray-600 mb-6">{description}</p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap ">
        {/* Filter Button */}
        <button className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 cursor-pointer">
          <SlidersHorizontal size={16} />
          Filter
        </button>

        {/* Sort By Button */}
        <button className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 cursor-pointer">
          Sort By
          <ChevronDown size={16} />
        </button>

        {/* Delivery Button */}
        <button className="border px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 cursor-pointer">
          10 Mins Delivery
        </button>
      </div>

      {/* Restaurants to explore or any other text */}
      {text && (
        <h2 className="text-2xl font-bold text-gray-900 mt-6">{text}</h2>
      )}
    </div>
  );
}

export default CategoryHeader;
