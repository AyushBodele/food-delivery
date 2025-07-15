  import React from 'react';

  const CitySelector = ({ cities, selectedCity, onChange }) => (
    <select
      value={selectedCity}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-4xl px-8 py-2 border-gray-300 text-gray-700 "
    >
      {cities.map(city => (
        <option key={city.cityName} value={city.cityName}>
          {city.cityName}
        </option>
      ))}
    </select>
  );

  export default CitySelector;
