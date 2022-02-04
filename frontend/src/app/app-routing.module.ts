import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent as UserLoginComponent} from './users/login/login.component'
import {RegisterComponent as UserRegisterComponent} from './users/register/register.component'
import {MyJobsComponent} from './users/my-jobs/my-jobs.component'
import {RegisterComponent as companyRegisterComponent} from './company/register/register.component';
import {LoginComponent as companyLoginComponent} from './company/login/login.component';
import {PostsComponent} from './company/posts/posts.component';
import {AddPostComponent} from './company/add-post/add-post.component';
import { DashboardComponent as CompanyDashboardComponent } from './company/dashboard/dashboard.component';
import {JobsComponent} from './jobs/jobs.component';


const routes: Routes = [
  {
    path: "user/login",
    component: UserLoginComponent
  },
  {
    path:"user/register",
    component:UserRegisterComponent
  },
  {
    path:"user",
    component:MyJobsComponent
  },
  {
    path:"company",
    component:CompanyDashboardComponent
  },
  {
    path:"company/login",
    component:companyLoginComponent
  },
  {
    path:"company/register",
    component:companyRegisterComponent
  },
  {
    path:"company/posts",
    component:PostsComponent
  },
  {
    path:"company/add-post",
    component:AddPostComponent
  },
  {
    path:"",
    component: JobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
