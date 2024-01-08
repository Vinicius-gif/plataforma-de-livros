import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="w-full flex justify-around items-center">
        <Link href="">
          <Image
            src="/coffe-book.png"
            alt="coffe book"
            width={140}
            height={140}
          />
        </Link>
        <div>
          <Link href="">Home</Link>
          <Link href="">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
