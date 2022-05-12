import { TestBed } from '@angular/core/testing';

import { WebsiteQuestionService } from './website-question.service';

describe('WebsiteQuestionService', () => {
  let service: WebsiteQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
