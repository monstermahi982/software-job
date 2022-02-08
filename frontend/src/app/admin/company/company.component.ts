import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {AdminService} from '../../admin.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private admin: AdminService, private cookie: CookieService, private router: Router) { }
  company: any = [];
  ngOnInit(): void {

      this.getCompany();

  }

  getCompany(){
    this.admin.getAllcompany().subscribe(data => {
      console.log(data);
      this.company = data;
      
    })
  }

  delete(id: string){
    console.log(id);
    
    this.admin.deleteCompany(id).subscribe((data) => {
      console.log(data);
      this.getCompany();
    })
  }

  block(id: string){
    console.log(id);
    this.admin.blockCompany(id).subscribe((data) => {
      console.log(data);
      this.getCompany();
    })
  }

  unblock(id: string){
    console.log(id);
    this.admin.unblockCompany(id).subscribe((data) => {
      console.log(data);
      this.getCompany();
    })
  }

}
