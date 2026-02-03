import {
  Component,
  EventEmitter,
  Input,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile-list',
  standalone: true,
  imports: [MatCard, MatButton, MatInput, FormsModule, MatFormField],
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css',
})
export class ProfileList {
  @Input() data: User[] = [];
  @Output() statusChange = new EventEmitter<User>();

  @ViewChild('nameInput') nameInput?: MatInput;
  @ViewChildren(MatButton) buttons!: QueryList<MatButton>;

  ngOnInit() {
    console.log('ProfileList ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ProfileList ngOnChanges', changes);
  }

  ngAfterViewInit() {
    console.log('input: ', this.nameInput)
    console.log('Buttons count:', this.buttons.length);
  }

  toggleStatus(user: User) {
    const next = user.status === 'active' ? 'inactive' : user.status === 'inactive' ? 'blocked' : 'active';
    user.status = next;
    this.statusChange.emit(user);
  }


}