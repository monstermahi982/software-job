import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  data: any = [];

  constructor(private jobs: JobService) { }

  ngOnInit(): void {
    
    this.jobs.getAllPosts().subscribe(data => {
      this.data = data;
      console.log(data);
      
    })

  }

  jobApply(data: any){
    console.log(data._id);
    this.jobs.applyJob(data).subscribe((data) => {
      console.log(data);
      
    })
  }



}
