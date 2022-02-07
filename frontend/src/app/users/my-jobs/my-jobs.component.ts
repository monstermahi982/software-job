import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {

  data: any = [];
  helper = new JwtHelperService();

  constructor(private user: UserService, private cookie: CookieService, private router: Router) { 
    if(cookie.check('company') === true){
      alert("you cannot able to access this page");
      router.navigate(['/', 'company']);
    }
  }

  token = "";
  tokenData: any = {};


  ngOnInit(): void {

    if(!this.cookie.get('token')){
      this.router.navigate(['/', 'user', 'login']);
      return; 
    }
    
    this.getUserApplication();
  }
  
  getUserApplication(){
    
    this.token = JSON.parse(this.cookie.get('token'));
    // console.log(this.token);
  
    this.tokenData =  this.helper.decodeToken(this.token);
    // console.log(this.tokenData.id);
    
    this.user.getData(this.tokenData.id).subscribe(data => {
      // console.log(data);
      this.data = data;
      // console.log(this.data);
      
    })

  }


  deleteApplication(id: string){
    console.log(id);
    this.user.deleteApplication(id).subscribe((data) => {
      console.log(data);
      this.getUserApplication();
    })
    
  }

}
