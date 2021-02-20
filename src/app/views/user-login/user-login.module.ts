import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user-login.component';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, UserLoginRoutingModule],
  declarations: [UserLoginComponent],
})
export class UserLoginModule {}
