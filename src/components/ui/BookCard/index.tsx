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
    <Link href="/" className="card-link">
      <div className="max-w-64 mx-auto rounded overflow-hidden shadow-lg my-4 card">
        {image ? (
          <img
            className="w-full h-36 object-cover transition-transform transform scale-100 hover:scale-110"
            src={image}
            alt={title}
          />
        ) : (
          <img
            className="w-full h-36 object-cover transition-transform transform scale-100 hover:scale-110"
            src="/cover_not_found.jpg"
            alt={title}
          />
        )}

        <div className="px-4 py-2 text-center">
          <div className="font-bold text-sm mb-1">{title}</div>
          <p className="text-gray-700 text-xs mb-1">Author: {author}</p>
          <p className="text-gray-700 text-xs mb-1">
            Total Editions: {totalEditions}
          </p>
          <p className="text-gray-700 text-xs">
            First Edition Year: {firstEditionYear}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
