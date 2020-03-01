import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
/**
 * For smaller apps, I prefer to use Firebase to handle
 * authentication and token validation for me. 
 * This way, we can delegate responsibility of 
 * token management and easily implement social 
 * signups on client side, no fuss.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userProfile;
  private userCharacter;
  private user$;
  constructor(private fAuth: AngularFireAuth) {
    this.user$ = this.fAuth.user;
    this.fAuth.onAuthStateChanged(observer => {
      if (!observer) {
        this.user$ = null;
        return;
      }
      this.userProfile = {
        name: observer.displayName,
        email: observer.email
      }
      this.user$ = observer;
    });
  }
  public async loginWithGoogle() {
    let provider = new auth.GoogleAuthProvider();
    let result = await this.fAuth.signInWithPopup(provider);
  }
  get IsAuthenticated() {
    return !!this.user$;
  }
  get Character() {
    return this.userCharacter
  }
  set Character(value) {
    this.userCharacter = value;
  }
  get Profile() {
    return this.userProfile;
  }
}
