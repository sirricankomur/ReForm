import { TestBed } from '@angular/core/testing';

import { EmailResponseService } from './email-response.service';

describe('EmailResponseService', () => {
  let service: EmailResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
