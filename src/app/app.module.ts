import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AuthService } from './services/auth.service';
import { DatabaseAdminService } from './services/database-admin.service';
import { DatabaseService } from './services/database.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneComponent } from './phone/phone.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { PreloadComponent } from './preload/preload.component';



const firebaseConfig = {
    apiKey: "AIzaSyB7y1Q1POyU2xNoJWj-pTpJ6n8JlpyTJ0E",
    authDomain: "codetribe-a61b7.firebaseapp.com",
    databaseURL: "https://codetribe-a61b7.firebaseio.com",
    projectId: "codetribe-a61b7",
    storageBucket: "codetribe-a61b7.appspot.com",
    messagingSenderId: "227838660442",
    appId: "1:227838660442:web:ba9d409dfbef338a8aad63",
    measurementId: "G-H5XGL86XQN"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PhoneComponent,
    HomeComponent,
    AdminComponent,
    NavigationComponent,
    CartComponent,
    RegisterComponent,
    PreloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule
  ],

   entryComponents: [
    CartComponent
  ],
  providers: [ AuthService, DatabaseAdminService, DatabaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
