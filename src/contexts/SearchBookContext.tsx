'use client';

import React, { createContext, useState, ReactNode } from 'react';

// Definindo o tipo do contexto
interface SearchBookContextProps {
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBookContext = createContext<
  SearchBookContextProps | undefined
>(undefined);

interface InputProviderProps {
  children: ReactNode;
}

export const SearchBookProvider = ({ children }: InputProviderProps) => {
  const [searchInputValue, setSearchInputValue] =
    useState<string>('harry potter');

  return (
    <SearchBookContext.Provider
      value={{ searchInputValue, setSearchInputValue }}
    >
      {children}
    </SearchBookContext.Provider>
  );
};
