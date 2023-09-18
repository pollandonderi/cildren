import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TaskComponent } from './components/task/task.component';
import { RateComponent } from './components/rate/rate.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ServicesofferedComponent } from './components/servicesoffered/servicesoffered.component';

const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"contact-us",
    component:ContactUsComponent
  },
  {
    path:"task",
    component:TaskComponent
  },
  {
    path:"rate",
    component:RateComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"mainpage",
    component:MainpageComponent
  },
  {
    path:"services",
    component:ServicesofferedComponent
  },
  {
    path:'**', pathMatch: 'full',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
