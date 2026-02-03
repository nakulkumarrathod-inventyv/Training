import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { Data, Product } from '../../services/data';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, MatCard],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {
  items: Product[] = [];

  constructor(private data: Data) {}

  ngOnInit() {
    this.items = this.data.getProducts();
  }

  addToCart(id: number) {
    this.data.addToCart(id);
  }
}
