'use client';

import React, { useState, useEffect } from 'react';

import BookCard from '../../../components/ui/BookCard';
import { useAuth } from '../../../lib/firebase/authService';
import { getFavoriteBooks } from '../../../lib/firebase/fireStoreService';

const FavoriteBooks = () => {
  const { user } = useAuth();
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const fetchFavoriteBooks = async () => {
      if (user) {
        const books = await getFavoriteBooks(user.uid);
        setFavoriteBooks(books);
      }
    };
    fetchFavoriteBooks();
  }, [user]);

  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-8 underline">
        Seus livros favoritos
      </h2>
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
              infoLink={book.infoLink}
            />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-full my-10">
            <p className="text-2xl font-bold">Nenhum livro encontrado.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default FavoriteBooks;
