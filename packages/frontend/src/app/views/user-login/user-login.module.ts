import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user-login.component';
import { UserLoginRoutingModule } from './user-login.routing';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    SharedModule,
    UserLoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  declarations: [UserLoginComponent],
})
export class UserLoginModule {}
