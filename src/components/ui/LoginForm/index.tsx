/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAuth } from '../../../lib/firebase/authService';

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const { loginWithEmailAndPassword } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema)
  });

  const handlerLogin = async (data: LoginFormSchema) => {
    try {
      await loginWithEmailAndPassword(data.email, data.password);
      console.log('sucesso login!');
      router.push('/');
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit(handlerLogin)}>
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
            {...register('email')}
            className="w-full p-2 border rounded-md "
            placeholder="Digite seu nome de usuário"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
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
            {...register('password')}
            className="w-full p-2 border rounded-md"
            placeholder="Digite sua senha"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Acessar
        </button>
        <p className="mt-2">
          Não tem cadastro?{' '}
          <Link href="/signup" className="underline text-blue-600">
            Clique aqui.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
