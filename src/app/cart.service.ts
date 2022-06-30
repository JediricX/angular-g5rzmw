import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class CartService {

  items = [];
  constructor( 
    private httpClient : HttpClient) 
    { }

  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearItems(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    this.httpClient.get('/assets/shipping.json');
  }

}