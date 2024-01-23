'use client';

import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { searchBooks } from '../../../api/booksApi';
import { BookContext } from '../../../contexts/BookContext';

const SearchForm = () => {
  const [inputSearch, setInputSearch] = useState('');

  const { setDataBooks } = useContext(BookContext);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const booksData = await searchBooks(inputSearch);

    setDataBooks(booksData);

    setInputSearch('');
  };

  return (
    <div className="lg:w-1/3 mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            className="w-full p-3 border text-gray-800 rounded-l-md"
            placeholder="As Aventuras de..."
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button
            className="bg-amber-600 text-white p-3 rounded-r-md hover:bg-amber-700"
            type="submit"
          >
            <FaSearch size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
