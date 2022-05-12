import { TestBed } from '@angular/core/testing';

import { WebsiteResponseService } from './website-response.service';

describe('WebsiteResponseService', () => {
  let service: WebsiteResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
