import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CompanyService } from '../../company.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  helper = new JwtHelperService();
  tokenData: any = {};

  constructor(private company:CompanyService, private router: Router, private cookie: CookieService) { 
    if(cookie.check('user') === true){
      alert("you cannot able to access this page");
      router.navigate(['/', 'user']);
    }
   }

  ngOnInit(): void {
  }

  regComp(data: any){
    console.log(data);
     this.company.registerCompany(data).subscribe((data) => {
       console.log(data);
       this.tokenData = this.helper.decodeToken(JSON.parse(JSON.stringify(data)));
      this.cookie.set('name', this.tokenData.name);
      this.cookie.set('token', JSON.stringify(data));
      this.cookie.set('company', 'true');
      this.router.navigate(['/', 'company']);
     })
  }



}
