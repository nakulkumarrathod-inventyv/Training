import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  accessToken: string|null = null;
  profile:any = null;

  login(){
    return this.http.post<any>(
      'https://dummyjson.com/auth/login',
      {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30
      },
    ).subscribe(res => {
      this.accessToken = res.accessToken;
    })
  }

  getProfile(){
    return this.http.get<any>('https://dummyjson.com/auth/me')
    .subscribe(profile => this.profile = profile)
  }

}
