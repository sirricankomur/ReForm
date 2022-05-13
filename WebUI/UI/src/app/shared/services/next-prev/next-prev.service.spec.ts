import { TestBed } from '@angular/core/testing';

import { NextPrevService } from './next-prev.service';

describe('NextPrevService', () => {
  let service: NextPrevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextPrevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
