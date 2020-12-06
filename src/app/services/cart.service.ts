import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import { SersionService } from './sersion.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // This is the list to store the items/products
	itemsList = [];
  // this member variable is use to keep total number of items
	private totalItems:number = 0;

  // this member variable is used to keep the total price
	private totalPrice:number; 

  constructor(private matSnackBar: MatSnackBar,
    private sersionService: SersionService) { 

    this.itemsList = this.itemsList.length > 0 ? 
    this.itemsList : this.sersionService.getDataFromLocalStorage() || [];
    this.totalPrice = Number(this.sersionService.getTotalPrice());

  }

  getItemList(){ return this.itemsList != null ? 
    this.itemsList : this.sersionService.getDataFromLocalStorage();}

// This is the method we call in home component to add product
// So you pay attention here
  addItemToList(product){ 
    // now you add product by calling the push method on the itemList array
    
	  	this.itemsList.push(new Item(product.id,1, product.data, product.data.price));
	  	this.setTotalPrice(product.data.price);
      this.sersionService.saveData(this.getItemList(), this.getTotalPrice());
  }

  getTotalItems(){ return this.getItemList() != null ? this.getItemList().length : 0}

  setTotalPrice(unitPrice) { this.totalPrice  = this.totalPrice + Number(unitPrice);}

  getTotalPrice(){ return this.totalPrice;}

  deleteItem(id){
  		let index = 0;
  		for(let item of this.getItemList()){
  			if(item.id == id){
  				this.totalPrice = this.totalPrice - item.totalPrice;
  				this.itemsList.splice(index,1);
          this.sersionService.saveData(this.getItemList(), this.getTotalPrice());
  				this.matSnackBar.open("Item deleted","",{
  					duration: 3000,
  					verticalPosition: 'top'
  				});
  				break;
  			}

  			index = index + 1;
  		}
  		
  }

	equal(item){
		for(let product of this.itemsList){
			if(product.id == item.id){
				return true;
			}
		}
		return false;
	}

	increasingQnty(id){

		for(let item of this.getItemList()){
  			if(item.id == id){
  				item.quantity = item.quantity + 1 
  				item.totalPrice = Number(item.totalPrice) + Number(item.product.price);
  				this.totalPrice = Number(this.totalPrice) + Number(item.product.price);
          this.sersionService.saveData(this.getItemList(), this.getTotalPrice());
  				break;
  			}
  		}
	}

	decreasingQnty(id){
		for(let item of this.getItemList()){
  			if(item.id == id){
  				item.quantity = item.quantity - 1 
  				item.totalPrice = Number(item.totalPrice) - Number(item.product.price);
  				this.totalPrice = Number(this.totalPrice) - Number(item.product.price);
          this.sersionService.saveData(this.getItemList(), this.getTotalPrice());
  				break;
  			}
  		}
	}

}

class Item{
	id;
	quantity:number;
	product;
	totalPrice:number;
	constructor(id,quantity, product, price){
		this.id = id;
		this.quantity = quantity;
		this.product = product;
		this.totalPrice = price;
	}
}
