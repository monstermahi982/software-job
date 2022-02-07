import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../company.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  companyDeatil: any = {};
  data: any = [];
  helper = new JwtHelperService();
  token = "";
  tokenData: any = {};

  constructor( private company: CompanyService, private cookie: CookieService, private router: Router ) {

    if(!this.cookie.get('token')){
      this.router.navigate(['/', 'company', 'login']);
      return; 
    }

    if(cookie.check('user') === true){
      alert("you cannot able to access this page");
      router.navigate(['/', 'user']);
    }

    this.token = JSON.parse(this.cookie.get('token'));
    // console.log(this.token);
  
    this.tokenData =  this.helper.decodeToken(this.token);
    // console.log(this.tokenData.id);

      company.getCompanyDetail(this.tokenData.id).subscribe(data => {
        this.companyDeatil = data;
        console.log(this.companyDeatil);
        
      })
   }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];


}
