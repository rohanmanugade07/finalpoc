import { CartComponent } from './components/cart/cart.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { SingleProductViewComponent } from './components/single-product-view/single-product-view.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  
  {
    path: '',
    component: AdminDashboardComponent, canActivate:[AuthGuard],
    
    children: [
      {
        path: '',
        component: UserManagerComponent,
      },
      {
        path: 'user-details/:id',
        component: UserDetailsComponent,
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'user-manager',
        component: UserManagerComponent,
      },
      {
        path: '',
        component: UserManagerComponent,
      },
      {
        path: 'product-detail/:id',
        component: SingleProductViewComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
