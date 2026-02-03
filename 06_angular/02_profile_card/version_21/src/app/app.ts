import { Component, computed, inject } from '@angular/core';
import { ProfileListComponent } from './components/profile-list/profile-list';
import { ProfileService } from './services/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private profileService = inject(ProfileService);

  title = 'Profile App';

  users = this.profileService.users;

  onStatusChange(user: any) {
    console.log(user);
    this.profileService.updateUser(user);
  }
}

