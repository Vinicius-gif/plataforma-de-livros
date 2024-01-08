import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section>
      <Image src="/books.jpeg" alt="books" width={500} height={500} />
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
