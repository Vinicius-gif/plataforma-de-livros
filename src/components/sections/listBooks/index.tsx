'use client';

import React, { useContext } from 'react';

import { BookContext } from '../../../contexts/BookContext';
import BookCard from '../../ui/BookCard';

const ListBooks = () => {
  const { dataBooks, isLoading } = useContext(BookContext);

  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading ? (
        <p>Carregando...</p>
      ) : dataBooks.length > 0 ? (
        dataBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.volumeInfo?.title}
            author={book.volumeInfo.authors?.join(', ')}
            firstEditionYear={book.volumeInfo?.publisher}
            image={book.volumeInfo.imageLinks?.thumbnail}
            totalEditions={book.volumeInfo?.pageCount}
          />
        ))
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </section>
  );
};

export default ListBooks;
