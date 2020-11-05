import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobFeedComponent } from './job-feed/job-feed.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  {
    path: '', component: JobFeedComponent
  },
  {
    path: 'home', component: JobFeedComponent
  },
  {
    path: 'detail', component: JobDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
