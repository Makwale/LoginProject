import { Component, OnInit } from '@angular/core';


import { DatabaseService } from '../services/database.service';
import { CartService } from '../services/cart.service';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  	listItems = [];
  	totalItems:number = 0;
	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.getProducts()
		
	}

	getProducts(){
		this.listItems = this.cartService.getItemList();
		this.totalItems = this.cartService.getTotalItems();
	}
	deleteItem(item){
		this.cartService.deleteItem(item.id);
		
	}

	getTotalPrice(){
		return this.cartService.getTotalPrice()
	}

	increasingQnty(item){
		this.cartService.increasingQnty(item.id);
	}

	decreasingQnty(item){
		if(item.quantity > 1)
			this.cartService.decreasingQnty(item.id);
	}

}


