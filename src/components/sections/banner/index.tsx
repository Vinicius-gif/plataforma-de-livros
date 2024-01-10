/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Banner = () => {
  return (
    <section className="bg-[url('/library-img.jpg')]">
      <div className="flex flex-col text-center text-white min-h-screen bg-gradient-to-r from-amber-700 to-amber-800 opacity-20">
        <h1>Encontre o livro de sua preferência</h1>
        <p>
          Explore um mundo de histórias e conhecimento no nosso site de livros.
          Navegue por uma vasta seleção que abrange gêneros diversos, desde
          emocionantes romances até cativantes obras de não-ficção. Embrace a
          paixão pela leitura e encontre o livro perfeito para cada momento. Seu
          próximo capítulo começa aqui.
        </p>
        <div>
          <input type="text" placeholder="As Aventuras de..." />
        </div>
      </div>
    </section>
  );
};

export default Banner;
