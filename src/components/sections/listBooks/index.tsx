'use client';

import React, { useEffect, useState } from 'react';

import { Book } from '../../../@types/book';
import { searchBooks } from '../../../api/booksApi';
import { useSearchBookContext } from '../../../contexts/SearchBookContext';
import BookCard from '../../ui/BookCard';

const ListBooks = () => {
  const [dataBooks, setDataBooks] = useState<Book[]>([]);

  const { searchInputValue } = useSearchBookContext();

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await searchBooks('harry');
      setDataBooks(books);
    };

    fetchBooks();
  }, []);

  return (
    <section>
      {dataBooks.map((book) => (
        <BookCard
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors.join(', ')}
          firstEditionYear={book.volumeInfo.publisher}
          image={book.volumeInfo.imageLinks.thumbnail}
          totalEditions={book.volumeInfo.pageCount}
        />
      ))}
    </section>
  );
};

export default ListBooks;
