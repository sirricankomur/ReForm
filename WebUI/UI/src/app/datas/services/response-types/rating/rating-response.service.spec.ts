import { TestBed } from '@angular/core/testing';

import { RatingResponseService } from './rating-response.service';

describe('RatingResponseService', () => {
  let service: RatingResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
