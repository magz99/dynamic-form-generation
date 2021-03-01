import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/models/user';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {
  registrationError = false;
  registrationSuccess = false;

  registrationForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  });

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  onRegisterSubmit(): void {
    const user: UserDto = {
      firstName: this.registrationForm.controls.firstname.value,
      lastName: this.registrationForm.controls.lastname.value,
      email: this.registrationForm.controls.email.value,
      username: this.registrationForm.controls.username.value,
      password: this.registrationForm.controls.password.value,
    };
    // Create the new user
    this.registerService.registerUser(user).subscribe(
      (result) => {
        this.registrationSuccess = true;

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      (err) => {
        this.registrationError = true;
      }
    );
  }
}
