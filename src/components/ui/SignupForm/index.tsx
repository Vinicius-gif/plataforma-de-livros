'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

import { useAuth } from '../../../lib/firebase/authService';

const SignupForm = () => {
  const { signUpWithEmailAndPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handlerSignupForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUpWithEmailAndPassword(email, password);
      console.log('sucesso cadastro!');
      router.push('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Cadastro</h2>
      <form onSubmit={handlerSignupForm}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="w-full p-2 border rounded-md"
            placeholder="Escolha seu nome de usuário"
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            className="w-full p-2 border rounded-md"
            placeholder="Escolha sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Cadastrar
        </button>
        <p className="mt-2">
          Já tem cadastro?{' '}
          <Link href="/login" className="underline text-blue-600">
            Clique aqui.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
