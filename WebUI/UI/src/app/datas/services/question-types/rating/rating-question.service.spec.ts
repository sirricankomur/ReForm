import { TestBed } from '@angular/core/testing';

import { RatingQuestionService } from './rating-question.service';

describe('RatingQuestionService', () => {
  let service: RatingQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
