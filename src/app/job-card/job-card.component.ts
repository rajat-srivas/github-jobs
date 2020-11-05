import { Component, Input, OnInit } from '@angular/core';
import { Job } from './../_models/Job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
@Input('jobItem') job: Job;
  constructor() { }

  ngOnInit() {
  }

}
