'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

import { Book } from '../@types/BookContextTypes';

interface BooksContextProps {
  dataBooks: Book[];
  setDataBooks: Dispatch<SetStateAction<Book[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface ChildrenProp {
  children: React.ReactNode;
}

export const BookContext = createContext<BooksContextProps>({
  dataBooks: [],
  setDataBooks: () => {},
  isLoading: false,
  setIsLoading: () => {}
});

export const BookContextProvider = ({ children }: ChildrenProp) => {
  const [dataBooks, setDataBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const value: BooksContextProps = {
    dataBooks,
    setDataBooks,
    isLoading,
    setIsLoading
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
