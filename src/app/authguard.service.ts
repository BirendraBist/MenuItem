
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate()
    : Observable<boolean> {
    return this.loginService.isLoggedIn
      .pipe(take(1),
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            this.router.navigate(['/menus']);
           return true;
          } 
          if(this.loginService.isLoggedIn){
          return true;
        }
        })

      )
  }
}


// async canActivate(): Promise<boolean> {
//   const logedinuser= await this.loginService.getCurrentUser();
//   const authenticated = !!logedinuser;
//   if(authenticated){
//     this.router.navigate(['/login'])
//   }return authenticated; 
    