import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginModule } from './views/user-login/user-login.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: (): Promise<UserLoginModule> =>
      import('./views/user-login/user-login.module').then(
        (m): UserLoginModule => m.UserLoginModule
      ),
  },
  {
    path: '**',
    redirectTo: '/login',
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
