import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@mui/material';

const Header = () => {
  return (
    <header>
      <nav className="w-full flex justify-around items-center">
        <Link href="">
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
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className="border-2 text-lg font-semibold"
          >
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
