import { TestBed } from '@angular/core/testing';

import { MultipleChoiceQuestionService } from './multiple-choice-question.service';

describe('MultipleChoiceQuestionService', () => {
  let service: MultipleChoiceQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleChoiceQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
