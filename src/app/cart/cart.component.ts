import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // Propiedad.
  items = this.cartService.getItems();
  
  // Formulario.
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  
  // Constructor.
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('La orden se procesó de forma sastifactoria.', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
