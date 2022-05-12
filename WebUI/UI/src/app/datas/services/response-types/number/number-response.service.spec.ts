import { TestBed } from '@angular/core/testing';

import { NumberResponseService } from './number-response.service';

describe('NumberResponseService', () => {
  let service: NumberResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
