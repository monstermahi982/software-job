import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {AdminService} from '../../admin.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(private admin: AdminService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
  
    this.admin.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
      
    })

  }

}
