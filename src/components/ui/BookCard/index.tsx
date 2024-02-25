/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import { BookProps } from '../../../@types/BookContextTypes';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../dialog';
import FavoriteButton from './FavoriteButton';

const BookCard = (props: BookProps) => {
  const { image, title, authors, pageCount, publisher, description, infoLink } =
    props;
  return (
    <div className="relative grid grid-cols-1 content-center justify-items-center h-[450px] max-w-72 w-80 mx-auto my-4 rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <FavoriteButton {...props} />
      {image ? (
        <img className="w-32 h-40" src={image} alt={title} />
      ) : (
        <img className="w-32 h-40" src="/cover_not_found.jpg" alt={title} />
      )}

      <div className="px-4 py-3 text-center">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-2">Author: {authors}</p>
        <p className="text-gray-700 text-sm mb-2">
          Total de paginas: {pageCount}
        </p>
        <p className="text-gray-700 text-sm">Editora: {publisher}</p>
        <Link href={infoLink} target="_blank">
          <button className="bg-amber-500 text-white py-2 px-3 mt-3 hover:bg-amber-600 mr-2">
            Ler agora
          </button>
        </Link>

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
              <p className="font-medium">
                {description
                  ? `${description.substring(0, 500)}...`
                  : 'Nenhuma descrição foi informada :('}
              </p>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BookCard;
