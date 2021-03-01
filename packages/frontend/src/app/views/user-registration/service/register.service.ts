import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RegisterResponse } from 'src/app/models/register';
import { UserDto } from 'src/app/models/user';
import { SERVER_URL } from 'src/app/shared/urls';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser(user: UserDto): Observable<RegisterResponse> {
    console.log('Register service -> registerUser() called!');
    return this.http
      .post<RegisterResponse>(`${SERVER_URL}users/create`, {
        ...user,
      })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err;
        })
      );
  }
}
