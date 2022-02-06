import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../company.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRoute, Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-jobcandidate',
  templateUrl: './jobcandidate.component.html',
  styleUrls: ['./jobcandidate.component.css']
})
export class JobcandidateComponent implements OnInit {
  id: any = "";
  data: any = {};
  constructor(private company: CompanyService, private router: Router, private cookie: CookieService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');

    this.company.getCandidateByPost(this.id).subscribe((data) => {
      
       this.data = data;
       console.log(this.data, "sese");
    })

  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
