/* eslint-disable @next/next/no-img-element */
import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../dialog';
interface Props {
  image: string;
  title: string;
  author: string;
  totalEditions: number;
  firstEditionYear: string;
  description: string;
}

const BookCard = ({
  image,
  title,
  author,
  totalEditions,
  firstEditionYear,
  description
}: Props) => {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center h-[450px] max-w-72 w-80 mx-auto my-4 rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      {image ? (
        <img className="w-32 h-40" src={image} alt={title} />
      ) : (
        <img className="w-32 h-40" src="/cover_not_found.jpg" alt={title} />
      )}

      <div className="px-4 py-3 text-center">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-2">Author: {author}</p>
        <p className="text-gray-700 text-sm mb-2">
          Total Editions: {totalEditions}
        </p>
        <p className="text-gray-700 text-sm">
          First Edition Year: {firstEditionYear}
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-blue-500 text-white py-2 px-3 mt-3 hover:bg-blue-600">
              Detalhes
            </button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center font-semibold text-3xl underline">
                Detalhes do livro
              </DialogTitle>
              <img className="w-32 h-40" src={image} alt={title} />
              <h2 className="font-bold text-2xl mb-2 text-center underline">
                {title}
              </h2>
              <p className="font-medium">{description}</p>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BookCard;
