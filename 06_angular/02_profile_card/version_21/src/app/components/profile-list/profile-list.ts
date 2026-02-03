import {
  Component,
  EventEmitter,
  Output,
  ViewChildren,
  QueryList,
  input,
  signal,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { User } from '../../models/user';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-profile-list',
  standalone: true,
  imports: [MatCard, MatButton, MatInput, FormsModule, MatFormField],
  templateUrl: './profile-list.html',
  styleUrl: './profile-list.css'
})

export class ProfileListComponent {

  users = input<User[]>([]);
  selectedUser = signal<User | null>(null);

  @Output() statusChange = new EventEmitter<User>();

  @ViewChild(MatInput) inputs!: MatInput;
  @ViewChildren(MatButton) buttons!: QueryList<MatButton>;

  ngOnInit() {
    console.log('ProfileList ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ProfileList ngOnChanges', changes);
  }

  ngAfterViewInit() {
    console.log('Inputs:', this.inputs);
    console.log('Buttons:', this.buttons.length);
  }

  toggleStatus(user: User) {
    const next: 'active' | 'inactive' | 'blocked' =
      user.status === 'active'
        ? 'inactive'
        : user.status === 'inactive'
        ? 'blocked'
        : 'active';

    const updated = { ...user, status: next };
    this.statusChange.emit(updated);
  }
  
}

