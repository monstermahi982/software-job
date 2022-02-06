import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../company.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  jobs: any = [];
  token = "";
  tokenData: any = {};
  helper = new JwtHelperService();

  constructor(private company: CompanyService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.getCompanyJob();
  }

  getCompanyJob(){
    this.token = JSON.parse(this.cookie.get('token'));
    // console.log(this.token);
  
    this.tokenData =  this.helper.decodeToken(this.token);

    this.company.getJobs(this.tokenData.id).subscribe(data => {
          console.log(data);
          this.jobs = data;
      })
  }

  deleteJOb(id: string){
    console.log(id);
    this.company.deleteJob(id).subscribe((data)=>{
      console.log(data);
      this.getCompanyJob();
    })
    
  }

  blockJob(id: string){
    console.log(id);
    this.company.blockJob(id).subscribe((data)=>{
      console.log(data);
      this.getCompanyJob();
    })
  }

  unblockjob(id: string){
    console.log(id);
    this.company.unblockJob(id).subscribe((data)=>{
      console.log(data);
      this.getCompanyJob();
    })
  }

  getPostCand(id: string){
    console.log(id);
    this.router.navigate(['/', 'company', 'post', id]);
    
  }

}
