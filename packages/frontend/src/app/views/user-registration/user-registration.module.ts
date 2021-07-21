import { NgModule } from '@angular/core';
import { UserRegistrationComponent } from './user-registration.component';
import { UserRegistrationRoutingModule } from './user-registration.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    UserRegistrationRoutingModule,
  ],
  declarations: [UserRegistrationComponent],
})
export class UserRegistrationModule {}
