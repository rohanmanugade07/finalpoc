import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BehaviorSubject, of } from "rxjs";
import { PRODUCTS } from "src/app/Mock/product";

import { CartService } from "src/app/services/cart.service";
import { UerListService } from "src/app/services/uer-list.service";
import { RouterLinkDirectiveStub } from "src/app/test-utilities/router-link-directive-stub";
import { RouterOutletStubComponent } from "src/app/test-utilities/router-outlet-stub-component";
import { click } from "src/app/test-utilities/test-utils";
import { AdminRoutingModule } from "../../admin-routing.module";
import { AdminModule } from "../../admin.module";
import { ProductComponent } from "./product.component";

describe('ProductComponent', () => {

    let fixture: ComponentFixture<ProductComponent>;
    let component: ProductComponent;
    let el: DebugElement;
    let uerListService: any;
    let cartListService: any;

    beforeEach(waitForAsync(() => {

        const uerListServiceSpy = jasmine.createSpyObj('UerListService', ['getProductList']);
        const cartServiceSpy = jasmine.createSpyObj('CartService', ['getProducts', 'addtoCart']);

        TestBed.configureTestingModule({
            imports: [
                AdminModule
            ],
            providers: [
                { provide: UerListService, useValue: uerListServiceSpy },
                { provide: CartService, useValue: cartServiceSpy }
            ]
        })
    
        .overrideModule(AdminModule, {
            remove: {imports: [AdminRoutingModule]},
            add: {declarations: [RouterLinkDirectiveStub, RouterOutletStubComponent]}
        })
        .compileComponents()
            .then(() => {
                
                uerListService = TestBed.inject(UerListService);
                cartListService = TestBed.inject(CartService);
                uerListService.getProductList.and.returnValue(of(PRODUCTS));
                cartListService.getProducts.and.returnValue(of(PRODUCTS));
                cartListService.search = of('');

                fixture = TestBed.createComponent(ProductComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
                fixture.detectChanges();
            })
    }));

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display 4 products initially', () => {
        const products = el.queryAll(By.css('.card'));
        expect(products.length).toBe(4);
    });

    it('should change the number of products displayed on change of pageSize', () => {
        let products = el.queryAll(By.css('.card'));
        expect(products.length).toBe(4);
        component.pageSize = 6;
        fixture.detectChanges();
        products = el.queryAll(By.css('.card'));
        expect(products.length).toBe(6);
    });

    it('should change the products displayed on change of page', () => {
        component.page = 2;
        fixture.detectChanges();
        const productTitle = el.queryAll(By.css('.card:first-of-type h6'));
        expect(productTitle.length).toBeGreaterThan(0);
        expect(productTitle[0].nativeElement.textContent).toContain(PRODUCTS[4].title);
    });

    it('should change the number of products displayed on searchKey applied', () => {
        let products = el.queryAll(By.css('.card'));
        expect(products.length).toBe(4);
        component.searchKey = 'slim';
        fixture.detectChanges();
        products = el.queryAll(By.css('.card'));
        expect(products.length).toBe(2);
    });

    it('should display first product\'s title correctly', () => {
        const productTitle1 = el.queryAll(By.css('.inner-container:first-of-type h6'));
        expect(productTitle1.length).toBe(1);
        expect(productTitle1[0].nativeElement.textContent).toContain(PRODUCTS[0].title);
    });

    it('should navigate to single-product view of product on clicking the image of product', () => {
        const firstProductCard = el.queryAll(By.css('.inner-container:first-of-type > .card > img'));
        expect(firstProductCard.length).toBe(1);
        const firstUserRouterLink = firstProductCard[0].injector.get(RouterLinkDirectiveStub);
        expect(firstUserRouterLink.navigatedTo).toBeNull();
        click(firstProductCard[0]);
        fixture.detectChanges();
        expect(firstUserRouterLink.navigatedTo).toEqual([ '/admin/product-detail', PRODUCTS[0].id ]);
    });


    it('should add the product into the cart after click on Add to Cart', () => {
        const addToCartButton = el.queryAll(By.css('.inner-container:first-of-type .btn.btn-primary'));
        expect(addToCartButton.length).toBe(1);
        let addtoCartSpy = spyOn(component, 'addtoCart').and.callThrough();
        expect(addtoCartSpy).not.toHaveBeenCalled();
        click(addToCartButton[0]);
        fixture.detectChanges();
        expect(addtoCartSpy).toHaveBeenCalled();
    });
});