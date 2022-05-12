import { TestBed } from '@angular/core/testing';

import { PhoneNumberResponseService } from './phone-number-response.service';

describe('PhoneNumberResponseService', () => {
  let service: PhoneNumberResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneNumberResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
