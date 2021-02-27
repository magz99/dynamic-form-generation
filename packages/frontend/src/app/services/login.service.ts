import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginPayload } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginPayload> {
    console.log('Login service -> login() called!');
    return this.http
      .post<LoginPayload>('http://localhost:3000/auth/login', {
        username,
        password,
      })
      .pipe(
        catchError((err) => {
          console.log('magz LoginService -> login error');
          throw err;
        })
      );
  }
}
