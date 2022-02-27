import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  getJobs(id: string){
    let url = `https://software-jobs.herokuapp.com/api/application/company/${id}`;
    return this.http.get(url);
  }

  getCompanyDetail(id: any){
    let url = `https://software-jobs.herokuapp.com/api/company/${id}`;
    return this.http.get(url);
  }

  companyLogin(data: any){
    let url = "https://software-jobs.herokuapp.com/api/company/login";
    return this.http.post(url, data);
  }

  companyRegister(data: any){
    let url = "https://software-jobs.herokuapp.com/api/company";
    return this.http.post(url, data);
  }

  addJob(data: any){
    let url = "https://software-jobs.herokuapp.com/api/jobs";
    return this.http.post(url, data);
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

  getCandidateByPost(id:string){
    let url = `https://software-jobs.herokuapp.com/api/application/job/${id}`;
    return this.http.get(url);
  }

  registerCompany(data: any){
    let url = `https://software-jobs.herokuapp.com/api/company`;
    return this.http.post(url, data);
  }

  deleteCompany(data: string){
    let url = `https://software-jobs.herokuapp.com/api/company${data}`;
    return this.http.delete(url);
  }

}
