import { Injectable } from '@angular/core';
import { AngularFirestore, 
		 AngularFirestoreCollection,
	 	 AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private angularFirestore: AngularFirestore) { }

  getProducts(){
    
    return this.angularFirestore.collection('Product').snapshotChanges();
  }

  creatUserAccount(uid, fname, lname, phone){
  	this.angularFirestore.collection('Customer').doc(uid).set({
  		firstName: fname,
  		lastName: lname,
  		phone: phone
  	}).then(()=>{
  		window.alert("Accout created");
  	}).catch(errer=>{
  		window.alert(errer.message)
  	})
  }
}
