import React from 'react';
import { categories } from '../utils/data';

const GroceryCategories = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Shop groceries on Instamart</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((item, index) => (
          <div key={index} className="text-center">
            <button
              aria-label={item.label}
              className="w-full aspect-[4/5] overflow-hidden rounded-xl transition-transform duration-300 hover:scale-90 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover rounded-xl"
              />
            </button>
            <div className="mt-2 text-sm">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryCategories;
