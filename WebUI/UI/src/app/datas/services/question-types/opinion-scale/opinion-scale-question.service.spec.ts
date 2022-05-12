import { TestBed } from '@angular/core/testing';

import { OpinionScaleQuestionService } from './opinion-scale-question.service';

describe('OpinionScaleQuestionService', () => {
  let service: OpinionScaleQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpinionScaleQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
