import { ErrorHandler, NgModule } from '@angular/core';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

import { AuthRoutingModule } from './auth.routing';
import { MaterialModule } from '../../../app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandlerService } from 'src/app/core/service/global-error-handler.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { SocialLoginModule } from 'angularx-social-login';
import { SocialLoginConfig } from 'src/app/configs/social-login.config';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],

  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, AuthRoutingModule, MaterialModule, MatFormFieldModule
  ],
  providers: [
    SocialLoginConfig,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
})
export class AuthModule { }
