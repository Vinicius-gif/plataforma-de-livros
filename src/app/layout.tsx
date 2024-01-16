import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';
import Header from '../components/sections/header';
import { SearchBookProvider } from '../contexts/SearchBookContext';

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
        <SearchBookProvider>
          <Header />
          {children}
        </SearchBookProvider>
      </body>
    </html>
  );
}
