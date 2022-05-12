import { TestBed } from '@angular/core/testing';

import { OpinionScaleResponseService } from './opinion-scale-response.service';

describe('OpinionScaleResponseService', () => {
  let service: OpinionScaleResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpinionScaleResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
