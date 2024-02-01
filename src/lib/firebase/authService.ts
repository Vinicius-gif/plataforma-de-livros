import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';

import { auth } from './firebaseService';

export async function Login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function Logout() {
  return signOut(auth);
}

export function OnAuthChanged(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
