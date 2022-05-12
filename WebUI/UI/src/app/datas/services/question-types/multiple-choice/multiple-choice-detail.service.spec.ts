import { TestBed } from '@angular/core/testing';

import { MultipleChoiceDetailService } from './multiple-choice-detail.service';

describe('MultipleChoiceDetailService', () => {
  let service: MultipleChoiceDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleChoiceDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
