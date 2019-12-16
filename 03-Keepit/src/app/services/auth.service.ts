import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  facebookLogin() {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  public facebookLogout() {
    localStorage.removeItem('uid');
    localStorage.removeItem('nombre');
    localStorage.removeItem('email');
    localStorage.removeItem('photo');
    return this.afAuth.auth.signOut();
  }

  setLocalData(uid: string, nombre: string, email: string, photo: string) {
    localStorage.setItem('uid', uid);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);
    localStorage.setItem('photo', photo);
  }

  getLocalData(key: string) {
    return localStorage.getItem(key);
  }
}
