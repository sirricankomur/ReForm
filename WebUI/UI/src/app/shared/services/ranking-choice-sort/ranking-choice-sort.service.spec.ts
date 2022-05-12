import { TestBed } from '@angular/core/testing';

import { RankingChoiceSortService } from './ranking-choice-sort.service';

describe('RankingChoiceSortService', () => {
  let service: RankingChoiceSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingChoiceSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
