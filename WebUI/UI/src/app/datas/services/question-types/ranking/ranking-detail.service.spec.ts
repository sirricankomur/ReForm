import { TestBed } from '@angular/core/testing';

import { RankingDetailService } from './ranking-detail.service';

describe('RankingDetailService', () => {
  let service: RankingDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
