import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);

  constructor() {}

  // Inscription avec email et mot de passe
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Connexion avec email et mot de passe
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  // Récupérer l'utilisateur courant
  getCurrentUser() {
    return this.auth.currentUser;
  }
}
