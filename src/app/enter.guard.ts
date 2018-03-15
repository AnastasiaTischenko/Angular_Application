import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class EnterGuard implements CanActivate {
  constructor(public auth: AuthorizationService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.checkLogin();
    // Observable.of(1)
    //   .map(() => {
    //     console.log(this.auth.isAuthorized())
    //     if (this.auth.isAuthorized()) {
    //       // this.router.navigate(['/joke-list'], {replaceUrl: true});
    //
    //       return true;
    //     }
    //     return false;
    //     // throw new Error();
    //   })
    // .catch(() => {
    //   this.router.navigate(['/home']);
    //   return Observable.of(false);
    // });n();
  }

  checkLogin(): boolean {
    console.log(this.auth.isAuthorized())
    if (this.auth.isAuthorized()) {

      return true;
    };
    this.router.navigate(['/home']);
    return false;
  }
}
