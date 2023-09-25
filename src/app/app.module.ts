import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RateComponent } from './components/rate/rate.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
// import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NewsComponent } from './components/news/news.component';
import { EntertainmentPackageComponent } from './components/entertainment-package/entertainment-package.component';
import { DiagonalsComponent } from './components/diagonals/diagonals.component';
import { ServicesofferedComponent } from './components/servicesoffered/servicesoffered.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    BlogComponent,
    ContactUsComponent,
    TaskComponent,
    RateComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    GalleryComponent,
    NewsComponent,
    EntertainmentPackageComponent,
    DiagonalsComponent,
    ServicesofferedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  
  ],
  providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: true, //keeps the user signed in
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider('702010291826-pf77khhjvqcfmkaa906pgkqddq5eeu1h.apps.googleusercontent.com') // your client id
    //       }
    //     ]
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
