import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    let url = "http://localhost:5000/api/user";
    return this.http.get(url);
  }
  
  getAllcompany(){
    let url = "http://localhost:5000/api/company";
    return this.http.get(url);
  }

  getAllJobs(){
    let url = "http://localhost:5000/api/jobs";
    return this.http.get(url);
  }

}
