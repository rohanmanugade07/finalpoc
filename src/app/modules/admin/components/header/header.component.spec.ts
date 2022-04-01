import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { PRODUCTS } from "src/app/Mock/product";
import { CartService } from "src/app/services/cart.service";
import { HeaderComponent } from "./header.component";


describe('HeaderComponent',()=>{
    let component : HeaderComponent;
    let fixture : ComponentFixture<HeaderComponent>;
    let service : CartService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports:[
                FormsModule,
                RouterTestingModule
            ],
            declarations:[HeaderComponent],
            providers:[CartService]
        }).compileComponents();
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(HeaderComponent);
        component  = fixture.componentInstance;
        service = fixture.debugElement.injector.get(CartService);
        fixture.detectChanges();
    });

    it('should create header Components',()=>{
        expect(component).toBeTruthy();
    });

    it('should subscribe method call',fakeAsync(()=>{
        let userSpy = spyOn(service,'getProducts').and.returnValue(of(PRODUCTS));
        let subSpy= spyOn(service.getProducts(),'subscribe');
        component.ngOnInit();
        tick();
        expect(userSpy).toHaveBeenCalledBefore(subSpy);
        expect(subSpy).toHaveBeenCalled();
    }));

  
  it('should call search method',()=>{
        spyOn(component,'search');
        component.search('');
        expect(component.search).toHaveBeenCalled();
    });

});