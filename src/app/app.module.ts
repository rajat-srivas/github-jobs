import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { FiltersComponent } from './filters/filters.component';
import { JobFeedComponent } from './job-feed/job-feed.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
      DashboardComponent,
      JobCardComponent,
      JobDetailsComponent,
      FiltersComponent,
      JobFeedComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
