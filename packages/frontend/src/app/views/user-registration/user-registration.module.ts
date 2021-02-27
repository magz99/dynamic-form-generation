import { NgModule } from '@angular/core';
import { UserRegistrationComponent } from './user-registration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRegistrationRoutingModule } from './user-registration.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    SharedModule,
    UserRegistrationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [UserRegistrationComponent],
})
export class UserRegistrationModule {}
