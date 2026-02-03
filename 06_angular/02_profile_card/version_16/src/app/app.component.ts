import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { ProfileService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Profile App';
  profileData: User[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileData = this.profileService
      .getData()
      .map(user => ({
        ...user,
        status: user.status as 'active' | 'inactive' | 'blocked',
      }));
  }

  onStatusChange(user: User) {
    console.log('Status changed:', user);
  }
}
