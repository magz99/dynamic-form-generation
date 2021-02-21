import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  constructor() {}

  onLoginSubmit(): void {
    // console.log('username and pw: %s %s', this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    if (this.loginForm.invalid) {
      console.error('the form is not valid');
    } else {
      console.log('The form is valid');
    }
  }
}
