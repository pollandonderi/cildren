import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0Component } from './auth0.component';
import { Register0Component } from './register0/register0.component';
import { Login0Component } from './login0/login0.component';

const routes: Routes = [
  { 
    path: '', 
    component: Auth0Component 
  },
  {
    path:"login",
    component:Login0Component
  },
  {
    path:"register",
    component:Register0Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Auth0RoutingModule { }
