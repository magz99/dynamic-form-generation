import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, share, tap } from 'rxjs/operators';
import { LoginResponse } from 'src/app/models/login';
import { SERVER_URL } from '../urls';
import { isBefore } from 'date-fns';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    console.log('Login service -> login() called!');
    return this.http
      .post<LoginResponse>(`${SERVER_URL}auth/login`, {
        username,
        password,
      })
      .pipe(
        tap((res) => this.setSession(res)),
        catchError((err: HttpErrorResponse) => {
          throw err;
        }),
        share()
      );
  }

  private setSession(authResult: LoginResponse): void {
    localStorage.setItem('id_token', authResult.access_token);
    localStorage.setItem('expires_at', authResult.expires_in);
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn(): boolean {
    return isBefore(new Date(), this.getExpiration());
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): Date {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = expiration
      ? new Date(parseInt(expiration, 10))
      : new Date();
    return expiresAt;
  }
}
