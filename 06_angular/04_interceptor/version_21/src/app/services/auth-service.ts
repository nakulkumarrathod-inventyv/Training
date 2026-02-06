import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpClient);
  accessToken = signal<string | null>(null);
  profile = signal<any>(null);

  login(){
    return this.http.post<any>( 
     'https://dummyjson.com/auth/login',
     {
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30
     }
    ).pipe(tap(res => {
      this.accessToken.set(res.accessToken);
    }))
  }

  getProfile(){
    return this.http.get<any>('https://dummyjson.com/auth/me')
    .pipe(tap(profile => {
      this.profile.set(profile)
  }));
  }
}

