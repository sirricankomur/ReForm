import { TestBed } from '@angular/core/testing';

import { EmailQuestionService } from './email-question.service';

describe('EmailQuestionService', () => {
  let service: EmailQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
