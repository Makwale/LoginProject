import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [{path: '', component: LoginComponent},
						{path: 'phone', component: PhoneComponent},
						 {path: 'home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
