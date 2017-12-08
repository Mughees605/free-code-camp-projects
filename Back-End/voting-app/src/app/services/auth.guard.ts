import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class LogininRouteGuard implements CanActivate {

  constructor(public auth: AuthService, public router:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!localStorage.getItem('user')){
        this.router.navigate(['/login']);
        return false;
    }
    else{
        return true;
    }
  }
}
