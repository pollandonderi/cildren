import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    DashComponent
  ],
  exports: [
    DashComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DashboardModule { }
