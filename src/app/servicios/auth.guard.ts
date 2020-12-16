import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ExternalCallServiceService } from './external-call-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: ExternalCallServiceService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.logueado()) {
      return true;
    }

    this.router.navigate(['Cliente/Login']);
    return false;
  }

}
