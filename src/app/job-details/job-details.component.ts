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
jobHere: Job;
  constructor(private jobService: GitHubJobService) { }

  ngOnInit() {
    this.jobHere = this.jobService.jobSelected;
    console.log(this.jobHere);
    console.log('job');


  }

}
