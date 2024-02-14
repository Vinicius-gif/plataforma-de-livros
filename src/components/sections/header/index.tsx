'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@mui/material';

import { useAuth } from '../../../lib/firebase/authService';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <nav className="w-full flex justify-around items-center">
        <Link href="/">
          <Image
            src="/coffe-book.png"
            alt="coffe book"
            width={110}
            height={110}
          />
        </Link>
        <div className="flex items-center gap-5 [&>a]:text-lg [&>a]:font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link
            href={user && user.uid ? `/favoriteBooks/${user.uid}` : '/login'}
          >
            Meus Favoritos
          </Link>

          <div className="mx-3">
            {user ? (
              <div>
                <p className="font-semibold text-lg">User: {user.email}</p>
                <Button
                  variant="contained"
                  size="small"
                  className="border-2 text-base bg-red-400 hover:bg-red-500 m-2"
                  onClick={logout}
                >
                  Sair
                </Button>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <Button
                    variant="contained"
                    className="border-2 text-lg font-medium bg-amber-500 hover:bg-amber-600 mx-1"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    variant="contained"
                    className="border-2 text-lg font-medium bg-amber-500 hover:bg-amber-600 mx-1"
                  >
                    Cadastrar
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
