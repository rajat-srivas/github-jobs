import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements OnInit {
  @Output() SearchGithubJobs = new EventEmitter();
  @Output() ClearSearchFilter = new EventEmitter();
  title: string;
  location: string;
  fulltime: boolean;
  constructor() {}

  ngOnInit() {}

  SearchJobs() {
    let queryString = "";
    console.log(this.fulltime);
    if (this.title) queryString += "description=" + this.title + "&";
    if (this.location) queryString += "location=" + this.location + "&";
    if (this.fulltime) queryString += "full_time=true";
    console.log(queryString);
    if (queryString.length > 0) this.SearchGithubJobs.emit(queryString);
  }

  ClearJobs() {
    this.title = '';
    this.location = '';
    this.ClearSearchFilter.emit();
  }
}
