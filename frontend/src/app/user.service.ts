import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getData(id: string){
    console.log(id);
    
    let url = `https://software-jobs.herokuapp.com/api/application/user/${id}`;
    return this.http.get(url);
  }

  userLogin(data: any){
    let url = "https://software-jobs.herokuapp.com/api/user/login";
    return this.http.post(url, data);
  }

  userReg(data: any){
    let url = "https://software-jobs.herokuapp.com/api/user/";
    return this.http.post(url, data);
  }

  deleteApplication(id: string){
    let url = `https://software-jobs.herokuapp.com/api/application/${id}`;
    return this.http.delete(url);
  }

}
