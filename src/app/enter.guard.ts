import {CanActivate, Router} from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EnterGuard implements CanActivate {
  constructor(public auth: AuthorizationService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthorized()) {
      this.router.navigate(['home']);
      alert('Please enter correct data')
      return false;
    }
    return true;
  }
}
