import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbToastrModule } from '@nebular/theme';
import { NebularModule } from 'src/app/nebular/nebular.module';
import { LogoutComponent } from './components/logout/logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    ForgotPasswordComponent,
    LogoutComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NebularModule
  ]
})
export class AuthModule { }
