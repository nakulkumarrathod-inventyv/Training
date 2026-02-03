import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { Data } from '../../services/data';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, MatCard],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.css'
})
export class CartList {
  constructor(public data: Data) {}

  increase(id: number) {
    this.data.increase(id);
  }

  decrease(id: number) {
    this.data.decrease(id);
  }

  remove(id: number) {
    this.data.remove(id);
  }
}
