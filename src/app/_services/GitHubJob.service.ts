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
  return this.http.get(this.baseUrl + '.json?' + 'page=' + this.pageNumber + '&search=code');
}

SearchJobs(query) {
  return this.http.get(this.baseUrl + '.json?' + query);
}

GetJobById(id:string){
  return this.http.get(this.baseUrl + '/' + id + '.json?markdown=true');
}


}
