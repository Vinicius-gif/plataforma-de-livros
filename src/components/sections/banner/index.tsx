/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Banner = () => {
  return (
    <section
      className="relative h-[500px] w-full bg-cover bg-center"
      style={{ backgroundImage: 'url("/library-img.jpg")' }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-gradient-to-r from-amber-700 to-amber-800 opacity-20">
        <h1 className="text-4xl font-bold mb-4">
          Encontre o livro de sua preferência
        </h1>
        <p className="text-sm text-center max-w-md mb-6">
          Explore um mundo de histórias e conhecimento no nosso site de livros.
          Navegue por uma vasta seleção que abrange gêneros diversos, desde
          emocionantes romances até cativantes obras de não-ficção. Embrace a
          paixão pela leitura e encontre o livro perfeito para cada momento. Seu
          próximo capítulo começa aqui.
        </p>
        <div className="max-w-md">
          <input
            className="w-full px-4 py-2 border border-white rounded-md"
            type="text"
            placeholder="As Aventuras de..."
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
