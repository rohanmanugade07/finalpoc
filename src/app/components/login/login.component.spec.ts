/* import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async,ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";
//import { SocialAuthServiceConfig, SocialLoginModule } from "angularx-social-login";
import { AdminModule } from "src/app/modules/admin/admin.module";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { LoginComponent } from "./login.component";

describe('LoginComponent', ()=>{

    let component : LoginComponent;
    let fixture : ComponentFixture<LoginComponent>;

   beforeEach(async (() => {
       TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,HttpClientModule,BrowserDynamicTestingModule,SocialLoginModule,AdminModule],
        declarations : [ LoginComponent ],
        providers : [AuthServiceService]
       }).compileComponents();
   }));

   beforeEach(()=>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   });

   it('should create',()=>{
       expect(component).toBeTruthy();
   })

}); */