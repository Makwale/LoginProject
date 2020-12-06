import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	formControlFName = new FormControl('');
	formControlLName = new FormControl('');
	formControlPhone = new FormControl('');
	formControlEmail = new FormControl('');
	formControlPassword = new FormControl('');
	formControlCPassword = new FormControl('');
	isAccountCreated = false;

  constructor( private authService: AuthService, private databaseService: DatabaseService) { }

  ngOnInit(): void {
  }

  
  register(){
  	this.results(this.authService.
  		creatUserWithEmailAndPassword(
  			this.formControlEmail.value,
		this.formControlCPassword.value));
  }

  	results(res){
		res.then(userCredential => {
			this.creatAccount(userCredential.user.uid);
			this.isAccountCreated = true;
		}).catch(error =>{
			window.alert(error.message);
		})
	}

	creatAccount(uid){
		this.databaseService.creatUserAccount(uid,
		 this.formControlFName.value, this.formControlLName.value,
		 this.formControlPhone.value)
	}

}
