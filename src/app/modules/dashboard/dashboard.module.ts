import { DashboardRoutingModule } from './dashboard.routing';
import { OrderManagementComponent } from './page/order-management/order-management.component';
import { ProductManagementComponent } from './page/product-management/product-management.component';
import { ErrorHandler, NgModule } from '@angular/core';


import { MaterialModule } from '../../../app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandlerService } from 'src/app/core/service/global-error-handler.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { SocialLoginConfig } from 'src/app/configs/social-login.config';

@NgModule({
  declarations: [ProductManagementComponent, OrderManagementComponent],

  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, DashboardRoutingModule, MaterialModule, MatFormFieldModule
  ],
  providers: [
    SocialLoginConfig,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
})
export class DashboardModule { }
