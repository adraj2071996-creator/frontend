import React from 'react';

const Filters = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'veterinary', label: 'Veterinary' },
    { id: 'hospital', label: 'Hospital' },
    { id: 'ngo', label: 'NGO' },
    { id: 'grooming', label: 'Grooming' },
    { id: 'first_aid', label: 'First Aid' }
  ];

  return (
    <div className="filters-container">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;
