import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

	phoneControl = new FormControl('', []);
  	otpControl = new FormControl('', []);
  	windowRef: any;
  	confirmationResult;
  	error;
	constructor(private authService: AuthService,
	 private angularFrAuth: AngularFireAuth, private router: Router,
	 private dialogRef: MatDialogRef<PhoneComponent> ) {
		
	}

	ngOnInit(): void {
	}

	sendOTP(){

		this.authService.logingWithPhone(this.phoneControl.value, 'recaptcha-container')
		.then(confirmationResult => {
    			this.confirmationResult = confirmationResult;
    	}).catch(error => {
    		this.error = error;
     
    	});
	}

	getErrorMessage(){
		return this.error.message;
	}

	verifyOTP(){

		this.authService.confirmOTP(this.otpControl.value, this.confirmationResult).then(userCredentials => {
  			this.authService.setLoginState(true);
  			this.dialogRef.close('');
  			this.router.navigateByUrl('')
  
		}).catch(error => {
			this.error = error;
		});
	}

	cancel(){
		this.router.navigateByUrl('');
	}
}
