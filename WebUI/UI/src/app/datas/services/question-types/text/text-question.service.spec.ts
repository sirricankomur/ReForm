import { TestBed } from '@angular/core/testing';

import { TextQuestionService } from './text-question.service';

describe('TextQuestionService', () => {
  let service: TextQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
