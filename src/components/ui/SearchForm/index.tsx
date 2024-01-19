'use client';

import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { SearchBookContext } from '../../../contexts/SearchBookContext';

const SearchForm = () => {
  const { setSearchInputValue } = useContext(SearchBookContext);

  // Estado local para armazenar temporariamente o valor do input
  const [localInputValue, setLocalInputValue] = useState('');

  const handleInputChange = (event) => {
    // Atualiza o estado local
    setLocalInputValue(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // Atualiza o estado global apenas quando o botão é clicado
    setSearchInputValue(localInputValue);
  };

  return (
    <div className="lg:w-1/3 mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="flex items-center">
          <input
            type="text"
            className="w-full p-3 border text-gray-800 rounded-l-md"
            placeholder="As Aventuras de..."
            value={localInputValue}
            onChange={handleInputChange}
          />
          <button
            className="bg-amber-600 text-white p-3 rounded-r-md hover:bg-amber-700"
            onClick={handleSearchButtonClick}
          >
            <FaSearch size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
