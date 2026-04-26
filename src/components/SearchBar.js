import React, { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
  const [pincode, setPincode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      onSearch(pincode);
    } else {
      alert('Please enter a valid 6-digit Indian pincode');
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/[^0-9]/g, ''))}
          placeholder="Enter 6-digit Pincode (e.g., 110001)"
          className="search-input"
          maxLength={6}
          disabled={loading}
        />
        <button 
          type="submit" 
          className="search-button"
          disabled={loading || pincode.length !== 6}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
