
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class LogoutResolver implements Resolve<any> {
  constructor(private _authenticationService: AuthenticationService) {}

  resolve() {
    if (localStorage.getItem('currentUser')) {
      this._authenticationService.logout();
    }
  }
}
