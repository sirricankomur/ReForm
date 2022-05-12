import { TestBed } from '@angular/core/testing';

import { MultipleChoiceSortService } from './multiple-choice-sort.service';

describe('MultipleChoiceSortService', () => {
  let service: MultipleChoiceSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleChoiceSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
