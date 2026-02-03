import { Injectable, signal } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private readonly _users = signal<User[]>([
    {
      username: 'john_doe',
      age: 24,
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      status: 'active',
    },
    {
      username: 'emma_watson',
      age: 28,
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      status: 'inactive',
    },
    {
      username: 'alex_kumar',
      age: 22,
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      status: 'active',
    },
    {
      username: 'sophia_lee',
      age: 26,
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      status: 'active',
    },
    {
      username: 'michael_smith',
      age: 31,
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      status: 'blocked',
    },
    {
      username: 'olivia_brown',
      age: 23,
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
      status: 'active',
    },
    {
      username: 'rahul_verma',
      age: 27,
      imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
      status: 'inactive',
    },
    {
      username: 'isabella_martin',
      age: 29,
      imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
      status: 'active',
    },
    {
      username: 'daniel_clark',
      age: 34,
      imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
      status: 'blocked',
    },
    {
      username: 'priya_sharma',
      age: 25,
      imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
      status: 'active',
    },
    {
      username: 'kevin_jones',
      age: 30,
      imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
      status: 'inactive',
    },
    {
      username: 'mia_wilson',
      age: 21,
      imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
      status: 'active',
    },
  ]);

  users = this._users.asReadonly();

  updateUser(updated: User) {
    this._users.update(users =>
      users.map(u => u.username === updated.username ? updated : u)
    );
  }
}




