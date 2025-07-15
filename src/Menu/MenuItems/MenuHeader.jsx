import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useCart } from "../../context/CartContext";
import vegIcon from "../../assets/veg.jpg";
import nonVegIcon from "../../assets/nonVeg.jpg";

import TopPicksFull from "./TopPicks";

export default function MenuHeader({ restaurantId = "53419" }) {
  const [isVegOn, setIsVegOn] = useState(false);
  const [isNonVegOn, setIsNonVegOn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isBestsellerOn, setIsBestsellerOn] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Title */}
      <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm tracking-widest font-semibold">
        <svg height="24" width="24" fill="currentColor" className="text-gray-400">
          <path d="M5 12L1 8h8l-4 4z" />
        </svg>
        <span className="text-gray-700">MENU</span>
        <svg height="24" width="24" fill="currentColor" className="text-gray-400">
          <path d="M19 12l4-4h-8l4 4z" />
        </svg>
      </div>

      {/* Search */}
      <div className="relative pl-5">
        <input
          type="text"
          placeholder="Search for dishes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-205 bg-gray-100 rounded-xl px-5 py-3 pl-4 pr-12 text-gray-700 font-medium placeholder-gray-500 focus:outline-none"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 mr-6" />
      </div>

      {/* Filters */}
      <div className="flex space-x-4 pl-5">
        {/* Veg Toggle */}
        <div
          className="relative flex items-center space-x-2 border border-gray-300 rounded-full pl-2 pr-1 py-1"
          ref={dropdownRef}
        >
          <div
            onClick={() => setIsVegOn(!isVegOn)}
            className={`relative flex items-center w-[44px] h-[20px] rounded-full transition-all duration-300 cursor-pointer ${
              isVegOn ? "bg-green-600 justify-end" : "bg-gray-200 justify-start"
            }`}
          >
            <img
              src={vegIcon}
              alt="veg"
              className="w-5 h-5 object-contain transition-all"
            />
          </div>

          {isVegOn && (
            <>
              <div className="h-4 w-px bg-gray-300 mx-1" />
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="p-1 hover:bg-gray-100 rounded-full transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" className="text-gray-500">
                  <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
            </>
          )}

          {showDropdown && (
            <div className="absolute top-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg w-44 z-10">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pure Veg</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Veg + Egg</li>
              </ul>
            </div>
          )}
        </div>

        {/* Non-Veg Toggle */}
        <div
          onClick={() => setIsNonVegOn(!isNonVegOn)}
          className="flex items-center px-3 py-2 border border-gray-300 rounded-full cursor-pointer transition-all"
        >
          <div
            className={`relative flex items-center w-[44px] h-[20px] rounded-full transition-all duration-300 ${
              isNonVegOn ? "bg-red-500 justify-end" : "bg-gray-200 justify-start"
            }`}
          >
            <img
              src={nonVegIcon}
              alt="non-veg"
              className="w-5 h-5 object-contain transition-all"
            />
          </div>
        </div>

        {/* Bestseller Button */}
        <button 
          onClick={() => setIsBestsellerOn(!isBestsellerOn)}
          className={`px-4 py-2 border rounded-full text-sm font-medium transition ${
            isBestsellerOn 
              ? 'bg-orange-500 text-white border-orange-500' 
              : 'text-gray-700 border-gray-300 hover:shadow-sm'
          }`}
        >
          Bestseller
        </button>
      </div>

      {/* Top Picks Section */}
      <TopPicksFull 
        restaurantId={restaurantId} 
        filters={{
          isVegOn,
          isNonVegOn,
          searchTerm,
          isBestsellerOn
        }}
      />
    </div>
  );
}
