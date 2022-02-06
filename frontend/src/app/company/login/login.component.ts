import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CompanyService} from '../../company.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  helper = new JwtHelperService();
  tokenData: any = {};

  constructor(private company: CompanyService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getLoginData(data: any){
    console.log(data);
    this.company.companyLogin(data).subscribe((data) => {
      console.log(data);
      this.tokenData = this.helper.decodeToken(JSON.parse(JSON.stringify(data)));
      this.cookie.set('name', this.tokenData.name);
      this.cookie.set('token', JSON.stringify(data));
      this.router.navigate(['/', 'company']);
      
    }) 
  }

}
