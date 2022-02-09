import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  getJobs(id: string){
    let url = `http://localhost:5000/api/application/company/${id}`;
    return this.http.get(url);
  }

  getCompanyDetail(id: any){
    let url = `http://localhost:5000/api/company/${id}`;
    return this.http.get(url);
  }

  companyLogin(data: any){
    let url = "http://localhost:5000/api/company/login";
    return this.http.post(url, data);
  }

  companyRegister(data: any){
    let url = "http://localhost:5000/api/company";
    return this.http.post(url, data);
  }

  addJob(data: any){
    let url = "http://localhost:5000/api/jobs";
    return this.http.post(url, data);
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

  getCandidateByPost(id:string){
    let url = `http://localhost:5000/api/application/job/${id}`;
    return this.http.get(url);
  }

  registerCompany(data: any){
    let url = `http://localhost:5000/api/company`;
    return this.http.post(url, data);
  }

  deleteCompany(data: string){
    let url = `http://localhost:5000/api/company${data}`;
    return this.http.delete(url);
  }

}
