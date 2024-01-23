'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

import { Book } from '../@types/BookContextTypes';

interface BooksContextProps {
  dataBooks: Book[];
  setDataBooks: Dispatch<SetStateAction<Book[]>>;
}

interface ChildrenProp {
  children: React.ReactNode;
}

export const BookContext = createContext<BooksContextProps>({
  dataBooks: [],
  setDataBooks: () => {}
});

export const BookContextProvider = ({ children }: ChildrenProp) => {
  const [dataBooks, setDataBooks] = useState<Book[]>([]);

  const value: BooksContextProps = {
    dataBooks,
    setDataBooks
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
