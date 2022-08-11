import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AdminsComponent } from './admins/admins.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
const routes:Routes=[
  {path:"",component:AdminComponent,children:[
    {path:'admins',component:AdminsComponent},
    {path:'customers',component:CustomersComponent},
    {path:'orders',component:OrdersComponent},
    {path:'products',component:ProductsComponent},
  ]
}
]


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AdminsComponent,
    ProductsComponent,
    CustomersComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
