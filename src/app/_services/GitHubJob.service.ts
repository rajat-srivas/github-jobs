import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Job } from './../_models/Job';

@Injectable({
  providedIn: 'root'
})
export class GitHubJobService {

searchTerm: string;
locationSearch: string;
jobsToShow: number;
baseUrl = environment.baseUrl;
jobsDetails : Array<Job>  ;
pageNumber: number = 1;
jobSelected: Job;
constructor(private http: HttpClient) { }

GetAllJobs() {
  return this.http.get(this.baseUrl  + 'page=' + this.pageNumber + '&search=code');
}

SearchJobs(desc:string, full_time: boolean, location: string) {
  var url = this.baseUrl;
  if(desc) url = url + 'description=' + desc + '&';
  if(full_time) url = url + 'full_time=' + full_time.valueOf.toString() + '&';
  return this.http.get(url);
}


}
