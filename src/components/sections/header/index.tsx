import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@mui/material';

import { Dialog, DialogContent, DialogTrigger } from '../../ui/dialog';
import LoginForm from '../../ui/LoginForm';

const Header = () => {
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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outlined"
                className="border-2 text-lg font-semibold"
              >
                Login
              </Button>
            </DialogTrigger>
            <DialogContent>
              <LoginForm />
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
};

export default Header;
