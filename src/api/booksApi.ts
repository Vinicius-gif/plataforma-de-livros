/* eslint-disable @typescript-eslint/no-var-requires */
import axios from 'axios';
require('dotenv').config();

const apiKey = 'AIzaSyBAX8BcfKriCQ7sTkAwXAGCn5VfpsEsDXM';

export const searchBooks = async (searchTerm: string) => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const books = response.data.items;
    return books;
  } catch (error) {
    console.error('Erro ao buscar livros:', error.message);
    throw error;
  }
};
