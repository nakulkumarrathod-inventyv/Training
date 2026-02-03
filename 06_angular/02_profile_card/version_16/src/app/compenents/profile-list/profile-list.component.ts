import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent {
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
    console.log('Input:', this.nameInput);
    console.log('Buttons count:', this.buttons.length);
  }

  toggleStatus(user: User) {
    const next =
      user.status === 'active'
        ? 'inactive'
        : user.status === 'inactive'
        ? 'blocked'
        : 'active';

    user.status = next;
    this.statusChange.emit(user);
  }
}
