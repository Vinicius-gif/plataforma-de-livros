import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';
import { QueryClientProvider } from '@tanstack/react-query';

import NavBar from '../components/sections/navbar';
import { BookContextProvider } from '../contexts/BookContext';
import { queryClient } from '../lib/reactQuery/queryProvider';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'LeituraHub',
  description: 'O seu acervo pessoal de livros'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-lt-installed={true}>
      <body className={roboto.className}>
        <BookContextProvider>
          <QueryClientProvider client={queryClient}>
            <NavBar />
            {children}
          </QueryClientProvider>
        </BookContextProvider>
      </body>
    </html>
  );
}
