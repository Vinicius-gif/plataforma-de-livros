/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAuth } from '../../../lib/firebase/authService';

const signUpFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coicindem',
    path: ['confirmPassword']
  });

type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

const SignupForm = () => {
  const { signUpWithEmailAndPassword } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema)
  });

  const handlerSignupForm = async (data: SignUpFormSchema) => {
    try {
      await signUpWithEmailAndPassword(data.email, data.password);
      console.log('sucesso cadastro!');
      router.push('/');
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Cadastro</h2>
      <form onSubmit={handleSubmit(handlerSignupForm)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full p-2 border rounded-md"
            placeholder="Escolha seu nome de usuário"
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
            placeholder="Escolha sua senha"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Confirmar senha:
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword')}
            className="w-full p-2 border rounded-md"
            placeholder="Confirme sua senha"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
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
