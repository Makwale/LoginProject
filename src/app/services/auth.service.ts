import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, 
		 AngularFirestoreCollection,
	 	 AngularFirestoreDocument } from '@angular/fire/firestore';

import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

	windowRef;
	constructor(private angularFrAuth: AngularFireAuth) { }

	async logingWithEmailAndPassword(email, password){
		return this.angularFrAuth.signInWithEmailAndPassword ( email, password);
	}

	async logingWithGoogle(){
		return this.angularFrAuth.signInWithPopup(new auth.GoogleAuthProvider());
	}

	async logingWithFacebook(){
		/*const provider = ;*/
		return this.angularFrAuth.signInWithPopup(new auth.FacebookAuthProvider());
	}

	getWindowRef(){
		return window;
	}

	async logingWithPhone(phoneNumber, recaptchaContainer){
		auth().languageCode = 'eng';
		this.windowRef = this.getWindowRef();

		this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier(recaptchaContainer, {
			'size': 'normal',
			callback: (response) =>{

			}

		});

		this.windowRef.recaptchaVerifier.render();

		return this.angularFrAuth.signInWithPhoneNumber(phoneNumber, this.windowRef.recaptchaVerifier);
	}

	confirmOTP(otp, confirmationResult){
		return confirmationResult.confirm(otp);
	}
		

		
    		/*.then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      		// let window.confirmationResult = confirmationResult;
      		console.log(confirmationResult);
    	}).catch(function (error) {
     
    	});*/
}
