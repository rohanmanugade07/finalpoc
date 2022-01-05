import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(data: { email: string; password: string; locale: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
