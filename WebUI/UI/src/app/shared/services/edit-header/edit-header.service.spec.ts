import { TestBed } from '@angular/core/testing';

import { EditHeaderService } from './edit-header.service';

describe('EditHeaderService', () => {
  let service: EditHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
