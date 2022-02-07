import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  data: any = [];

  constructor(private jobs: JobService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    
    this.jobs.getAllPosts().subscribe(data => {
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
      console.log(data);
      alert("job applied");

    })
  }



}
