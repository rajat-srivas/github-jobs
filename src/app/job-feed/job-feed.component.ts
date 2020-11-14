import { Component, OnInit } from "@angular/core";
import { Job } from "../_models/Job";
import { GitHubJobService } from "./../_services/GitHubJob.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';


@Component({
  selector: "app-job-feed",
  templateUrl: "./job-feed.component.html",
  styleUrls: ["./job-feed.component.scss"],
})
export class JobFeedComponent implements OnInit {
  constructor(private jobService: GitHubJobService, private route: Router, private spinner: NgxSpinnerService) {}
  hideLoadMore: boolean;
  showNotFound = false;
  ngOnInit() {
    this.showNotFound = false;
    if(!this.jobService.jobsDetails) {
     this.GetAllJobs();
    }
  }

  LoadMoreJobs() {
    this.jobService.pageNumber++;
    this.GetAllJobs();
  }

  GetAllJobs() {
    this.showNotFound = false;
    this.spinner.show();
    this.jobService.GetAllJobs().subscribe(
      (response) => {
        console.log('started');
        if(this.jobService.jobsDetails)
        {
        console.log('concat');
          this.jobService.jobsDetails = [...this.jobService.jobsDetails, ...(response as Job[])];
          this.hideLoadMore = false;
        }
        else {
          console.log('new');
          this.jobService.jobsDetails = response as Job[];
        }
        console.log(this.jobService.jobsDetails);
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      },
      () => {
        console.log('ended');
        this.spinner.hide();
      }
    );
  }

  SearchJobs(event){
    this.spinner.show();
    this.hideLoadMore = true;
    this.jobService.SearchJobs(event).subscribe(
      (response) => {
          this.jobService.jobsDetails = response as Job[];
          console.log('here');
          console.log(this.jobService.jobsDetails);
          if(this.jobService.jobsDetails.length == 0){
            console.log('shownotfound');
            this.showNotFound = true;
          }
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      },
      () => {
        console.log('ended');
        this.spinner.hide();
      }
    );
  }

  ClearSearchFilters() {
      this.GetAllJobs();
  }
}
