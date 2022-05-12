import { TestBed } from '@angular/core/testing';

import { DateResponseService } from './date-response.service';

describe('DateResponseService', () => {
  let service: DateResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
