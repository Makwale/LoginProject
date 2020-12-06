import { Injectable } from '@angular/core';
import { AngularFirestore, 
		 AngularFirestoreCollection,
	 	 AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage';



import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseAdminService {

  constructor(private angularFirestore: AngularFirestore, 
  	private angularFireStorage: AngularFireStorage) { }

  addProduct(productName, productPrice,productCategory, imgfile){
    let imgUrl:string;
  	let path = new Date().getFullYear().toString() 
  		+ (new Date().getMonth() + 1).toString() + 
  		 new Date().getDate().toString() +
  		  new Date().getTime().toString();

  	let ref = this.angularFireStorage.ref("Product/" + path);
  	let task = ref.put(imgfile);

  	task.snapshotChanges().pipe( finalize( () => {
  		ref.getDownloadURL().subscribe(url =>{
        imgUrl = url;

        this.angularFirestore.collection('Product').add({
          name: productName,
          price: productPrice,
          category: productCategory,
          url: imgUrl
        }).then(() => {
          alert("Product added");
          })
        });
  	})).subscribe()	
  }

  getProducts(){
    return this.angularFirestore.collection('Product').snapshotChanges();
  }
}
