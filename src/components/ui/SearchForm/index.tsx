import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="flex items-center">
          <input
            type="text"
            className="w-full p-3 borde text-gray-800 rounded-l-md"
            placeholder="As Aventuras de..."
          />
          <button
            type="submit"
            className="bg-amber-600 text-white p-3 rounded-r-md hover:bg-amber-700"
          >
            <FaSearch size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;