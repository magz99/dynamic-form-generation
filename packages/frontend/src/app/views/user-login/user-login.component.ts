import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  loginError = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      console.error('the form is not valid');
    } else {
      console.log('The form is valid');
      this.loginService
        .login(
          this.loginForm.controls.username.value,
          this.loginForm.controls.password.value
        )
        .subscribe(
          (result) => {
            console.log('TODO: NAVIGATE TO HOMEPAGE');
            this.router.navigate(['/dashboard']);
          },
          (err) => {
            console.log('onLoginSubmit() caught error: ', err);
            this.loginError = true;
          }
        );
    }
  }
}
