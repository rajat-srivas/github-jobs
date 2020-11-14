import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../_models/Job';
import { GitHubJobService } from './../_services/GitHubJob.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
selectedJobId: string;
jobHere: Job;
  constructor(private jobService: GitHubJobService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedJobId = this.activateRoute.snapshot.params['id'];
    if(this.jobService.jobsDetails)
    {
      this.jobHere = this.jobService.jobsDetails.find(x=>x.id === this.selectedJobId);
      console.log(this.jobHere);
    }
    else {
      this.jobService.GetJobById(this.selectedJobId).subscribe(
        (response) => {
          this.jobHere = response as Job;
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }

}
