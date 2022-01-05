import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { environment } from 'src/environments/environment';
import { setEmitFlags } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private router:Router, private httpClient:HttpClient) { }

  setToken(token: string): void {
    sessionStorage.setItem('token',token);
  }

  getToken(): string | null{
    return sessionStorage.getItem('token');
  }

  isLogedIn() {
    return this.getToken()!==null;
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  
  public baseUrl= environment.baseUrl;

 
  login(url:any,body: any){
    return this.httpClient.post<any>( this.baseUrl + url , body);
  }
}
