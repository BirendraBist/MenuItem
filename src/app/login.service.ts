import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  username: string;
  password: string;
  constructor(private router: Router,
    private afAuth: AngularFireAuth) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  login(username, password) {
    if (username !== '' && password !== '') {
      return this.afAuth.auth.signInWithEmailAndPassword(username, password)
        .then(authState => {
          console.log("Login", authState);
          this.loggedIn.next(true);
          this.router.navigate(['/menus']); //

        })
        .catch(
          error => {
            this.router.navigate(['login/' + error.message]);
            console.log(error);
          }
        );
    }
  }
  logout() {
    this.loggedIn.next(false);
    this.afAuth.auth.signOut();
    this.router.navigate(['/menus']);
  }
  // for signup method
  signup(username, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      .then(
        authState => {
          console.log("signup-then", authState);
          this.loggedIn.next(true);
          this.router.navigate(['/menus']);
        }
      )
      .catch(
        error => {
          var errorMessage = error.message;
          this.router.navigate(['menus/' + error.message]);
          console.log(error);
        }
      );
  }
  getCurrentUser() {
    return this.afAuth.authState.subscribe(authState => {
      if (authState) {
        this.loggedIn.next(true);
        this.router.navigate(['/'])
        console.log("Wel Come" + authState.email);
      }
      else {
        this.router.navigate(['signup']);
      }
    })
  }

}