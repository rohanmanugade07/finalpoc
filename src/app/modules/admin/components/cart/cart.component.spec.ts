import {  HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
//import { UerListService } from 'src/app/services/uer-list.service';
import {CartComponent} from './cart.component'


describe('CartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientModule
      ],
      declarations: [
        CartComponent
      ],
    }).compileComponents();
  });

  it('should create Cart Components', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.grandTotal).toBeDefined();
  });
  it('should empty cart', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const app = fixture.componentInstance;
  //   spyOn(app,'emptycart');
  //   fixture.detectChanges();
  //  let btn = fixture.debugElement.nativeElement('emptyCart');
  //  btn.eventHandler('click',null);
  //  expect(app.emptycart).toHaveBeenCalled();
   app.emptycart();
  });

});
