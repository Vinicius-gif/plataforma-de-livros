'use client';

import React, { useContext } from 'react';

import { BookContext } from '../../../contexts/BookContext';
import ListBooks from '../listBooks';

const ListBooksHome = () => {
  const { dataBooks, isLoading } = useContext(BookContext);

  return <ListBooks dataBooks={dataBooks} isLoading={isLoading} />;
};

export default ListBooksHome;
