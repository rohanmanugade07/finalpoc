import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { UerListService } from "src/app/services/uer-list.service";
import { AdminRoutingModule } from "../../admin-routing.module";
import { AdminModule } from "../../admin.module";
import { UserDetailsComponent } from "./user-details.component";

describe('UserDetailsComponent', () => {

    let fixture: ComponentFixture<UserDetailsComponent>;
    let component: UserDetailsComponent;
    let el: DebugElement;
    let uerListService: any;
    const serviceMock = {
      "data":{
         "id":1,
         "email":"george.bluth@reqres.in",
         "first_name":"George",
         "last_name":"Bluth",
         "avatar":"https://reqres.in/img/faces/1-image.jpg"
      },
      "support":{
         "url":"https://reqres.in/#support-heading",
         "text":"To keep ReqRes free, contributions towards server costs are appreciated!"
      }
    }
    beforeEach(waitForAsync(() => {

        const uerListServiceSpy = jasmine.createSpyObj('UerListService', ['getUserDetails']);

        TestBed.configureTestingModule({
            imports: [
                AdminModule
            ],
            providers: [
                { provide: UerListService, useValue: uerListServiceSpy },
                { provide: ActivatedRoute, useValue: { params: of({id: serviceMock.data.id}) }}
            ]
        })
        // Get rid of app's Router configuration otherwise many failures.
        // Doing so removes Router declarations; add the Router stubs
        .overrideModule(AdminModule, {
            remove: {imports: [AdminRoutingModule]},
        })
        .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(UserDetailsComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
                uerListService = TestBed.inject(UerListService);
                
                // common setup
                uerListService.getUserDetails.and.returnValue(of(serviceMock));
                fixture.detectChanges();
            })
    }));

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should get the Id from Route params', fakeAsync(() => {
        // setup
        component.getParams();
        flush();

        // assertions
        expect(component.userId).toBe(1);
    }));

    it('should have User Name as \'George\'', fakeAsync(() => {
        // setup
        component.getUserDetailById();
        flush();

        // assertions
        expect(component.userData.first_name).toBe(serviceMock.data.first_name);
    }));

    it('should display User First Name', fakeAsync(() => {
        // setup
        component.getUserDetailById();
        flush();

        // execution
        const firstName = el.queryAll(By.css('.lable-align:first-of-type p'));
        console.log(firstName);
        // assertions
        expect(firstName.length).toBe(1);
        expect(firstName[0].nativeElement.textContent).toBe(serviceMock.data.first_name);
    }));
    

   
});