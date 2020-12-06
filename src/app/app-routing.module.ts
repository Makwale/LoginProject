import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';

import { SerssionGuard } from './guards/serssion.guard';
import { SessionGuard } from './guards/session.guard';
 
const routes: Routes = [ {path: '', component: HomeComponent},
						 {path: 'login', component: LoginComponent, canActivate: [SerssionGuard],
							canDeactivate: [SessionGuard]},
						 {path: 'admin', component: AdminComponent},
						 {path: 'reg', component: RegisterComponent},
						 {path: 'phone', component: PhoneComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
