import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


class ErrorState implements ErrorStateMatcher{
	isErrorState(control : FormControl | null, form: FormGroupDirective | NgForm | null){

		return control.invalid;
	}
}



import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	emailControl = new FormControl('', [Validators.required, Validators.email]);
  	passwordControl = new FormControl('', [Validators.required]);
  	emailError = new ErrorStateMatcher();
  	passwordError = new ErrorStateMatcher();
  	error;

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	logingWithEmailAndPassword(){
		this.authService.logingWithEmailAndPassword(this.emailControl.value,
		this.passwordControl.value).then(userCredential => {
			this.router.navigateByUrl('home');
		}).catch(error => {
			this.error = error;
		})
		
	}

	logingWithGoogle(){
		this.authService.logingWithGoogle().then(userCredential => {
			this.router.navigateByUrl('home');
		}).catch(error => {
			this.error = error;
		});
	}

	logingWithFacebook(){
		this.authService.logingWithFacebook().then(userCredential => {
			this.router.navigateByUrl('home');
		}).catch(error => {
			this.error = error;
		});

	}

	logingWithPhone(){
		this.router.navigateByUrl('phone');
	}

	getErrorMessage(){
		return this.error.message;
	}

}
