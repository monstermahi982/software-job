import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CompanyService} from '../../company.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  token = "";
  tokenData: any = {};
  helper = new JwtHelperService();

  constructor(private company: CompanyService, private router: Router, private cookie: CookieService) { 
    if(cookie.check('company') === false){
      alert("you cannot able to access this page");
      router.navigate(['/', 'user']);
    }
   }

  ngOnInit(): void {
  }

  addJobPost(jobData: any){
    
    this.token = JSON.parse(this.cookie.get('token'));
    // console.log(this.token);
  
    this.tokenData =  this.helper.decodeToken(this.token);

    const job = {
      ...jobData, company_id: this.tokenData.id
    }
    console.log(job);
    this.company.addJob(job).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/', 'company', 'posts']);
      
    })
    
  }


}
