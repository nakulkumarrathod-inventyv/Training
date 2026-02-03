import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './services/profile.service';
import { ProfileList } from './components/profile-list/profile-list.component';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'Profile App'
  profileData: User[] = [];

  constructor(private profileService: Profile) {}

  ngOnInit(): void {
    this.profileData = this.profileService.getData().map(user => ({...user, status: user.status as 'active' | 'inactive' | 'blocked'}));
  }

  onStatusChange(user: User){
    console.log('Status changed:', user);
  }
}
