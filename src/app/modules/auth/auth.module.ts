import { NgModule } from '@angular/core';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

import { AuthRoutingModule } from './auth.routing';
import { MaterialModule } from '../../../app/material.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [AuthRoutingModule, MaterialModule]
})
export class AuthModule { }
