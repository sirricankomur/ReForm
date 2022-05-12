import { TestBed } from '@angular/core/testing';

import { TextResponseService } from './text-response.service';

describe('TextResponseService', () => {
  let service: TextResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
