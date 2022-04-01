import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { PRODUCTS } from "src/app/Mock/product";
import { UerListService } from "src/app/services/uer-list.service";
//import { RouterLinkDirectiveStub } from "src/app/test-utilities/router-link-directive-stub";
//import { RouterOutletStubComponent } from "src/app/test-utilities/router-outlet-stub-component";
//import { click } from "src/app/test-utilities/test-utils";
import { AdminRoutingModule } from "../../admin-routing.module";
import { AdminModule } from "../../admin.module";
import { SingleProductViewComponent } from "./single-product-view.component";

describe('SingleProductViewComponent', () => {

    let fixture: ComponentFixture<SingleProductViewComponent>;
    let component: SingleProductViewComponent;
    let el: DebugElement;
    let uerListService: any;

    beforeEach(waitForAsync(() => {

        const uerListServiceSpy = jasmine.createSpyObj('UerListService', ['getSingleProductDetails']);

        TestBed.configureTestingModule({
            imports: [
                AdminModule
            ],
            providers: [
                { provide: UerListService, useValue: uerListServiceSpy },
                { provide: ActivatedRoute, useValue: { params: of({id: PRODUCTS[0].id}) }}
            ]
        })
        // Get rid of app's Router configuration otherwise many failures.
        // Doing so removes Router declarations; add the Router stubs
        .overrideModule(AdminModule, {
            remove: {imports: [AdminRoutingModule]},
            //add: {declarations: [RouterLinkDirectiveStub, RouterOutletStubComponent]}
        })
        .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(SingleProductViewComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
                uerListService = TestBed.inject(UerListService);
                
                // common setup
                uerListService.getSingleProductDetails.and.returnValue(of(PRODUCTS[0]));
                fixture.detectChanges();
            })
    }));

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});