import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(
    username: string,
    password: string
  ): Observable<{ username: string; password: string }> {
    console.log('Login service -> login() called');
    return this.http.post<{ username: string; password: string }>(
      'http://localhost:3000/auth/login',
      {
        username,
        password,
      }
    );
  }
}
