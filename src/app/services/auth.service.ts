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
		return this.angularFrAuth.signInWithPopup(new auth.FacebookAuthProvider());
	}

	getWindowRef(){
		return window;
	}

	async logingWithPhone(phoneNumber, recaptchaContainer){
		auth().languageCode = 'eng';
		this.windowRef = this.getWindowRef();

		this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier(recaptchaContainer, {
			'size': 'normal'
		});

		this.windowRef.recaptchaVerifier.render();

		return this.angularFrAuth.signInWithPhoneNumber(phoneNumber, this.windowRef.recaptchaVerifier);
	}

	confirmOTP(otp, confirmationResult){
		return confirmationResult.confirm(otp);
	}
		

}
