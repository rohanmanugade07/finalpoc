import { AuthServiceService } from './../services/auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard{
  constructor(private auth: AuthServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean{
      if(!this.auth.isLogedIn()){
        this.router.navigate(['login']);
        return false;
      }
      return this.auth.isLogedIn();
  }
 
  
}
