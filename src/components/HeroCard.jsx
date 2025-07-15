import React from 'react';
import { ArrowRight } from 'lucide-react';

function Card({ image, title, subtitle, discount }) {
  return (
    <div className="p-4 sm:p-6 flex items-center justify-center relative cursor-pointer">
      <div className="bg-white rounded-4xl p-6 sm:p-6 w-[320px] sm:w-[355px] shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-700 leading-tight mb-2 break-words">
            {title}
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl font-medium mb-2">
            {subtitle}
          </p>

          <div className="mb-16">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-transparent px-4 py-1.5 rounded-2xl">
              <span className="text-base sm:text-lg font-bold text-orange-500">
                {discount}
              </span>
            </div>
          </div>

          <button className="w-14 h-14 bg-orange-500 hover:bg-orange-600 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>


        <img
          src={image}
          alt="Food"
          className="absolute bottom-0 right-0 w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-xl z-0 opacity-90"
        />
      </div>
    </div>
  );
}

export default Card;
