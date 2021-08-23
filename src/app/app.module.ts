import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from '../app/modules/auth/auth.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TouchedErrorStateMatcher } from './modules/auth/page/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AuthModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: TouchedErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
