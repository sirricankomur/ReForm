import { TestBed } from '@angular/core/testing';

import { RankingQuestionService } from './ranking-question.service';

describe('RankingQuestionService', () => {
  let service: RankingQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
