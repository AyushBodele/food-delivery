import React from 'react';

const FilterBar = ({ filters, activeFilter, setActiveFilter }) => (
  <div className="hidden md:flex space-x-4">
    {filters.map((filter) => (
      <button
        key={filter.key}
        onClick={() => setActiveFilter(filter.key)}
        className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
          activeFilter === filter.key
            ? 'bg-orange-500 text-white border-orange-500'
            : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500'
        }`}
      >
        {filter.label}
      </button>
    ))}
  </div>
);

export default FilterBar;
