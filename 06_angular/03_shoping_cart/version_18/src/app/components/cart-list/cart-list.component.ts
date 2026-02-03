import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  constructor(public data: DataService){}

  increase(id: number){
    this.data.increase(id);
  }

  decrease(id: number){
    this.data.decrease(id);
  }

  remove(id: number){
    this.data.remove(id);
  }
}
