import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CartListComponent, ItemListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
