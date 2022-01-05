import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductComponent } from './components/product/product.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SingleProductViewComponent } from './components/single-product-view/single-product-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
 import { FilterPipe } from 'src/app/shared/filter.pipe';
// import { AgmCoreModule } from '@agm/core';
// import { ImgMagnifier } from 'ng-img-magnifier';
// import { NgxImgZoomModule } from 'ngx-img-zoom';
// import { NgxImageZoomModule } from 'ngx-image-zoom';
// third party module

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserManagerComponent,
    ProductComponent,
    NavigationBarComponent,
    AdminDashboardComponent,
    AddUserComponent,
    SingleProductViewComponent,
    HeaderComponent,
    CartComponent,
      FilterPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    DialogModule,
    ButtonModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBTsjJOBTgmbmkTFLR6PwFM_nDrkYG7lcw'
    // })
    // NgxImgZoomModule
    // NgxImageZoomModule,
    // ImgMagnifier
  ],
})
export class AdminModule {}
