import { TestBed } from '@angular/core/testing';

import { MultipleChoiceResponseService } from './multiple-choice-response.service';

describe('MultipleChoiceResponseService', () => {
  let service: MultipleChoiceResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleChoiceResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
