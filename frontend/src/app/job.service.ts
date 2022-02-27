import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JwtHelperService } from "@auth0/angular-jwt";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  helper = new JwtHelperService();

  constructor(private http:HttpClient, private cookie: CookieService) { }

  getAllPosts(page: number){
    console.log(page);
    
    let url = `https://software-jobs.herokuapp.com/api/jobs/search?page=${page}`;
    return this.http.get(url);
  }

  getJobLength(){
    let url = "https://software-jobs.herokuapp.com/api/jobs/length";
    return this.http.get(url);    
  }

  applyJob(jobData: any){
    
    const token = JSON.parse(this.cookie.get('token'));
    const tokenData = this.helper.decodeToken(token); 
    console.log(token, "---------as");
    
    const user_id = tokenData.id;
    console.log(user_id);
    
    const data: any = {
      user_id,
      job_id: jobData.job_id,
      company_id: jobData.company_id
    }
    console.log(data);
    

    let url = "https://software-jobs.herokuapp.com/api/application";
    return this.http.post(url, data);
  }

}
