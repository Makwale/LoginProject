import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SersionService {


  constructor() { }

  public saveData(data,totprice): void{
  	localStorage.setItem("cart", JSON.stringify(data))
  	localStorage.setItem("totprice", String(totprice));

  }

  public getDataFromLocalStorage(){
  	return JSON.parse(localStorage.getItem("cart"));
  }

  getTotalPrice(){
  	return localStorage.getItem("totprice");
  }

  loginStatus(log){
    localStorage.setItem("isLogedIn", log);
  }

  getLoginStatus(){ 
    return JSON.parse(localStorage.getItem("isLogedIn"));
  }
}
