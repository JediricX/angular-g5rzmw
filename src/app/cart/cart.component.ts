import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  
  constructor(
    private cartService : CartService,
    private formBuilder : FormBuilder,
    private router : Router
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    console.warn('Pedido creado', customerData);
    this.router.navigate(['home']);
  }

}