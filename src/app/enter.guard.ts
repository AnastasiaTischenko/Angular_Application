import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';

@Injectable()
export class EnterGuard implements CanActivate {
  constructor(public auth: AuthorizationService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.auth.isAuthorized()) {
      return true;
    };
    this.router.navigate(['/home']);
    return false;
  }
}
