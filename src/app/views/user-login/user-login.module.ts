import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user-login.component';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    SharedModule,
    UserLoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [UserLoginComponent],
})
export class UserLoginModule {}
