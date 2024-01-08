import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Header from '../components/sections/header';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
