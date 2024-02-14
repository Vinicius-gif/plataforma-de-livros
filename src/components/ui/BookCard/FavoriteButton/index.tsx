'use client';

import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';

import { BookProps } from '../../../../@types/BookContextTypes';
import { useAuth } from '../../../../lib/firebase/authService';
import { addFavoriteBook } from '../../../../lib/firebase/fireStoreService';

const FavoriteButton = ({ ...bookData }: BookProps) => {
  const { user } = useAuth();

  return (
    <div
      className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer"
      onClick={() => user && addFavoriteBook(user.uid, bookData)}
    >
      <MdFavoriteBorder className="size-8" />
    </div>
  );
};

export default FavoriteButton;
