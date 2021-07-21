import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/utils/validators/password-match.directive';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.registerForm.controls.confirmPassword.setValidators([
      Validators.required,
      passwordMatchValidator(this.registerForm.controls.password),
    ]);
  }

  onRegisterSubmit(): void {
    if (this.registerForm.invalid) {
      console.error('the register form is not valid');
    } else {
      console.log('The register form is valid');
    }
  }
}
