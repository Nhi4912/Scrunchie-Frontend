import { OrderManagementComponent } from './page/order-management/order-management.component';
import { ProductManagementComponent } from './page/product-management/product-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/product-management',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'product-management',
        component: ProductManagementComponent
      },
      {
        path: 'order-management',
        component: OrderManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
