/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitHubJobService } from './GitHubJob.service';

describe('Service: GitHubJob', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubJobService]
    });
  });

  it('should ...', inject([GitHubJobService], (service: GitHubJobService) => {
    expect(service).toBeTruthy();
  }));
});
