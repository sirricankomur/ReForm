import { TestBed } from '@angular/core/testing';

import { PrevNextService } from './prev-next.service';

describe('PrevNextService', () => {
  let service: PrevNextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevNextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
