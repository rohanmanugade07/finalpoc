import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { AuthServiceService } from './services/auth-service.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
    let auth: AuthServiceService;
    let routeMock: any = {
      snapshot: {},
  };
    let routerStateMock: any = {
      snapshot: {},
      url: 'admin'
  };
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    const authMock = jasmine.createSpyObj('AuthenticationService', ['isLogedIn']);

    
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthGuard,
          { provide: Router, useValue: routerMock },
      ]
  });
    guard = TestBed.inject(AuthGuard);
    auth = TestBed.inject(AuthServiceService);
  });
  it('should be createable', () => expect(guard).toBeTruthy());
  it('should return true for canActivate()', () => {
    spyOn(auth,'isLogedIn').and.returnValue(true);
    // authMock.isLogedIn =true;
    const result = guard.canActivate(routeMock,routerStateMock);
     expect(result).toBe(true);
  });
  it('should return false for canActivate() when user is not login', ()=> {
   authMock.isLoggedIn= false;
    const result = guard.canActivate(routeMock,routerStateMock);
    expect(result).toBe(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['login'])
    


});

});
// 