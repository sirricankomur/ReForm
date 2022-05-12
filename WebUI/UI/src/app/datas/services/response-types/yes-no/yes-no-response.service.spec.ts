import { TestBed } from '@angular/core/testing';

import { YesNoResponseService } from './yes-no-response.service';

describe('YesNoResponseService', () => {
  let service: YesNoResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YesNoResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
