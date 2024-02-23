'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import { auth } from './firebaseService';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUpWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return {
    user,
    loginWithEmailAndPassword,
    signUpWithEmailAndPassword,
    logout
  };
}
