import { TestBed } from '@angular/core/testing';

import { HackerNewsAPIService } from './hacker-news-api.service';

describe('HackerNewsAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HackerNewsAPIService = TestBed.get(HackerNewsAPIService);
    expect(service).toBeTruthy();
  });
});
