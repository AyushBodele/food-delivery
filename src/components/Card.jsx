import React from 'react';
import { ArrowRight } from 'lucide-react';

function Card({ image }) {
  return (
    <div className="p-8 flex items-center justify-center relative top-0">
      <div className="bg-white rounded-4xl p-6 max-w-sm w-full shadow-2xl relative overflow-hidden ">
        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-black text-gray-800 leading-tight mb-2">
            FOOD DELIVERY
          </h1>
          <p className="text-gray-500 text-lg font-medium mb-2">
            FROM RESTAURANTS
          </p>

          <div className="mb-16">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-transparent px-3 py-1 rounded-2xl">
              <span className="text-1xl font-bold text-orange-500">
                UPTO 60% OFF
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-16 h-16 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
            <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Food Image - Bottom Right */}
        <img
          src={image}
          alt="Food"
          className="absolute top-35 left-41 w-42 h-40 object-cover rounded-xl z-0 opacity-90"
        />
      </div>
    </div>
  );
}

export default Card;
