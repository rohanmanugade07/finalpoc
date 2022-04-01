import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { NavigationBarComponent } from "./navigation-bar.component";

describe('NavigationBarComponent',()=>{
    let component : NavigationBarComponent;
    let fixture : ComponentFixture<NavigationBarComponent>;
    let service : any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports:[
                RouterTestingModule,
                HttpClientModule
                
            ],
            declarations:[NavigationBarComponent],
            providers:[AuthServiceService]
        }).compileComponents();
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(NavigationBarComponent);
        component  = fixture.componentInstance;
        service = fixture.debugElement.injector.get(AuthServiceService);
        fixture.detectChanges();
    });

    it('should create navigation Components',()=>{
        expect(component).toBeTruthy();
    });

    it('should call logout method',()=>{
        spyOn(service,'logout');
        component.logoutUser();
        fixture.detectChanges();
        expect(service.logout).toHaveBeenCalled();
    })

});