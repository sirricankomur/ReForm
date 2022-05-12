import { TestBed } from '@angular/core/testing';

import { YesNoQuestionService } from './yes-no-question.service';

describe('YesNoQuestionService', () => {
  let service: YesNoQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YesNoQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
