/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Banner = () => {
  return (
    <section>
      <img src="/books.jpeg" alt="books" className="w-full h-80" />
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
    </section>
  );
};

export default Banner;
