import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { patch } from '@nebular/theme';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/logout/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SingupComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: '**',
        redirectTo: 'login'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
