import React from 'react';

import BookCard from '../../../components/ui/BookCard';
import { getFavoriteBooks } from '../../../lib/firebase/fireStoreService';

const FavoriteBooks = async ({ params }: { params: { userId: string } }) => {
  const favoriteBooks = await getFavoriteBooks(params.userId);

  return (
    <div>
      <h2>Favorite Books:</h2>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favoriteBooks.length ? (
          favoriteBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              authors={book.authors}
              publisher={book.publisher}
              image={book.image}
              pageCount={book.pageCount || 0}
              description={book.description}
            />
          ))
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </section>
    </div>
  );
};

export default FavoriteBooks;
