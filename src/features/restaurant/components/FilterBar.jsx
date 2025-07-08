import React from 'react';
import Button from '../../../components/ui/Button';

const FilterBar = ({ filters, activeFilter, setActiveFilter }) => (
  <div className="hidden md:flex space-x-4">
    {filters.map((filter) => (
      <Button
        key={filter.key}
        onClick={() => setActiveFilter(filter.key)}
        variant={activeFilter === filter.key ? 'active' : 'filter'}
      >
        {filter.label}
      </Button>
    ))}
  </div>
);

export default FilterBar;