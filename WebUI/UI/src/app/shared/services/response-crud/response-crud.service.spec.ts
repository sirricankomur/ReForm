import { TestBed } from '@angular/core/testing';

import { ResponseCrudService } from './response-crud.service';

describe('ResponseCrudService', () => {
  let service: ResponseCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
