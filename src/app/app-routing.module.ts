import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TaskComponent } from './components/task/task.component';
import { RateComponent } from './components/rate/rate.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ServicesofferedComponent } from './components/servicesoffered/servicesoffered.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { DashComponent } from './modules/dashboard/dash/dash.component';

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
    path:"mainpage",
    component:MainpageComponent
  },
  {
    path:"services",
    component:ServicesofferedComponent
  },
  {
    path:"dash",
    component:DashComponent
  },
  { path: 'auth0', loadChildren: () => import('./modules/auth0/auth0.module').then(m => m.Auth0Module) },
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
