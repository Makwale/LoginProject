import { Component, OnInit } from '@angular/core';
import { formatDate, getLocaleId } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';
import {MatSnackBar} from '@angular/material/snack-bar';

import { DatabaseService } from '../services/database.service';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { SersionService } from '../services/sersion.service';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	private listProducts = [];

  private listCosmetics = [];
  
  private listMakeups = [];

  isloading = true;
  
  constructor( private databaseService: DatabaseService, 
    private cartService: CartService, 
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private sersionService: SersionService) { }

  ngOnInit(): void {
   
        this.getProducts()
  }


  public getListProducts(){
    return this.listProducts;
  }

  public getListCosmetics(){
    return this.listCosmetics;
  }

  public getListMakeups(){
    return this.listMakeups;
  }

  private setListProducts(doc): void{
    this.listProducts.push(doc);
  }

  private setListCosmetics(doc): void{
    this.listCosmetics.push(doc);
  }

  private setListMakeups(doc): void{
    this.listMakeups.push(doc);
  }

  getProducts(): void{
    this.databaseService.getProducts().subscribe(docuChangeActions =>{
      for(let docuChangeAction of docuChangeActions){
        let id = docuChangeAction.payload.doc.id;
        let data = docuChangeAction.payload.doc.data();
        let doc = new Document(id, data);
        this.setListProducts(doc);

        if(data["category"] == "Cosmetic"){
          this.setListCosmetics(doc);
        }else if(data["category"] == "Makeup"){
          this.setListMakeups(doc);
        } 
      }

      this.isloading = false;

    })
  }

// this is the mothod you have to pay attention on
// i passed the product as argument
// check on the component constructor, i created sersionService object
// that object is the one will be used to add product to the cart
  addToCart(product){
    if(this.sersionService.getLoginStatus()){
      // Here i test if the product is already added to the cart
      // i use the equal method that is declared on the CartService
      // the equal method accepts product as parameter and return boolean
      // if the product is already added then the method returns true and the product cannot be add twice
      // if is false the we get inside the if statement
      if(!this.cartService.equal(product)){
        // we asume the product doesnt exist in the cart
        // so we add our product by calling the addItemToList
        // addItemToList is a method declared in CartService
        this.cartService.addItemToList(product);
      }else{
      
      }
    }
    else{
      this.matSnackBar.open("Login to initiate shopping","", {
        duration: 4000,
        verticalPosition: 'top'
      })
    }
    
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
