import { TestBed } from '@angular/core/testing';

import { NumberQuestionService } from './number-question.service';

describe('NumberQuestionService', () => {
  let service: NumberQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
