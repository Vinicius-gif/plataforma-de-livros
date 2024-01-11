/* eslint-disable @next/next/no-img-element */
import React from 'react';

import SearchForm from '../../ui/SearchForm';

const Banner = () => {
  return (
    <section
      className="relative h-[500px] w-full bg-cover bg-center"
      style={{ backgroundImage: 'url("/library-img.jpg")' }}
    >
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-white text-center"
        style={{
          background:
            'linear-gradient(to top, rgba(251, 191, 36, 0.2), transparent)'
        }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Encontre o livro de sua preferência
        </h1>
        <p className="text-sm text-center max-w-md mb-6 opacity-90">
          Explore um mundo de histórias e conhecimento no nosso site de livros.
          Embrace a paixão pela leitura e encontre o livro perfeito para cada
          momento. Seu próximo capítulo começa aqui.
        </p>
        <SearchForm />
      </div>
    </section>
  );
};

export default Banner;
