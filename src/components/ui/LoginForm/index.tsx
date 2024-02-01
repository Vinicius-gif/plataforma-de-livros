'use client';

import React, { FormEvent, useEffect, useState } from 'react';

import { User } from 'firebase/auth';

import {
  Login,
  Logout,
  OnAuthChanged
} from '../../../lib/firebase/authService';

const LoginForm = () => {
  const [user, setUser] = useState<User | null>();

  async function handlerLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      'password'
    ) as HTMLInputElement;

    Login(emailInput.value, passwordInput.value)
      .then((user) => console.log(user))
      .catch((error) => alert(error));
  }

  useEffect(() => {
    function unsubiscribe() {
      return OnAuthChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(user);
        }
      });
    }

    return unsubiscribe();
  }, []);

  if (user) {
    <form onSubmit={handlerLogin}>
      <button
        onClick={() => Logout()}
        className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
      >
        Sair
      </button>
    </form>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handlerLogin}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full p-2 border rounded-md"
            placeholder="Digite seu nome de usuário"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Senha:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded-md"
            placeholder="Digite sua senha"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Acessar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
