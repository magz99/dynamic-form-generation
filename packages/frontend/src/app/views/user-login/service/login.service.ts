import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EmptyError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginPayload } from 'src/app/models/login';

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
        catchError((err: HttpErrorResponse) => {
          throw err;
        })
      );
  }
}
