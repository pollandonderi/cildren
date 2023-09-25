import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
