/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
interface Props {
  image: string;
  title: string;
  author: string;
  totalEditions: number;
  firstEditionYear: string;
}

const BookCard = ({
  image,
  title,
  author,
  totalEditions,
  firstEditionYear
}: Props) => {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center h-[450px] max-w-72 w-80 mx-auto my-4 rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <Link href="/">
        {image ? (
          <img className="w-32 h-40" src={image} alt={title} />
        ) : (
          <img className="w-32 h-40" src="/cover_not_found.jpg" alt={title} />
        )}
      </Link>

      <div className="px-4 py-3 text-center">
        <Link href="/" className="font-bold text-lg mb-2 hover:underline">
          {title}
        </Link>
        <p className="text-gray-700 text-sm mb-2">Author: {author}</p>
        <p className="text-gray-700 text-sm mb-2">
          Total Editions: {totalEditions}
        </p>
        <p className="text-gray-700 text-sm">
          First Edition Year: {firstEditionYear}
        </p>

        <button className="bg-blue-500 text-white py-2 px-3 mt-3 hover:bg-blue-600">
          Detalhes
        </button>
      </div>
    </div>
  );
};

export default BookCard;
