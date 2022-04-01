import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthServiceService } from "./auth-service.service";

describe("AuthServiceService", () => {
  let service: AuthServiceService;
  let el: DebugElement;
let routerSpy ={navigate:jasmine.createSpy('navigate')}
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientModule],
      providers: [AuthServiceService,
        {
        provide:Router, useValue : routerSpy
      }]
    
    });
    service = TestBed.inject(AuthServiceService);
    let store:{[key: string]: any} = {};
  const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
  spyOn(sessionStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
  spyOn(sessionStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
  spyOn(sessionStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
  spyOn(sessionStorage, 'clear')
    .and.callFake(mockLocalStorage.clear);
  });

  
    it('should create the services', () => {
      expect(service).toBeTruthy();
    });
    describe('setAccessToken', () => {
      it('should store the token in localStorage',
        () => {
          service.setToken('sometoken');
          expect(sessionStorage.getItem('token')).toEqual('sometoken');
          console.log(sessionStorage.getItem('token'));
        });
    });
    describe('getAccessToken', () => {
      it('should return stored token from sessionStorage',
        () => {
          sessionStorage.setItem('token', 'anothertoken');
          console.log(sessionStorage.getItem('token'));
          expect(service.getToken()).toEqual('anothertoken');
          console.log(sessionStorage.getItem('token'));
        });
    });

    describe('islogin', () => {
      it('login page',
        () => {
          sessionStorage.setItem('token', 'anothertoken');
          service.isLogedIn();
          expect(sessionStorage.getItem('token')).not.toEqual(null);
      });
    });
    describe('logout', () => {
      it('should return to login page',
        () => {
          sessionStorage.removeItem('token');
          console.log(sessionStorage.getItem('token'));
          service.logout();
          expect(routerSpy.navigate).toHaveBeenCalledWith(['login']);
      });
    });
    
 
});
