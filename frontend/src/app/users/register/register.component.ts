import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  helper = new JwtHelperService();
  tokenData: any = {};

  constructor(private user:UserService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {

    if(this.cookie.get('token')){
      this.router.navigate(['/', 'user']);
      return; 
    }

  }

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getRegData(data: any){
    console.log(data);
    this.user.userReg(data).subscribe((data) => {
      console.log(data);
      this.tokenData = this.helper.decodeToken(JSON.parse(JSON.stringify(data)));
      this.cookie.set('name', this.tokenData.name);
      this.cookie.set('token', JSON.stringify(data));
      this.router.navigate(['/', 'user']);
      
    })
  }

}
