import React from 'react';

import { Book } from '../../../@types/BookContextTypes';
import BookCard from '../../ui/BookCard';
import LoadingSkeleton from '../../ui/LoadingSkeleton';
interface ListBooksProps {
  dataBooks: Book[];
  isLoading?: boolean;
}

const ListBooks = ({ dataBooks, isLoading }: ListBooksProps) => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <LoadingSkeleton key={index} />
        ))
      ) : dataBooks?.length ? (
        dataBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.volumeInfo?.title}
            authors={
              book.volumeInfo.authors?.join(', ') || 'Autor Desconhecido'
            }
            publisher={book.volumeInfo?.publisher || 'Indefinido'}
            image={book.volumeInfo.imageLinks?.thumbnail}
            pageCount={
              book.volumeInfo?.pageCount ? book.volumeInfo.pageCount : 0
            }
            description={book.volumeInfo?.description}
          />
        ))
      ) : (
        <div className="col-span-full flex justify-center items-center h-full my-10">
          <p className="text-2xl font-bold">Nenhum livro encontrado :(</p>
        </div>
      )}
    </section>
  );
};

export default ListBooks;
