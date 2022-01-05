
import { GuardGuard } from './guard/guard.guard';
import { AuthServiceService } from './services/auth-service.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
  { path: '**', component: PageNotFoundComponent },
  

];

@NgModule({
  imports: [ FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
