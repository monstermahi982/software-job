import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  data: any = [];
  dataLength: number = 0;

  constructor(private jobs: JobService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    
    this.jobs.getJobLength().subscribe((data: any) => {
      console.log(data);
      this.dataLength = data;
      
    })

    this.jobs.getAllPosts(1).subscribe(data => {
      this.data = data;
      console.log(data);
      
    })

  }

  jobApply(data: any){
    console.log(data._id);
    const token = this.cookie.check('token');
    console.log(token);
    
    if(!token){
      alert("please login first");
      this.router.navigate(['/', 'user', 'login']);
      return;
    }
    
    const company = this.cookie.check('company');
    const user = this.cookie.check('user');
    if(company || !user){
      alert("you cannot apply");
      return;
    }

      this.jobs.applyJob(data).subscribe((data) => {

        if(data === "already applied"){
          return alert("already applied");
        }

      console.log(data);
      alert("job applied");

    })
  }

  pageEvent(data: any){
    console.log(data);
    this.jobs.getAllPosts(data.pageIndex + 1).subscribe(data => {
      this.data = data;
      console.log(data);
      // this.dataLength = Object.keys(data).length;
      
    })
    
  }



}
