import { TestBed } from '@angular/core/testing';

import { PhoneNumberQuestionService } from './phone-number-question.service';

describe('PhoneNumberQuestionService', () => {
  let service: PhoneNumberQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneNumberQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
