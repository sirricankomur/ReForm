import { TestBed } from '@angular/core/testing';

import { DateQuestionService } from './date-question.service';

describe('DateQuestionService', () => {
  let service: DateQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
