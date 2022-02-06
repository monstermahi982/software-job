import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getData(id: string){
    console.log(id);
    
    let url = `http://localhost:5000/api/application/user/${id}`;
    return this.http.get(url);
  }

  userLogin(data: any){
    let url = "http://localhost:5000/api/user/login";
    return this.http.post(url, data);
  }

  userReg(data: any){
    let url = "http://localhost:5000/api/user/";
    return this.http.post(url, data);
  }

  deleteApplication(id: string){
    let url = `http://localhost:5000/api/application/${id}`;
    return this.http.delete(url);
  }

}
