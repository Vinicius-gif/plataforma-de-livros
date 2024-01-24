'use client';

import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { searchBooks } from '../../../api/booksApi';
import { BookContext } from '../../../contexts/BookContext';

const SearchForm = () => {
  const [inputSearch, setInputSearch] = useState('');

  const { setDataBooks, setIsLoading } = useContext(BookContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);

    const booksData = await searchBooks(inputSearch);

    setIsLoading(false);

    setDataBooks(booksData);

    setInputSearch('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputSearch.trim() !== '') {
      handleSearch();
    } else {
      event.currentTarget.querySelector('input').blur();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (inputSearch.trim() === '') {
        e.currentTarget.blur();
      } else {
        handleSearch();
      }
    }
  };

  return (
    <div className="lg:w-1/3 mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            className="w-full p-3 border text-gray-800 rounded-l-md"
            placeholder="As Aventuras de..."
            value={inputSearch}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
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
