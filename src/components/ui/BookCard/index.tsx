/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Props {
  image: string;
  title: string;
  author: string;
  totalEditions: string;
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
    <div className="max-w-56 mx-auto rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-36 object-cover" src={image} alt={title} />
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
  );
};

export default BookCard;
