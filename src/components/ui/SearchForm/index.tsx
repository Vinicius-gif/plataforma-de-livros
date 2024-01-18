'use client';

import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { useSearchBookContext } from '../../../contexts/SearchBookContext';

const SearchForm = () => {
  const { searchInputValue, setSearchInputValue } = useSearchBookContext();

  const handleInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  return (
    <div className="lg:w-1/3 mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="flex items-center">
          <input
            type="text"
            className="w-full p-3 borde text-gray-800 rounded-l-md"
            placeholder="As Aventuras de..."
            value={searchInputValue}
            onChange={handleInputChange}
          />
          <button
            className="bg-amber-600 text-white p-3 rounded-r-md hover:bg-amber-700"
            onClick={() => setSearchInputValue(searchInputValue)}
          >
            <FaSearch size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
