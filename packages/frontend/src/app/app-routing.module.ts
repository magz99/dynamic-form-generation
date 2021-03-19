import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { UserLoginModule } from './views/user-login/user-login.module';
import { UserRegistrationModule } from './views/user-registration/user-registration.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: (): Promise<UserLoginModule> =>
      import('./views/user-login/user-login.module').then(
        (m): UserLoginModule => m.UserLoginModule
      ),
  },
  {
    path: 'registration',
    loadChildren: (): Promise<UserRegistrationModule> =>
      import('./views/user-registration/user-registration.module').then(
        (m): UserRegistrationModule => m.UserRegistrationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: (): Promise<DashboardModule> =>
      import('./views/dashboard/dashboard.module').then(
        (m): DashboardModule => m.DashboardModule
      ),
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
