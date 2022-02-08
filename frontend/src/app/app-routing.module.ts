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
import {JobcandidateComponent} from './company/jobcandidate/jobcandidate.component';
import { DasboardComponent as AdminDasboardComponent } from './admin/dasboard/dasboard.component';
import { CompanyComponent as AdminCompanyComponent} from './admin/company/company.component';
import { UsersComponent as AdminUsersComponent } from './admin/users/users.component';
import { JobsComponent as AdminJobsComponent } from './admin/jobs/jobs.component';


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
    path:"company/post/:id",
    component:JobcandidateComponent
  },
  {
    path:'admin',
    children: [
      {
        path:"",
        component: AdminDasboardComponent
      },
      {
        path: "company",
        component: AdminCompanyComponent
      },
      {
        path: "users",
        component: AdminUsersComponent
      },
      {
        path: "jobs",
        component: AdminJobsComponent
      }
    ]
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
