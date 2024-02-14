/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, doc, addDoc, getDocs } from 'firebase/firestore';

import { BookProps } from '../../@types/BookContextTypes';
import { db } from './firebaseService';

export const addFavoriteBook = async (userId: string, bookData: BookProps) => {
  try {
    const userRef = doc(collection(db, 'users'), userId);
    await addDoc(collection(userRef, 'favoriteBooks'), bookData);
    alert('Book added to favorites successfully!');
  } catch (error: any) {
    console.error('Error adding book to favorites: ', error);
  }
};

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
