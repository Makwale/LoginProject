import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneComponent } from './phone/phone.component';
import { HomeComponent } from './home/home.component';



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
    HomeComponent
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
    AngularFireAuthModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
