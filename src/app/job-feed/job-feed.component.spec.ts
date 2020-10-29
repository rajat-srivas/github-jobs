/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobFeedComponent } from './job-feed.component';

describe('JobFeedComponent', () => {
  let component: JobFeedComponent;
  let fixture: ComponentFixture<JobFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
