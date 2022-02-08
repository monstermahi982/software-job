import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: any = []
  constructor(private admin: AdminService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {

    this.admin.getAllJobs().subscribe(data => {
      console.log(data);
      this.jobs = data;
      
    })

  }

}
