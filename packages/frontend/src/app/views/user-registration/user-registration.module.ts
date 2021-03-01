import { NgModule } from '@angular/core';
import { UserRegistrationComponent } from './user-registration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRegistrationRoutingModule } from './user-registration.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterService } from './service/register.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    UserRegistrationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [RegisterService],
  declarations: [UserRegistrationComponent],
})
export class UserRegistrationModule {}
