import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import { CartComponent } from '../cart/cart.component';

import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { SersionService } from '../services/sersion.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  loginStatus:boolean;
  constructor(private matDialog: MatDialog, 
    public authService: AuthService,
    private cartService: CartService, private sersionService: SersionService) { }

  ngOnInit(): void {
    this.loginStatus = this.sersionService.getLoginStatus();
  }

  openCart(){
  	let matDialogRef = this.matDialog.open(CartComponent,{
  		width: '380px',
  		height: '600px;'
  	})
  }

  getTotalItems(){
    return this.cartService.getTotalItems();
  }

}
