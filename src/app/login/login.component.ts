import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

import { AuthService } from '../services/auth.service';
import { SersionService } from '../services/sersion.service';

import { PhoneComponent } from '../phone/phone.component';


class ErrorState implements ErrorStateMatcher{
	isErrorState(control : FormControl | null, form: FormGroupDirective | NgForm | null){

		return control.invalid;
	}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

	emailControl = new FormControl('', [Validators.required, Validators.email]);
  	passwordControl = new FormControl('', [Validators.required]);
  	emailError = new ErrorStateMatcher();
  	passwordError = new ErrorStateMatcher();
  	error;



	constructor(private authService: AuthService,
	 private router: Router
	 ,private matDialog: MatDialog, private sersionService: SersionService) {
		localStorage.setItem("keepAlive", 'true');
	  }

	ngOnInit(): void {
	}

	ngOnDestroy():void{
		
	}

	logingWithEmailAndPassword(){
		this.results(this.authService.logingWithEmailAndPassword(this.emailControl.value,
		this.passwordControl.value));
	}

	logingWithGoogle(){
		this.results(this.authService.logingWithGoogle());
	}

	logingWithFacebook(){
		this.results(this.authService.logingWithFacebook());
	}

	logingWithPhone(){
		let matDialogRef = this.matDialog.open(PhoneComponent,{
	  		width: '380px',
	  		height: '600px;'
  		})
	}

	getErrorMessage(){
		return this.error.message;
	}

	results(res){
		res.then(userCredential => {
			this.authService.setLoginState(true);
			this.sersionService.loginStatus(true);
			this.router.navigateByUrl('');
		}).catch(error =>{
			this.error = error;
		})
	}

}
