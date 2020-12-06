import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { AngularFirestore, 
		 AngularFirestoreCollection,
	 	 AngularFirestoreDocument } from '@angular/fire/firestore';

import { DatabaseAdminService } from '../services/database-admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
	listProducts = [];
	prodNameControl = new FormControl('');
	prodPriceControl = new FormControl('');
  prodCatControl = new FormControl('');

  constructor(private databaseAdminService: DatabaseAdminService,
   private angularFirestore: AngularFirestore) { }

  ngOnInit(): void {
  	this.listProducts = this.getProducts();
  }


  
  addProduct(event){
  	this.databaseAdminService.addProduct(this.prodNameControl.value,
  		this.prodPriceControl.value, this.prodCatControl.value, event.target.files[0]);
  }

  getProducts(){
  	let listProducts = [];
  	this.databaseAdminService.getProducts().subscribe(docuChangeActions =>{
  		let list = []
  		for(let docuChangeAction of docuChangeActions){
	  		let id = docuChangeAction.payload.doc.id;
	  		let data = docuChangeAction.payload.doc.data();
	  		let doc = new Document(id, data);
	  		list.push(doc);
  		}

  		listProducts = list;
  	})

  	return listProducts;
  }


}

class Document{
	id;
	data;
	constructor(id, data){
		this.id = id;
		this.data = data;
	}
}
