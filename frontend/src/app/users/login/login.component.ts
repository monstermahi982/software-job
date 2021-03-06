import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../../user.service';
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

  constructor(private user:UserService, private router: Router, private cookie: CookieService) {
    if(cookie.check('company') === true){
      alert("you cannot able to access this page");
      router.navigate(['/', 'company']);
    }
   }

  ngOnInit(): void {

    if(this.cookie.get('token')){
      this.router.navigate(['/', 'user']);
      return; 
    }

  }

  getLoginData(data: any){
    console.log(data);
    this.user.userLogin(data).subscribe((data) => {
      console.log(data);

      if(data === "email not found"){
        return alert("Email not Found");
      }

      if(data === "password not matched"){
        return alert("Passowrd Not Matched");
      }

      if(data === "blocked" ){
        console.log(data);
        return alert("Your Account is Blocked By ADMIN");
      }


      this.tokenData = this.helper.decodeToken(JSON.parse(JSON.stringify(data)));
      this.cookie.set('name', this.tokenData.name);
      this.cookie.set('token', JSON.stringify(data));
      this.cookie.set('user', 'true');
      this.router.navigate(['/', 'user']);
      
    }) 
  }

}
