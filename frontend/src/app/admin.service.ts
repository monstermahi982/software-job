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

  deleteUser(id: string){
    let url = `http://localhost:5000/api/user/${id}`;
    return this.http.delete(url);
  }

  blockUser(id: string){
    let url = `http://localhost:5000/api/user/block/${id}`;
    return this.http.put(url, {});
  }

  unblockUser(id: string){
    let url = `http://localhost:5000/api/user/unblock/${id}`;
    return this.http.put(url, {});
  }

  
  getAllcompany(){
    let url = "http://localhost:5000/api/company";
    return this.http.get(url);
  }

  deleteCompany(id: string){
    let url = `http://localhost:5000/api/company/${id}`;
    return this.http.delete(url);
  }

  blockCompany(id: string){
    let url = `http://localhost:5000/api/company/block/${id}`;
    return this.http.put(url, {});
  }

  unblockCompany(id: string){
    let url = `http://localhost:5000/api/company/unblock/${id}`;
    return this.http.put(url, {});
  }

  getAllJobs(){
    let url = "http://localhost:5000/api/jobs";
    return this.http.get(url);
  }

  deleteJob(id: string){
    let url = `http://localhost:5000/api/jobs/${id}`;
    return this.http.delete(url);
  }

  blockJob(id: string){
    let url = `http://localhost:5000/api/jobs/block/${id}`;
    return this.http.put(url, {});
  }

  unblockJob(id: string){
    let url = `http://localhost:5000/api/jobs/unblock/${id}`;
    return this.http.put(url, {});
  }

}
