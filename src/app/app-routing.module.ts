import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TaskComponent } from './components/task/task.component';
import { RateComponent } from './components/rate/rate.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
