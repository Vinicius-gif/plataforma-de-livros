/* eslint-disable import-helpers/order-imports */
import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '@/components/ui/SearchForm';
import { searchBooks } from '@/api/booksApi';

jest.mock('@/api/booksApi', () => ({
  searchBooks: jest.fn(() => Promise.resolve([{ id: 1, title: 'Livro Teste' }]))
}));

describe('SearchForm component', () => {
  it('should render input and button elements', () => {
    const { getByPlaceholderText } = render(<SearchForm />);

    expect(getByPlaceholderText('As Aventuras de...')).toBeInTheDocument();
  });

  it('should update input value when user types', () => {
    const { getByPlaceholderText } = render(<SearchForm />);
    const inputElement = getByPlaceholderText(
      'As Aventuras de...'
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'Harry Potter' } });

    expect(inputElement.value).toBe('Harry Potter');
  });

  it('should call searchBooks function when form is submitted', async () => {
    const { getByPlaceholderText } = render(<SearchForm />);
    const inputElement = getByPlaceholderText(
      'As Aventuras de...'
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'Livro Teste' } });

    fireEvent.submit(inputElement);

    await waitFor(() =>
      expect(searchBooks).toHaveBeenCalledWith('Livro Teste')
    );
  });
});
