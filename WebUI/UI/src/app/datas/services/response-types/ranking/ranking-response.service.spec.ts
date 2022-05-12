import { TestBed } from '@angular/core/testing';

import { RankingResponseService } from './ranking-response.service';

describe('RankingResponseService', () => {
  let service: RankingResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
