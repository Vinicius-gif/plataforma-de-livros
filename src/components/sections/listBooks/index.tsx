'use client';

import React, { useContext, useEffect, useState } from 'react';

import { Book } from '../../../@types/book';
import { searchBooks } from '../../../api/booksApi';
import { SearchBookContext } from '../../../contexts/SearchBookContext';
import BookCard from '../../ui/BookCard';

const ListBooks = () => {
  const [dataBooks, setDataBooks] = useState<Book[]>([]);

  const { searchInputValue, setSearchInputValue } =
    useContext(SearchBookContext);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await searchBooks(searchInputValue);
      setDataBooks(books);
    };

    fetchBooks();
  }, [setDataBooks, setSearchInputValue, searchInputValue]);

  return (
    <section>
      {dataBooks.length > 0 &&
        dataBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.volumeInfo?.title}
            author={book.volumeInfo.authors?.join(', ')}
            firstEditionYear={book.volumeInfo?.publisher}
            image={book.volumeInfo.imageLinks?.thumbnail}
            totalEditions={book.volumeInfo?.pageCount}
          />
        ))}
    </section>
  );
};

export default ListBooks;
