import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './maincomponents/home/home.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './user/cart/cart.component';
import { CategoryComponent } from './user/category/category.component';
import { ProductComponent } from './user/product/product.component';
import { PageNotFoundComponent } from './maincomponents/page-not-found/page-not-found.component';
import { AboutComponent } from './user/about/about.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'user',component:UserComponent,children:[
    {path:'cart',component:CartComponent},
    {path:'category',component:CategoryComponent},
    {path:'Product',component:ProductComponent},
    {path:'about_us',component:AboutComponent}

  ]}
// ,
// {path:'admin',component:AdminComponent

// }
,

  {path:"Auth",loadChildren:()=>import("src/app/modules/registeration/registeration.module")
.then(m=>m.RegisterationModule)}
// ,

 , {path:"Admin",loadChildren:()=>import("src/app/modules/admin/admin.module")
.then(m=>m.AdminModule)}

,{path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
