import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    let url = "https://software-jobs.herokuapp.com/api/user";
    return this.http.get(url);
  }

  deleteUser(id: string){
    let url = `https://software-jobs.herokuapp.com/api/user/${id}`;
    return this.http.delete(url);
  }

  blockUser(id: string){
    let url = `https://software-jobs.herokuapp.com/api/user/block/${id}`;
    return this.http.put(url, {});
  }

  unblockUser(id: string){
    let url = `https://software-jobs.herokuapp.com/api/user/unblock/${id}`;
    return this.http.put(url, {});
  }

  
  getAllcompany(){
    let url = "https://software-jobs.herokuapp.com/api/company";
    return this.http.get(url);
  }

  deleteCompany(id: string){
    let url = `https://software-jobs.herokuapp.com/api/company/${id}`;
    return this.http.delete(url);
  }

  blockCompany(id: string){
    let url = `https://software-jobs.herokuapp.com/api/company/block/${id}`;
    return this.http.put(url, {});
  }

  unblockCompany(id: string){
    let url = `https://software-jobs.herokuapp.com/api/company/unblock/${id}`;
    return this.http.put(url, {});
  }

  getAllJobs(){
    let url = "https://software-jobs.herokuapp.com/api/jobs";
    return this.http.get(url);
  }

  deleteJob(id: string){
    let url = `https://software-jobs.herokuapp.com/api/jobs/${id}`;
    return this.http.delete(url);
  }

  blockJob(id: string){
    let url = `https://software-jobs.herokuapp.com/api/jobs/block/${id}`;
    return this.http.put(url, {});
  }

  unblockJob(id: string){
    let url = `https://software-jobs.herokuapp.com/api/jobs/unblock/${id}`;
    return this.http.put(url, {});
  }

}
