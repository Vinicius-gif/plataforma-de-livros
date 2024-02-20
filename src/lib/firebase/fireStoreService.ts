/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import {
  collection,
  doc,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc
} from 'firebase/firestore';

import { BookProps } from '../../@types/BookContextTypes';
import { db } from './firebaseService';

export const getFavoriteBooks = async (
  userId: string
): Promise<BookProps[]> => {
  try {
    const userRef = doc(collection(db, 'users'), userId);
    const favoriteBooksSnapshot = await getDocs(
      collection(userRef, 'favoriteBooks')
    );
    const favoriteBooks: BookProps[] = [];

    favoriteBooksSnapshot.forEach((doc) => {
      favoriteBooks.push(doc.data() as BookProps);
    });

    return favoriteBooks;
  } catch (error: any) {
    console.error('Error getting favorite books: ', error);
    return []; // Returning an empty array in case of error
  }
};

export const addFavoriteBook = async (
  userId: string,
  bookData: BookProps,
  router: AppRouterInstance
) => {
  try {
    const userRef = doc(collection(db, 'users'), userId);
    await addDoc(collection(userRef, 'favoriteBooks'), bookData);
    router.refresh();
    // alert('Book added to favorites successfully!');
  } catch (error: any) {
    console.error('Error adding book to favorites: ', error);
  }
};

export const removeFavoriteBook = async (
  userId: string,
  bookId: string,
  router: AppRouterInstance
) => {
  try {
    const userRef = doc(collection(db, 'users'), userId);
    const querySnapshot = await getDocs(
      query(collection(userRef, 'favoriteBooks'), where('id', '==', bookId))
    );

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
      router.refresh();
    });
  } catch (error: any) {
    console.error('Error removing book from favorites: ', error);
  }
};

export const isBookFavorited = async (
  userId: string,
  bookId: string
): Promise<boolean> => {
  try {
    const userRef = doc(collection(db, 'users'), userId);
    const querySnapshot = await getDocs(
      query(collection(userRef, 'favoriteBooks'), where('id', '==', bookId))
    );

    return !querySnapshot.empty;
  } catch (error: any) {
    console.error('Error checking if book is favorited: ', error);
    return false;
  }
};
