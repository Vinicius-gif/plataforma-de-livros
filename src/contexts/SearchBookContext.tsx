'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo o tipo do contexto
interface SearchBookContextProps {
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBookContext = createContext<SearchBookContextProps | undefined>(
  undefined
);

interface InputProviderProps {
  children: ReactNode;
}

export const SearchBookProvider = ({ children }: InputProviderProps) => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  return (
    <SearchBookContext.Provider
      value={{ searchInputValue, setSearchInputValue }}
    >
      {children}
    </SearchBookContext.Provider>
  );
};

// Criando um hook personalizado para utilizar o contexto
export const useSearchBookContext = () => {
  const context = useContext(SearchBookContext);

  if (!context) {
    throw new Error(
      'useSearchBookContext deve ser utilizado dentro de um SearchBookProvider'
    );
  }

  return context;
};
