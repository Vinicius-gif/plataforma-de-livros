/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

import { BookProps } from '../../../../@types/BookContextTypes';
import { useAuth } from '../../../../lib/firebase/authService';
import {
  addFavoriteBook,
  isBookFavorited,
  removeFavoriteBook
} from '../../../../lib/firebase/fireStoreService';

const FavoriteButton = ({ ...bookData }: BookProps) => {
  const [favorited, setFavorited] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkIfFavorited = async () => {
      if (user) {
        const favorited = await isBookFavorited(user.uid, bookData.id);
        setFavorited(favorited);
      }
    };
    checkIfFavorited();
  }, [user, bookData]);

  const handleButton = () => {
    if (user) {
      favorited
        ? removeFavoriteBook(user.uid, bookData.id, router)
        : addFavoriteBook(user.uid, bookData, router);
      setFavorited(!favorited);
    } else {
      router.push('/login');
    }
  };

  return (
    <div
      className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer"
      onClick={handleButton}
    >
      {favorited ? (
        <MdFavorite className="size-8 text-red-400" />
      ) : (
        <MdFavoriteBorder className="size-8" />
      )}
    </div>
  );
};

export default FavoriteButton;
