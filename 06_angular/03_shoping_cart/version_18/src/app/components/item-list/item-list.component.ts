import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService, Product } from '../../services/data.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items: Product[] = []
  constructor(private data: DataService){}

  ngOnInit(){
    this.items = this.data.getProducts();
  }

  addToCart(id: number){
    this.data.addToCart(id);
  }
}
