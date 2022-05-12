import { TestBed } from '@angular/core/testing';

import { QuestionTypesValidationService } from './question-types-validation.service';

describe('QuestionTypesValidationService', () => {
  let service: QuestionTypesValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionTypesValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
