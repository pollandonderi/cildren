import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Auth0RoutingModule } from './auth0-routing.module';
import { Auth0Component } from './auth0.component';
import { Login0Component } from './login0/login0.component';
import { Register0Component } from './register0/register0.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Auth0Component,
    Login0Component,
    Register0Component
  ],
  exports: [
Login0Component,
Register0Component
  ],
  imports: [
    CommonModule,
    Auth0RoutingModule,
    ReactiveFormsModule,
  ]
})
export class Auth0Module { }
