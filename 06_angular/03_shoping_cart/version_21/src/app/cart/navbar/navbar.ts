import { Component } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(public data: Data) {}

  toggleLogin() {
    this.data.toggleLogin();
  }
}
