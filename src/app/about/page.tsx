/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AboutPage = () => {
  return (
    <main className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/books.jpeg"
              alt="Imagem de prateleira"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-3xl font-bold mb-4">Sobre o LeituraHub</h2>
            <p className="text-gray-700 leading-relaxed">
              Bem-vindo ao LeituraHub! Aqui, estamos comprometidos em conectar
              amantes de livros de todas as partes do mundo. Desde os clássicos
              intemporais até as últimas novidades literárias, nossa plataforma
              é seu destino para explorar, descobrir e compartilhar o prazer da
              leitura.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Em LeituraHub, acreditamos que os livros têm o poder de
              transformar vidas, ampliar horizontes e inspirar mudanças. É por
              isso que estamos empenhados em oferecer uma vasta seleção de
              obras, desde clássicos atemporais até os mais recentes
              lançamentos, abrangendo diversos gêneros e estilos.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Na LeituraHub, valorizamos a comunidade de leitores. Nossa
              plataforma não é apenas um espaço para encontrar e ler livros, mas
              também um lugar para se conectar com outros apaixonados por
              literatura, compartilhar recomendações, participar de discussões e
              expandir seu círculo literário.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
