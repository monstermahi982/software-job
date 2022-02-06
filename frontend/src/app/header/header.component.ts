import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string = "";
  is_logged: boolean = false;
  token: string = "";

  constructor(private cookie: CookieService, private router:Router) { }

  ngOnInit(): void {
    // console.log( "---------------------");
    
    // this.token = this.cookie.get('token');
    // if(this.token !== ""){
    //   console.log("token is there");
      
    // }else{
    //   console.log("no");
      
    // }

  }

  loggedin(){
    this.userName = this.cookie.get('name');
    return this.cookie.get('token');
  }

  logout(){
    console.log("-----------");
    
    this.cookie.deleteAll();
    this.router.navigate(['/']);
  }

}
