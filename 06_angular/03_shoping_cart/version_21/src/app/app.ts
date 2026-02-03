import { Component, signal } from '@angular/core';
import { Data } from './services/data';
import { ItemList } from './cart/item-list/item-list';
import { Navbar } from './cart/navbar/navbar';
import { CartList } from './cart/cart-list/cart-list';

@Component({
  selector: 'app-root',
  imports: [ItemList, Navbar, CartList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
