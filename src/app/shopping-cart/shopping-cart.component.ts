import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[] = [
    {
      id: 1,
      imageUrl: 'headphones.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      id: 2,
      imageUrl: 'keyboard.jpg',
      name: 'Teclado',
      price: 14.5,
    },
    {
      id: 3,
      imageUrl: 'monitor.jpg',
      name: 'Monitor',
      price: 199.99,
    },
  ];

  get total(): number {
    return this.cartItems.reduce((acc, {price}) => (acc += price), 0);
  }

  constructor() { }

  ngOnInit(): void {}

  deleteItem(itemToDelete: CartItem): void {
    this.cartItems = this.cartItems.filter((item) => item !== itemToDelete);
  }

  // directivas *ngfor
  addNewElement(): void {
    this.cartItems.push({id: 4,
      imageUrl: 'keyboard.jpg',
      name: 'Nuevo',
      price: 199.99,})
  }

  reverseList(): void {
    this.cartItems.reverse();
  }

  reloadFromServer(): void {
    this.cartItems = this.createFakeItemsResponse();
  }

  createFakeItemsResponse(): CartItem[] {
    return [
      {
        id: 1,
        imageUrl: 'headphones.jpg',
        name: 'Auriculares Negros',
        price: 50,
      },
      {
        id: 2,
        imageUrl: 'keyboard.jpg',
        name: 'Teclado',
        price: 29.90,
      },
      {
        id: 3,
        imageUrl: 'monitor.jpg',
        name: 'Monitor',
        price: 199.99,
      },
    ]
  }

  trackByItemId(index: number, item: CartItem): number {
    return item.id;
  }

}
